document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('#quizForm');
  if (!form) return;

  // High-fidelity fallback questions if backend API is not running
  const fallbackQuestions = [
    {
      id: 1,
      question: "What should you always do before placing an empty milk or oil pouch into the dry plastic bin?",
      option_a: "Rinse with water and let it dry",
      option_b: "Throw it away with wet food leftovers",
      option_c: "Burn it in the backyard",
      option_d: "Bury it directly in vegetable soil",
      correct: "a",
      explanation: "Rinsing removes oils and organic residue, preventing foul odours and keeping the material valuable for recyclers."
    },
    {
      id: 2,
      question: "Which color bin is designated for wet biodegradable kitchen waste?",
      option_a: "Red Bin",
      option_b: "Green Bin",
      option_c: "Yellow Bin",
      option_d: "Black Bin",
      correct: "b",
      explanation: "Green Bins are universally used for wet and organic kitchen scraps that can be safely composted."
    },
    {
      id: 3,
      question: "What does Resin Code #1 (PET) typically represent?",
      option_a: "Thick plumbing sewage pipes",
      option_b: "Clear drinking water and beverage bottles",
      option_c: "Heavy duty automobile battery casing",
      option_d: "Styrofoam disposable tea cups",
      correct: "b",
      explanation: "Code 1 (PET) is the most widely collected transparent bottle polymer, 100% recyclable."
    },
    {
      id: 4,
      question: "Why is open-air burning of plastic waste extremely dangerous for village health?",
      option_a: "It leaves too much clean ash behind",
      option_b: "It releases deadly dioxins, furans, and toxic particulate matter into our air",
      option_c: "It attracts mosquitoes to the fire",
      option_d: "It makes rain water evaporate too quickly",
      correct: "b",
      explanation: "Burning plastic converts synthetic polymers into airborne carcinogens that cause asthma and chronic lung diseases."
    },
    {
      id: 5,
      question: "Why should leftover food NEVER be discarded inside tied plastic polythene bags?",
      option_a: "It keeps the food fresh for too long",
      option_b: "Grazing cows and cattle ingest the bags, which block their stomach and cause death",
      option_c: "It makes the bag too heavy to lift",
      option_d: "It prevents earthworms from flying away",
      correct: "b",
      explanation: "Cattle cannot digest synthetic plastic. Ingested bags accumulate in the rumen and prove fatal."
    },
    {
      id: 6,
      question: "What is the most effective single habit to reduce village plastic footprint?",
      option_a: "Carry a reusable cloth or jute bag every time you visit the market",
      option_b: "Ask shopkeepers for thicker plastic pouches",
      option_c: "Throw plastic into fast-flowing irrigation canals",
      option_d: "Use 5 different small plastic bags for every vegetable",
      correct: "a",
      explanation: "Carrying one reusable bag eliminates hundreds of single-use polythene pouches every single year."
    },
    {
      id: 7,
      question: "Which of the following is considered safe for long-term household storage of seeds and grains?",
      option_a: "An empty pesticide spray can",
      option_b: "Clean, food-grade Polypropylene (PP #5) or HDPE (#2) container",
      option_c: "Single-use thin Styrofoam cup",
      option_d: "Old cracked chemical battery container",
      correct: "b",
      explanation: "PP (#5) and HDPE (#2) are sturdy, food-grade polymers that do not leach toxic additives when kept clean and dry."
    },
    {
      id: 8,
      question: "What happens when wet food curries are mixed into recyclable plastics?",
      option_a: "The plastic melts faster in sunlight",
      option_b: "The food oil contaminates the batch, causing scrap recyclers to reject it",
      option_c: "It turns the plastic into organic fertilizer",
      option_d: "Nothing, recyclers love oily plastics",
      correct: "b",
      explanation: "Food and grease ruin the mechanical shredding and melting process, causing entire shipments to be landfilled."
    },
    {
      id: 9,
      question: "What should you do with plastic beverage bottles before collection?",
      option_a: "Fill them with dirt to make them heavier",
      option_b: "Empty completely, remove caps if needed, and step on them to flatten",
      option_c: "Toss them into the village pond",
      option_d: "Burn the label off with a lighter",
      correct: "b",
      explanation: "Flattening bottles saves up to 75% volume, allowing collection vehicles to carry much more material efficiently."
    },
    {
      id: 10,
      question: "What is the primary benefit of segregating waste directly at your doorstep?",
      option_a: "It allows organic waste to become compost while plastics get safely reprocessed",
      option_b: "It makes garbage look colourful",
      option_c: "It reduces the weight of earth",
      option_d: "It stops trees from growing too tall",
      correct: "a",
      explanation: "Doorstep segregation is the foundation of clean villages: organic goes to soil, plastic goes to recycling."
    }
  ];

  let questions = [];
  let current = 0;
  const answers = {};
  let isUsingFallback = false;

  function renderQuestion() {
    const question = questions[current];
    const progress = Math.round(((current + 1) / questions.length) * 100);

    form.innerHTML = `
      <div class="quiz-shell reveal">
        <div class="quiz-header">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge-soft badge-soft-emerald">
              <i class="fa-solid fa-circle-question"></i> Question ${current + 1} of ${questions.length}
            </span>
            <span class="small fw-bold text-success">${progress}% Complete</span>
          </div>
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>

        <div class="quiz-question-box">
          <h2 class="quiz-question-title">${question.question}</h2>
          
          <div class="options-container">
            ${['a', 'b', 'c', 'd'].map(key => {
              const optText = question['option_' + key];
              if (!optText) return '';
              const isSelected = answers[question.id] === key;
              return `
                <label class="quiz-option ${isSelected ? 'selected' : ''}">
                  <input type="radio" name="answer" value="${key}" ${isSelected ? 'checked' : ''} required>
                  <span class="fw-semibold text-dark">${optText}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>

        <div class="d-flex justify-content-between align-items-center gap-3 mt-4 pt-3 border-top">
          <button class="btn btn-soft" type="button" id="prevBtn" ${current === 0 ? 'disabled' : ''}>
            <i class="fa-solid fa-arrow-left"></i> Previous
          </button>
          <button class="btn btn-primary" type="button" id="nextBtn">
            ${current === questions.length - 1 ? '<span>Submit Answers</span> <i class="fa-solid fa-check"></i>' : '<span>Next Question</span> <i class="fa-solid fa-arrow-right"></i>'}
          </button>
        </div>
      </div>
    `;

    // Event handlers
    form.querySelectorAll('input[name="answer"]').forEach(input => {
      input.addEventListener('change', () => {
        answers[question.id] = input.value;
        form.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
        input.closest('.quiz-option').classList.add('selected');
      });
    });

    form.querySelector('#prevBtn').addEventListener('click', () => {
      if (current > 0) {
        current -= 1;
        renderQuestion();
      }
    });

    form.querySelector('#nextBtn').addEventListener('click', () => {
      if (!answers[question.id]) {
        toast('Please choose an answer to proceed.', false);
        return;
      }
      if (current < questions.length - 1) {
        current += 1;
        renderQuestion();
      } else {
        submitQuiz();
      }
    });
  }

  async function submitQuiz() {
    let score = 0;
    const total = questions.length;

    if (isUsingFallback) {
      // Local client evaluation
      questions.forEach(q => {
        if (answers[q.id] === q.correct) {
          score += 1;
        }
      });
      showResults(score, total);
    } else {
      // Backend submission
      try {
        const { data } = await api('/quiz/submit', {
          method: 'POST',
          body: JSON.stringify({ answers })
        });
        showResults(data.score, data.totalQuestions, data.message);
      } catch (err) {
        // Evaluate locally if backend submission fails
        questions.forEach(q => {
          if (q.correct && answers[q.id] === q.correct) {
            score += 1;
          }
        });
        showResults(score, total);
      }
    }
  }

  function showResults(score, total, customMsg = null) {
    const percentage = Math.round((score / total) * 100);
    let title = "Village Eco Champion! 🌟";
    let message = "Outstanding! You have exceptional awareness of plastic segregation, resin codes, and village environmental safety.";

    if (percentage < 50) {
      title = "Learning in Progress 🌱";
      message = "Good attempt! Review our modules on Waste Segregation and Do's & Don'ts to build even stronger daily eco habits.";
    } else if (percentage < 80) {
      title = "Great Eco Awareness! 🌿";
      message = "Well done! You have solid awareness. Keep sharing your knowledge with family members and neighbours!";
    }

    if (customMsg) {
      message = customMsg;
    }

    const resultEl = document.querySelector('#quizResult');
    resultEl.innerHTML = `
      <div class="quiz-result-card reveal">
        <div class="quiz-score-circle">
          <span class="quiz-score-num">${percentage}%</span>
          <span class="quiz-score-label">Score</span>
        </div>
        <span class="badge-soft badge-soft-emerald mb-2"><i class="fa-solid fa-trophy text-warning"></i> Quiz Completed</span>
        <h2 class="h2 text-dark mb-2">${title}</h2>
        <p class="lead text-muted mx-auto mb-4" style="max-width: 600px;">
          You answered <strong>${score} out of ${total}</strong> questions correctly. ${message}
        </p>

        <div class="d-flex flex-wrap justify-content-center gap-3">
          <button class="btn btn-primary" type="button" id="restartQuiz">
            <i class="fa-solid fa-rotate-right"></i> Try Quiz Again
          </button>
          <a class="btn btn-outline-primary" href="segregation.html">
            <i class="fa-solid fa-book-open"></i> Review Segregation
          </a>
          <a class="btn btn-soft" href="feedback.html">
            <i class="fa-solid fa-comment-dots"></i> Share Your Feedback
          </a>
        </div>
      </div>
    `;

    document.querySelector('#quizFormContainer').style.display = 'none';
    document.querySelector('#restartQuiz').addEventListener('click', () => location.reload());
    window.scrollTo({ top: resultEl.offsetTop - 100, behavior: 'smooth' });
  }

  // Load questions
  try {
    const response = await api('/quiz');
    if (response && response.data && response.data.length > 0) {
      questions = response.data;
      isUsingFallback = false;
    } else {
      throw new Error('No API questions');
    }
  } catch (err) {
    // Graceful offline fallback
    questions = fallbackQuestions;
    isUsingFallback = true;
  }

  renderQuestion();
});

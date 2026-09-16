document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#feedbackForm');
  if (!form) return;

  // Star Rating Interaction
  const starWidget = document.querySelector('#starRatingWidget');
  const ratingInput = document.querySelector('#ratingInput');
  const ratingLabel = document.querySelector('#ratingLabel');

  const ratingDescriptions = {
    1: '1 Star - Needs significant improvement',
    2: '2 Stars - Somewhat useful',
    3: '3 Stars - Average & informative',
    4: '4 Stars - Very good & practical',
    5: '5 Stars - Outstanding & very useful!'
  };

  if (starWidget) {
    const stars = starWidget.querySelectorAll('i');

    function updateStars(rating) {
      stars.forEach(star => {
        const r = parseInt(star.dataset.rating, 10);
        if (r <= rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
      ratingInput.value = rating;
      if (ratingLabel) {
        ratingLabel.textContent = ratingDescriptions[rating] || `${rating} Stars`;
      }
    }

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.rating, 10);
        updateStars(rating);
      });

      star.addEventListener('mouseenter', () => {
        const rating = parseInt(star.dataset.rating, 10);
        stars.forEach(s => {
          const r = parseInt(s.dataset.rating, 10);
          if (r <= rating) {
            s.style.color = '#f59e0b';
          } else {
            s.style.color = '#cbd5e1';
          }
        });
      });
    });

    starWidget.addEventListener('mouseleave', () => {
      const currentRating = parseInt(ratingInput.value, 10) || 5;
      stars.forEach(s => {
        s.style.color = '';
      });
      updateStars(currentRating);
    });
  }

  // Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status"></span>Submitting...`;

    const formData = Object.fromEntries(new FormData(form));

    try {
      const data = await api('/feedback', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      toast(data.message || 'Thank you! Your feedback has been recorded successfully.');
      form.reset();
      if (ratingInput) ratingInput.value = '5';
      if (starWidget) {
        starWidget.querySelectorAll('i').forEach(s => s.classList.add('active'));
      }
      if (ratingLabel) ratingLabel.textContent = '5 Stars - Outstanding & very useful!';
    } catch (err) {
      // Graceful local storage fallback if API server is offline
      const stored = JSON.parse(localStorage.getItem('saved_feedbacks') || '[]');
      stored.push({ ...formData, created_at: new Date().toISOString() });
      localStorage.setItem('saved_feedbacks', JSON.stringify(stored));

      toast('Thank you! Your feedback has been received and saved locally.');
      form.reset();
      if (ratingInput) ratingInput.value = '5';
      if (starWidget) {
        starWidget.querySelectorAll('i').forEach(s => s.classList.add('active'));
      }
      if (ratingLabel) ratingLabel.textContent = '5 Stars - Outstanding & very useful!';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
});

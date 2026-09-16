const localApiUrl = `${window.location.protocol}//${window.location.hostname}:5000/api`;
const defaultApiUrl = window.location.protocol === 'file:'
  ? 'http://localhost:5000/api'
  : window.location.port === '5500'
    ? localApiUrl
    : '/api';
const API_URL = localStorage.getItem('apiUrl') || defaultApiUrl;

const navItems = [
  ['index.html', 'Home', 'fa-house'],
  ['about.html', 'About', 'fa-circle-info'],
  ['plastic-types.html', 'Plastic Types', 'fa-shapes'],
  ['segregation.html', 'Segregation', 'fa-recycle'],
  ['reuse.html', 'Reuse', 'fa-arrows-rotate'],
  ['recycling.html', 'Recycling', 'fa-leaf'],
  ['feedback.html', 'Feedback', 'fa-comment-dots']
];

const telugu = {
  Home: 'హోమ్',
  About: 'మన గురించి',
  'Plastic Types': 'ప్లాస్టిక్ రకాలు',
  Segregation: 'వేరు చేయడం',
  Reuse: 'మళ్లీ వాడటం',
  Recycling: 'రీసైక్లింగ్',
  "Do's & Don'ts": 'చేయవలసినవి - వద్దు',
  Quiz: 'క్విజ్',
  Feedback: 'అభిప్రాయం',
  Login: 'లాగిన్',
  Register: 'నమోదు',
  Logout: 'లాగౌట్',
  'Start Learning': 'నేర్చుకోవడం ప్రారంభించండి',
  'Take the Quiz': 'క్విజ్ ఆడండి',
  'Community Awareness Platform': 'గ్రామీణ ప్లాస్టిక్ అవగాహన వేదిక',
  'Together for a Cleaner Village': 'పరిశుభ్రమైన గ్రామం కోసం కలిసి పని చేద్దాం'
};

const pageTelugu = {
  'Community Awareness & Action Platform': 'సమాజ అవగాహన మరియు కార్యాచరణ వేదిక',
  'Together for a': 'కలిసి',
  'Cleaner, Plastic-Free': 'పరిశుభ్రమైన, ప్లాస్టిక్ రహిత',
  'Village.': 'గ్రామం కోసం.',
  'Empowering households and local communities with simple, everyday habits to reduce plastic, segregate waste at home, and protect our soil, water, and cattle.': 'ప్లాస్టిక్‌ను తగ్గించడానికి, ఇంట్లోనే చెత్తను వేరు చేయడానికి, మన నేల, నీరు మరియు పశువులను రక్షించడానికి కుటుంబాలు మరియు స్థానిక సమాజాలకు సులభమైన రోజువారీ అలవాట్లను అందిస్తోంది.',
  'Start Learning': 'నేర్చుకోవడం ప్రారంభించండి',
  'Take the 2-Min Quiz': '2 నిమిషాల క్విజ్ రాయండి',
  'Clean Soil & Water': 'శుభ్రమైన నేల మరియు నీరు',
  '4-Bin Segregation': '4 బిన్‌ల చెత్త వేరు చేయడం',
  'Zero Open Burning': 'బహిరంగ దహనం వద్దు',
  'Protect Cattle': 'పశువులను రక్షించండి',
  'Village Impact': 'గ్రామంపై ప్రభావం',
  'Community': 'సమాజం',
  'Plastic diverted from open dumping': 'బహిరంగంగా పడేయకుండా మళ్లించిన ప్లాస్టిక్',
  'Practicing household source segregation': 'ఇంటివద్దే చెత్తను వేరు చేస్తున్న గ్రామాలు',
  'Decoded for safe identification & reuse': 'సురక్షిత గుర్తింపు మరియు పునర్వినియోగం కోసం వివరాలు',
  'Daily Golden Rule:': 'రోజువారీ ముఖ్య నియమం:',
  'Never burn plastic wrappers or bottles. Burning releases poisonous gases that harm elders, infants, and farmland.': 'ప్లాస్టిక్ కవర్లు లేదా సీసాలను ఎప్పుడూ కాల్చవద్దు. కాల్చడం వల్ల పెద్దలు, శిశువులు మరియు వ్యవసాయ భూములకు హాని చేసే విష వాయువులు విడుదలవుతాయి.',
  'Why Plastic Management Matters': 'ప్లాస్టిక్ నిర్వహణ ఎందుకు ముఖ్యం',
  'Our Purpose & Mission': 'మా లక్ష్యం మరియు ఉద్దేశ్యం',
  'Core Pillars': 'ముఖ్యమైన అంశాలు',
  'The real cost of uncontrolled plastic.': 'నియంత్రణ లేని ప్లాస్టిక్ వల్ల కలిగే నిజమైన నష్టం.',
  'Plastic Types': 'ప్లాస్టిక్ రకాలు',
  'Waste Segregation': 'చెత్త వేరు చేయడం',
  'Safe Reuse': 'సురక్షిత పునర్వినియోగం',
  'Recycle Better': 'మెరుగ్గా రీసైకిల్ చేయండి',
  'Environmental Impact': 'పర్యావరణ ప్రభావం',
  'Feedback': 'అభిప్రాయం',
  'Submit Feedback': 'అభిప్రాయం పంపండి',
  'Register': 'నమోదు',
  'Login': 'లాగిన్',
  'Logout': 'లాగ్‌అవుట్',
  'Explore Guide': 'మార్గదర్శిని చూడండి',
  'Action & Impact': 'చర్య మరియు ప్రభావం',
  'Community Pledge': 'సమాజ ప్రతిజ్ఞ',
  'Cleaner villages begin with one small daily choice.': 'ప్రతిరోజూ చేసే ఒక చిన్న మంచి నిర్ణయంతో పరిశుభ్రమైన గ్రామాలు ప్రారంభమవుతాయి.'
  , 'Plastic is a miracle of modern packaging, but careless disposal silently ruins our soils, chokes our canals, and threatens our livestock.': 'ఆధునిక ప్యాకేజింగ్‌లో ప్లాస్టిక్ ఒక అద్భుతం, కానీ నిర్లక్ష్యంగా పారవేయడం మన నేలను నాశనం చేసి, కాలువలను మూసివేసి, పశువులకు ముప్పు కలిగిస్తుంది.'
  , 'Plastic bottles remain in farmland without breaking down': 'ప్లాస్టిక్ సీసాలు కుళ్లిపోకుండా వ్యవసాయ భూమిలో మిగిలిపోతాయి'
  , 'Of water litter originates from land-based inland dumping': 'నీటిలోని చెత్తలో ఎక్కువ భాగం భూమిపై చెత్తను పడేయడం వల్ల వస్తుంది'
  , 'Achieved when communities eliminate open pile burning': 'సమాజాలు బహిరంగంగా చెత్తను కాల్చడం ఆపితే ఇది సాధ్యమవుతుంది'
  , 'With source segregation and community collection': 'మూలం వద్దే చెత్తను వేరు చేసి, సమాజ సేకరణతో సాధించవచ్చు'
  , 'Understanding the hidden impacts on our environment helps us make better decisions every day.': 'మన పర్యావరణంపై దాగి ఉన్న ప్రభావాలను అర్థం చేసుకోవడం ద్వారా ప్రతిరోజూ మంచి నిర్ణయాలు తీసుకోగలుగుతాము.'
  , 'Thin plastic bags and wrappers buried in agricultural fields block water percolation, stifle earthworms, and prevent crop roots from absorbing vital nutrients.': 'వ్యవసాయ భూమిలో పాతిపెట్టిన పలుచని ప్లాస్టిక్ సంచులు నీరు లోపలికి వెళ్లకుండా చేసి, వానపాములను అడ్డుకుని, పంట వేర్లు అవసరమైన పోషకాలను గ్రహించకుండా చేస్తాయి.'
  , 'Bottles and sachets thrown into ditches wash into village irrigation tanks and canals. They create stagnant water pools where mosquitoes breed and choke water flow.': 'కాలువల్లో పడేసిన సీసాలు మరియు ప్యాకెట్లు గ్రామ నీటిపారుదల చెరువులు, కాలువల్లోకి చేరుతాయి. అవి దోమలు పెరిగే నిల్వ నీటి గుంతలను సృష్టించి నీటి ప్రవాహాన్ని అడ్డుకుంటాయి.'
  , 'Cows, buffaloes, and goats graze on roadside waste and accidentally ingest food-smeared plastic bags. Over time, plastic clogs their stomach (rumen), causing sickness and death.': 'ఆవులు, గేదెలు, మేకలు రోడ్డు పక్కన ఉన్న చెత్తను తింటూ ఆహారం అంటుకున్న ప్లాస్టిక్ సంచులను మింగుతాయి. కాలక్రమేణా ప్లాస్టిక్ వాటి కడుపులో పేరుకుని అనారోగ్యం మరియు మరణానికి కారణమవుతుంది.'
  , 'Open-air burning of PVC, plastics, and rubber releases toxic furans, dioxins, and particulate matter (PM2.5). These chemicals cause asthma, eye burning, and long-term lung disorders.': 'PVC, ప్లాస్టిక్ మరియు రబ్బరును బహిరంగంగా కాల్చడం వల్ల విషపూరిత వాయువులు మరియు సూక్ష్మ కణాలు విడుదలవుతాయి. ఇవి ఉబ్బసం, కళ్ల మంట మరియు దీర్ఘకాలిక ఊపిరితిత్తుల సమస్యలకు కారణమవుతాయి.'
  , 'Clean, sorted recyclable plastics (PET bottles, HDPE containers, milk pouches) have direct resale cash value for village self-help groups (SHGs) and local kabadiwalas.': 'శుభ్రంగా వేరు చేసిన రీసైకిల్ చేయగల ప్లాస్టిక్‌కు గ్రామ స్వయం సహాయక సంఘాలు మరియు స్థానిక కబాడీవాలాలకు నేరుగా అమ్మకపు విలువ ఉంటుంది.'
  , 'We do not need a handful of people doing zero waste perfectly; we need thousands of villagers taking one simple, conscious step every single day.': 'కొంతమంది మాత్రమే సంపూర్ణంగా చెత్త రహితంగా ఉండటం కాదు; వేలాది గ్రామస్థులు ప్రతిరోజూ ఒక చిన్న చైతన్యపూర్వక అడుగు వేయాలి.'
  , 'How Can We Make Your Village Cleaner?': 'మీ గ్రామాన్ని మరింత పరిశుభ్రంగా ఎలా మార్చగలం?'
  , 'Share what you learned, report local waste collection challenges, or tell us how we can explain segregation better in your native language.': 'మీరు నేర్చుకున్నది పంచుకోండి, స్థానిక చెత్త సేకరణ సమస్యలను తెలియజేయండి లేదా మీ మాతృభాషలో వేరు చేయడాన్ని ఎలా మెరుగ్గా వివరించాలో చెప్పండి.'
  , 'Share Your Experience': 'మీ అనుభవాన్ని పంచుకోండి'
  , 'Every suggestion is reviewed by our village coordinator team.': 'ప్రతి సూచనను మా గ్రామ సమన్వయ బృందం పరిశీలిస్తుంది.'
  , 'Your Full Name': 'మీ పూర్తి పేరు'
  , 'Village / Town': 'గ్రామం / పట్టణం'
  , 'How Helpful Was This?': 'ఇది ఎంత ఉపయోగకరంగా ఉంది?'
  , 'Your Feedback & Suggestions': 'మీ అభిప్రాయం మరియు సూచనలు'
  , 'Community Voices': 'సమాజ అభిప్రాయాలు'
  , 'Our farmers group completely stopped burning plastic bags near our canal after reading about soil toxin damage. The 4-bin color system is hanging in our village panchayat hall.': 'నేలపై విష ప్రభావం గురించి తెలుసుకున్న తర్వాత మా రైతుల సంఘం కాలువ దగ్గర ప్లాస్టిక్ సంచులను కాల్చడం పూర్తిగా ఆపింది. 4 బిన్ రంగుల విధానం మా గ్రామ పంచాయతీ హాలులో ఉంది.'
  , 'We reuse clean curd tubs for keeping seed varieties safe from moisture. The Telugu translations helped all the women in our Self Help Group understand resin codes.': 'విత్తనాలను తేమ నుంచి రక్షించడానికి మేము శుభ్రమైన పెరుగు డబ్బాలను మళ్లీ వాడుతున్నాము. తెలుగు అనువాదాలు మా స్వయం సహాయక సంఘంలోని మహిళలందరికీ రెసిన్ కోడ్‌లను అర్థం చేసుకోవడంలో సహాయపడ్డాయి.'
  , 'The quiz is brilliant. My school students scored 90% and now check every plastic bottle before throwing it away.': 'క్విజ్ చాలా బాగుంది. మా పాఠశాల విద్యార్థులు 90 శాతం సాధించారు, ఇప్పుడు ప్రతి ప్లాస్టిక్ సీసాను పడేయడానికి ముందు పరిశీలిస్తున్నారు.'
  , 'Circular Habit': 'పునర్వినియోగ అలవాటు'
  , 'Reuse Before You Replace': 'కొత్తది కొనేముందు మళ్లీ వాడండి'
  , 'A thoughtful second use prevents valuable resources from entering the waste stream early, cuts household expenses, and reduces the demand for new plastics.': 'ఒక వస్తువును ఆలోచనతో రెండోసారి వాడటం వల్ల విలువైన వనరులు త్వరగా చెత్తగా మారకుండా ఉంటాయి, ఇంటి ఖర్చులు తగ్గుతాయి మరియు కొత్త ప్లాస్టిక్ అవసరం తగ్గుతుంది.'
  , 'Close the Loop': 'చక్రాన్ని పూర్తి చేయండి'
  , 'Recycling for Everyday Life': 'రోజువారీ జీవితానికి రీసైక్లింగ్'
  , 'Recycling turns discard into durable resource. When plastic is kept clean and dry, it can be re-melted into new pipes, containers, and durable village roads instead of littering our rivers.': 'రీసైక్లింగ్ చెత్తను ఉపయోగకరమైన వనరుగా మార్చుతుంది. ప్లాస్టిక్‌ను శుభ్రంగా మరియు పొడిగా ఉంచితే, అది నదుల్లో చెత్తగా చేరకుండా కొత్త పైపులు, డబ్బాలు మరియు మన్నికైన గ్రామ రహదారులుగా మారుతుంది.'
  , 'Everyday Habits': 'రోజువారీ అలవాట్లు'
  , 'Good Habits Keep Villages Clean & Healthy': 'మంచి అలవాట్లు గ్రామాలను పరిశుభ్రంగా మరియు ఆరోగ్యంగా ఉంచుతాయి'
  , 'A quick, clear guide on actions that heal our village environment versus common practices that inadvertently poison our air, water, and cattle.': 'మన గ్రామ పర్యావరణాన్ని కాపాడే చర్యలు మరియు తెలియకుండానే గాలి, నీరు, పశువులకు హాని చేసే అలవాట్లపై సులభమైన స్పష్టమైన మార్గదర్శిని.'
  , 'Awareness Challenge': 'అవగాహన సవాలు'
  , 'Plastic Management Quiz': 'ప్లాస్టిక్ నిర్వహణ క్విజ్'
  , 'Answer 10 practical questions to test your everyday eco habits. Receive your score instantly with clear explanations.': 'మీ రోజువారీ పర్యావరణ అలవాట్లను పరీక్షించడానికి 10 ప్రాయోగిక ప్రశ్నలకు సమాధానం ఇవ్వండి. స్పష్టమైన వివరణలతో మీ స్కోర్‌ను వెంటనే పొందండి.'
  , 'Preparing Your Quiz...': 'మీ క్విజ్ సిద్ధమవుతోంది...'
  , 'Loading questions on segregation, resin codes, and village safety.': 'చెత్త వేరు చేయడం, రెసిన్ కోడ్‌లు మరియు గ్రామ భద్రతపై ప్రశ్నలు లోడ్ అవుతున్నాయి.'
  , 'EcoVillage Portal': 'ఎకోవిలేజ్ పోర్టల్'
  , 'Welcome Back to Cleaner Living.': 'పరిశుభ్రమైన జీవనానికి తిరిగి స్వాగతం.'
  , 'Access your learner profile, see your quiz scores, and stay connected with community waste initiatives.': 'మీ అభ్యాసక ప్రొఫైల్‌ను చూడండి, క్విజ్ స్కోర్‌లను తెలుసుకోండి మరియు సమాజ చెత్త నిర్వహణ కార్యక్రమాలతో అనుసంధానంగా ఉండండి.'
  , 'Free awareness modules': 'ఉచిత అవగాహన పాఠాలు'
  , 'Instant quiz score recording': 'క్విజ్ స్కోర్ తక్షణ నమోదు'
  , 'Support your village panchayat': 'మీ గ్రామ పంచాయతీకి మద్దతు ఇవ్వండి'
  , 'Cleaner villages begin with small daily choices.': 'ప్రతిరోజూ చేసే చిన్న మంచి నిర్ణయాలతో పరిశుభ్రమైన గ్రామాలు ప్రారంభమవుతాయి.'
  , 'Secure Sign In': 'సురక్షిత లాగిన్'
  , 'Learner Login': 'అభ్యాసక లాగిన్'
  , 'Enter your registered mobile number and password.': 'మీ నమోదైన మొబైల్ నంబర్ మరియు పాస్‌వర్డ్‌ను నమోదు చేయండి.'
  , 'Mobile Number': 'మొబైల్ నంబర్'
  , 'Password': 'పాస్‌వర్డ్'
  , 'Enter your password': 'మీ పాస్‌వర్డ్‌ను నమోదు చేయండి'
  , 'Sign In': 'లాగిన్ చేయండి'
};

const teluguWords = {
  'Our': 'మా', 'Purpose': 'లక్ష్యం', 'Mission': 'ఉద్దేశ్యం', 'Why': 'ఎందుకు', 'Matters': 'ముఖ్యం',
  'Plastic': 'ప్లాస్టిక్', 'Management': 'నిర్వహణ', 'Years': 'సంవత్సరాలు', 'Soil': 'నేల', 'Waterway': 'జలమార్గం',
  'Source': 'మూలం', 'Smoke': 'పొగ', 'Toxin': 'విషం', 'Cut': 'తగ్గింపు', 'Preventable': 'నివారించగలది',
  'Understanding': 'అర్థం చేసుకోవడం', 'hidden': 'దాగి ఉన్న', 'impacts': 'ప్రభావాలు', 'environment': 'పర్యావరణం',
  'helps': 'సహాయపడుతుంది', 'make': 'చేయడానికి', 'better': 'మెరుగైన', 'decisions': 'నిర్ణయాలు', 'every': 'ప్రతి', 'day': 'రోజు',
  'Farmland': 'వ్యవసాయ భూమి', 'Fertility': 'సారవంతం', 'Ponds': 'చెరువులు', 'Canals': 'కాలువలు', 'Groundwater': 'భూగర్భజలం',
  'Livestock': 'పశువులు', 'Cattle': 'పశువులు', 'Safety': 'భద్రత', 'Human': 'మానవ', 'Respiratory': 'శ్వాసకోశ', 'Health': 'ఆరోగ్యం',
  'Economic': 'ఆర్థిక', 'Opportunity': 'అవకాశం', 'Village': 'గ్రామం', 'Goal': 'లక్ష్యం', 'Solution': 'పరిష్కారం',
  'Never': 'ఎప్పుడూ కాదు', 'Keep': 'ఉంచండి', 'Clean': 'శుభ్రంగా', 'Read': 'చదవండి', 'Guide': 'మార్గదర్శిని', 'Explore': 'చూడండి',
  'Awareness': 'అవగాహన', 'Resources': 'వనరులు', 'Handouts': 'కరపత్రాలు', 'Free': 'ఉచిత', 'downloadable': 'డౌన్‌లోడ్ చేయగల',
  'Community': 'సమాజ', 'Educational': 'విద్యా', 'Separate': 'వేరు చేయండి', 'at': 'వద్ద', 'Source': 'మూలం', 'Water': 'నీరు',
  'Protection': 'రక్షణ', 'Health Alert': 'ఆరోగ్య హెచ్చరిక', 'Market': 'మార్కెట్', 'Campaign': 'ప్రచారం', 'Animal': 'జంతు',
  'Welfare': 'సంక్షేమం', 'Interactive': 'ఇంటరాక్టివ్', 'Test': 'పరీక్ష', 'Quiz': 'క్విజ్', 'Take': 'రాయండి',
  'Resin': 'రెసిన్', 'Identification': 'గుర్తింపు', 'System': 'వ్యవస్థ', 'Decoding': 'అర్థం చేసుకోవడం', 'Types': 'రకాలు',
  'All': 'అన్ని', 'High': 'అధిక', 'Moderate': 'మధ్యస్థ', 'Caution': 'జాగ్రత్త', 'Avoid': 'తప్పించండి', 'Value': 'విలువ',
  'Food': 'ఆహారం', 'Safe': 'సురక్షితం', 'Never Burn': 'ఎప్పుడూ కాల్చవద్దు', 'Action': 'చర్య', 'Everyday': 'రోజువారీ', 'Examples': 'ఉదాహరణలు',
  'Recyclability': 'రీసైక్లింగ్ సామర్థ్యం', 'Widely Recycled': 'విస్తృతంగా రీసైకిల్ చేయబడుతుంది', 'Water': 'నీరు', 'Bottles': 'సీసాలు',
  'Milk': 'పాలు', 'Shampoo': 'షాంపూ', 'Detergents': 'డిటర్జెంట్లు', 'Pipes': 'పైపులు', 'Flooring': 'ఫ్లోరింగ్', 'Bags': 'సంచులు',
  'Carry': 'తీసుకెళ్లండి', 'Cling Film': 'క్లింగ్ ఫిల్మ్', 'Food Tubs': 'ఆహార డబ్బాలు', 'Caps': 'మూతలు', 'Straws': 'స్ట్రాలు',
  'Reuse': 'పునర్వినియోగం', 'Recycle': 'రీసైకిల్', 'Close the Loop': 'చక్రాన్ని పూర్తి చేయండి', 'Recycling': 'రీసైక్లింగ్',
  'for': 'కోసం', 'Life': 'జీవితం', 'Before': 'ముందు', 'Replace': 'మార్చడం', 'Waste': 'చెత్త', 'Segregation': 'వేరు చేయడం',
  'Made': 'చేయబడింది', 'Simple': 'సులభం', 'Know': 'తెలుసుకోండి', 'exactly': 'ఖచ్చితంగా', 'which': 'ఏ', 'bin': 'బిన్', 'use': 'వాడాలి',
  'Green': 'ఆకుపచ్చ', 'Blue': 'నీలం', 'Yellow': 'పసుపు', 'Red': 'ఎరుపు', 'Wet': 'తడి', 'Dry': 'పొడి', 'Hazardous': 'ప్రమాదకరమైన',
  'Sanitary': 'శానిటరీ', 'Destination': 'చేరవలసిన స్థలం', 'Daily': 'రోజువారీ', 'Routine': 'పద్ధతి', 'Steps': 'దశలు', 'Collect': 'సేకరించండి',
  'Separate': 'వేరు చేయండి', 'Rinse': 'కడగండి', 'Crush': 'నలిపి చేయండి', 'Feedback': 'అభిప్రాయం', 'Share': 'పంచుకోండి', 'Your': 'మీ',
  'Experience': 'అనుభవం', 'Name': 'పేరు', 'District': 'జిల్లా', 'Rating': 'రేటింగ్', 'Message': 'సందేశం', 'Suggestions': 'సూచనలు',
  'Send': 'పంపండి', 'Recent': 'ఇటీవలి', 'Voices': 'అభిప్రాయాలు', 'Login': 'లాగిన్', 'Logout': 'లాగ్‌అవుట్'
};

const translationCache = JSON.parse(localStorage.getItem('teluguTranslations') || '{}');
const translationPending = new WeakSet();

function isTe() {
  return localStorage.getItem('language') === 'te';
}

function t(text) {
  return isTe() && telugu[text] ? telugu[text] : text;
}

function translatePage() {
  document.documentElement.lang = isTe() ? 'te' : 'en';
  if (!isTe()) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach(node => {
    const value = node.nodeValue;
    const trimmed = value.trim();
    if (!trimmed) return;
    if (pageTelugu[trimmed]) {
      node.nodeValue = value.replace(trimmed, pageTelugu[trimmed]);
      return;
    }
    if (translationCache[trimmed]) {
      node.nodeValue = value.replace(trimmed, translationCache[trimmed]);
      return;
    }
    if (!/[A-Za-z]{3}/.test(trimmed) || translationPending.has(node)) return;
    translationPending.add(node);
    translateSentence(trimmed, node);
  });

  document.querySelectorAll('[placeholder], [title], [aria-label]').forEach(el => {
    ['placeholder', 'title', 'aria-label'].forEach(attribute => {
      const value = el.getAttribute(attribute);
      if (value && pageTelugu[value]) el.setAttribute(attribute, pageTelugu[value]);
    });
  });
}

async function translateSentence(text, node) {
  try {
    const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=te&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const translated = data?.[0]?.map(item => item?.[0] || '').join('').trim();
    if (translated) {
      translationCache[text] = translated;
      localStorage.setItem('teluguTranslations', JSON.stringify(translationCache));
      if (node.isConnected) node.nodeValue = node.nodeValue.replace(text, translated);
      return;
    }
  } catch (error) {
    // Use the local word dictionary when the network translator is unavailable.
  }
  if (node.isConnected) {
    node.nodeValue = node.nodeValue.replace(/\b[A-Za-z][A-Za-z'-]*\b/g, word => teluguWords[word] || word);
  }
}

function watchDynamicTranslations() {
  if (!isTe() || !document.body) return;
  let translating = false;
  const observer = new MutationObserver(() => {
    if (translating) return;
    translating = true;
    translatePage();
    translating = false;
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function currentPage() {
  return location.pathname.split('/').pop() || 'index.html';
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    return null;
  }
}

function renderNav() {
  const target = document.querySelector('#site-nav');
  if (!target) return;
  document.body.classList.toggle('te', isTe());

  const current = currentPage();
  const isAdmin = location.pathname.includes('/admin/');
  const user = getUser();

  const adminItems = [
    ['dashboard.html', 'Dashboard', 'fa-gauge'],
    ['content.html', 'Content', 'fa-newspaper'],
    ['quiz-management.html', 'Quiz', 'fa-file-circle-question'],
    ['users.html', 'Learners', 'fa-users'],
    ['feedback.html', 'Feedback', 'fa-comments']
  ];

  const items = isAdmin ? adminItems : navItems;

  target.innerHTML = `
    <header class="site-navbar">
      <nav class="navbar navbar-expand" aria-label="Main navigation">
        <div class="container">
          <a class="navbar-brand" href="${isAdmin ? 'dashboard.html' : 'index.html'}">
            <span class="brand-emblem" aria-hidden="true">
              <i class="fa-solid fa-recycle"></i>
            </span>
            <span class="brand-title">
              <span class="brand-name">EcoVillage</span>
              <span class="brand-subtitle">Plastic Awareness</span>
            </span>
          </a>

          <button class="navbar-toggler border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-success fs-4"></i>
          </button>

          <div class="collapse navbar-collapse" id="navMenu">
            <ul class="navbar-nav mx-auto align-items-xl-center">
              ${items.map(([href, label, icon]) => `
                <li class="nav-item">
                  <a class="nav-link ${current === href ? 'active' : ''}" href="${href}">
                    <i class="fa-solid ${icon} fs-6 opacity-75"></i>
                    <span>${t(label)}</span>
                  </a>
                </li>
              `).join('')}
            </ul>

            <div class="d-flex align-items-center flex-wrap gap-2 mt-3 mt-xl-0">
              ${isAdmin ? `
                <button class="btn btn-outline-danger btn-sm" type="button" onclick="adminLogout()">
                  <i class="fa-solid fa-power-off"></i> Logout
                </button>
              ` : ''}

              <label class="language-select-wrap" aria-label="Choose language">
                <i class="fa-solid fa-globe" aria-hidden="true"></i>
                <select class="language-select" id="languageSelect">
                  <option value="en" ${!isTe() ? 'selected' : ''}>English</option>
                  <option value="te" ${isTe() ? 'selected' : ''}>తెలుగు</option>
                </select>
              </label>

              ${!isAdmin ? `
                <div class="dropdown">
                  <button class="nav-profile-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Profile" aria-label="Profile menu">
                    <i class="fa-solid fa-user"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                    ${user ? `
                      <li><span class="dropdown-item-text small text-muted">${user.name || 'Village Member'}</span></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><button class="dropdown-item text-danger" onclick="userLogout()"><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</button></li>
                    ` : `
                      <li><a class="dropdown-item" href="login.html"><i class="fa-solid fa-right-to-bracket me-2"></i>Login</a></li>
                    `}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.querySelector('#languageSelect').addEventListener('change', (event) => {
    localStorage.setItem('language', event.target.value);
    location.reload();
  });
}

function userLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.reload();
}

function adminLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.href = 'login.html';
}

function renderFooter() {
  const el = document.querySelector('#site-footer');
  if (!el) return;

  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4 justify-content-between">
          <div class="col-lg-4">
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="brand-emblem" style="width:38px;height:38px;font-size:1.1rem;">
                <i class="fa-solid fa-recycle"></i>
              </span>
              <h3 class="h5 mb-0 text-white">EcoVillage Awareness</h3>
            </div>
            <p class="text-secondary small mb-3">
              Empowering rural and local communities with clear, practical knowledge to reduce, reuse, segregate, and recycle plastic waste for healthier villages and greener nature.
            </p>
            <div class="d-flex gap-2">
              <span class="badge-soft badge-soft-emerald"><i class="fa-solid fa-shield-heart"></i> Community Driven</span>
              <span class="badge-soft badge-soft-blue"><i class="fa-solid fa-earth-americas"></i> 100% Free Learning</span>
            </div>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h4 class="h6 mb-3 text-white">Explore Guide</h4>
            <ul class="footer-link-list">
              <li><a href="about.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Why It Matters</a></li>
              <li><a href="plastic-types.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Resin Codes 1-7</a></li>
              <li><a href="segregation.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Waste Segregation</a></li>
              <li><a href="dos-donts.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Do's & Don'ts</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-3 col-lg-2">
            <h4 class="h6 mb-3 text-white">Action & Impact</h4>
            <ul class="footer-link-list">
              <li><a href="reuse.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Safe Reuse Habits</a></li>
              <li><a href="recycling.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Recycling Loop</a></li>
              <li><a href="quiz.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Take 2-Min Quiz</a></li>
              <li><a href="feedback.html"><i class="fa-solid fa-chevron-right fs-xs"></i> Village Feedback</a></li>
            </ul>
          </div>

          <div class="col-md-5 col-lg-3">
            <div class="card p-3 border-0" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(10px);">
              <h5 class="h6 text-white mb-2"><i class="fa-solid fa-hand-holding-heart text-success me-1"></i> Community Pledge</h5>
              <p class="small text-secondary mb-3">
                "Keep clean, segregate early, and never burn plastic. Clean soil and water protect our children's future."
              </p>
              <a href="quiz.html" class="btn btn-soft btn-sm w-100">
                <i class="fa-solid fa-award"></i> Check Your Awareness
              </a>
              <div class="text-center mt-2">
                <a href="admin/login.html" class="small text-secondary opacity-75 hover-underline" style="font-size:0.75rem;">
                  <i class="fa-solid fa-lock me-1"></i> Admin Portal
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>&copy; <span data-year>${new Date().getFullYear()}</span> EcoVillage Plastic Awareness Initiative.</span>
          <span class="small text-secondary">
            <i class="fa-solid fa-seedling text-success"></i> Cleaner villages begin with one small daily choice.
          </span>
        </div>
      </div>
    </footer>
  `;
}

async function api(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const token = localStorage.getItem('token');
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({ success: false, message: 'Invalid server response' }));
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
}

function toast(message, success = true) {
  const existing = document.querySelector('.custom-toast');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.className = `custom-toast ${success ? 'success' : 'error'}`;
  el.setAttribute('role', 'status');
  el.innerHTML = `
    <i class="fa-solid ${success ? 'fa-circle-check text-success' : 'fa-circle-exclamation text-danger'} fs-4"></i>
    <div class="flex-grow-1 small fw-semibold text-dark">${message}</div>
    <button type="button" class="btn-close btn-sm" aria-label="Close" onclick="this.parentElement.remove()"></button>
  `;
  document.body.appendChild(el);

  setTimeout(() => {
    if (el && el.parentElement) {
      el.style.opacity = '0';
      el.style.transform = 'translateX(100%)';
      el.style.transition = 'all 0.3s ease';
      setTimeout(() => el.remove(), 300);
    }
  }, 3800);
}

function init() {
  renderNav();
  renderFooter();
  translatePage();
  watchDynamicTranslations();
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

document.addEventListener('DOMContentLoaded', init);

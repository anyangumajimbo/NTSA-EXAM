// Section 1: All 56 NTSA Questions and Answers (General)
const section1Questions = [
    {
        question: "What is the rule of the road in Kenya?",
        answers: ["Keep left unless overtaking"]
    },
    {
        question: "On what side do we overtake other vehicles?",
        answers: ["Right side"]
    },
    {
        question: "When can we overtake from the left?",
        answers: [
            "When the vehicle infront is turning to the right and there is space on the left.",
            "When on a highway where all traffic is going in the same direction.",
            "When there is an accident and the only way you can overtake is left."
        ]
    },
    {
        question: "Eight places you CANNOT overtake",
        answers: [
            "When approaching a pedestrian crossing.",
            "When approaching a bridge.",
            "At sharp bends.",
            "At a junction.",
            "When approaching a railway crossing.",
            "Where the road is marked with single or double continuous lines in the center of the road.",
            "Where the road is narrow.",
            "When approaching the brow of a hill."
        ]
    },
    {
        question: "Five places where the law requires you to STOP.",
        answers: [
            "At a stop sign",
            "When the traffic lights signal shows red.",
            "When you have an accident no matter how small.",
            "When signaled by a uniformed police officer.",
            "When signaled by a school crossing guard."
        ]
    },
    {
        question: "Eight places you cannot park",
        answers: [
            "On a bend or brow of a hill",
            "On a bridge",
            "On or near a pedestrian crossing",
            "On or near a junction or crossroad",
            "On or near a roundabout.",
            "Where there is no parking, no stopping, no waiting sign.",
            "On or near a railway crossing.",
            "On or near a bus stop."
        ]
    },
    {
        question: "When do we dim lights at night?",
        answers: [
            "When driving close behind another vehicle.",
            "When meeting traffic from opposite direction.",
            "When driving in an area where streets have lights.",
            "When there is a mist or fog."
        ]
    },
    {
        question: "Four vehicles should be given priority when driving",
        answers: [
            "Presidential escorts",
            "Ambulances",
            "Police 999",
            "Fire engines when answering emergency calls."
        ]
    },
    {
        question: "What is the speed limit in town?",
        answers: ["50KPH"]
    },
    {
        question: "What is the speed limit on highway for cars, lorry and pick-up?",
        answers: [
            "For a car - 110 KPH",
            "For a trailer - 65 KPH",
            "For a pick-up - 80 KPH"
        ]
    },
    {
        question: "Four required driving documents",
        answers: [
            "Valid driving license",
            "Valid road license",
            "Valid insurance certificate",
            "Vehicle inspection certificate"
        ]
    },
    {
        question: "Road signs are divided into how many groups?",
        answers: ["Three groups"]
    },
    {
        question: "What do prohibitory signs do?",
        answers: ["Give orders and information (must be obeyed)"]
    },
    {
        question: "When should you use mirrors while driving?",
        answers: [
            "Always, especially when signaling",
            "When overtaking",
            "When braking or stopping",
            "When changing direction",
            "When opening car doors",
            "When reversing"
        ]
    },
    {
        question: "How many wheels does a saloon car have?",
        answers: ["Five (four moving + one spare)"]
    },
    {
        question: "How many lights does a saloon car have?",
        answers: [
            "Seven lights:",
            "• Full lights",
            "• Dim lights",
            "• Parking lights",
            "• Indicators",
            "• Brake lights",
            "• Reverse lights",
            "• Number plate lights"
        ]
    },
    {
        question: "What are a driver's 'eyes'?",
        answers: ["Three (two eyes + mirrors)"]
    },
    {
        question: "Essential tools to carry while driving",
        answers: [
            "Jack",
            "Spare wheel",
            "Wheel spanner",
            "Life saver (reflector) and torch (for darkness)"
        ]
    },
    {
        question: "What is the traffic light sequence and what does each light mean?",
        answers: [
            "Sequence: Red → Red & Amber → Green → Amber → Red",
            "",
            "Meanings:",
            "• Red: Stop",
            "• Red & Amber: Prepare to go",
            "• Green: Proceed (if safe)",
            "• Amber: Prepare to stop"
        ]
    },
    {
        question: "When should you stop even if the light is green?",
        answers: [
            "If the junction/roundabout is not clear",
            "If pedestrians are still crossing"
        ]
    },
    {
        question: "How should you hold the steering wheel?",
        answers: [
            "Quarter to three (9 & 3 positions)",
            "Ten to two (10 & 2 positions)"
        ]
    },
    {
        question: "Four places where you CANNOT stop",
        answers: [
            "On a roundabout",
            "On a pedestrian crossing",
            "On the brow of a hill",
            "On a railway crossing"
        ]
    },
    {
        question: "What should you do when being overtaken?",
        answers: ["Do not accelerate"]
    },
    {
        question: "What should you do after being overtaken at night?",
        answers: ["Dim your lights"]
    },
    {
        question: "What are the major road signs?",
        answers: [
            "Stop sign",
            "Give Way sign"
        ]
    },
    {
        question: "What does a yellow-painted kerb mean?",
        answers: ["No parking, no waiting, and (in some places) no stopping"]
    },
    {
        question: "When approaching a junction, which direction should you look first?",
        answers: ["Look right first because danger comes from the nearer side"]
    },
    {
        question: "What should you do if traffic light turns amber while crossing?",
        answers: ["If you have crossed the white stop line, continue"]
    },
    {
        question: "What does a yellow line on the road mean?",
        answers: ["Divides traffic moving in opposite directions"]
    },
    {
        question: "What does a white line on the road mean?",
        answers: ["Divides traffic moving in the same direction"]
    },
    {
        question: "What does a broken line mean?",
        answers: ["Overtaking allowed if safe"]
    },
    {
        question: "What is the correct position for a right turn?",
        answers: ["Extreme right lane"]
    },
    {
        question: "What is the correct position for a left turn on a one-way street?",
        answers: ["Extreme left lane"]
    },
    {
        question: "What does a double continuous center line mean?",
        answers: ["Do not overtake. Stay on your side"]
    },
    {
        question: "What does a continuous white line on a one-way road mean?",
        answers: ["Do not change lanes"]
    },
    {
        question: "What are common roundabout mistakes?",
        answers: [
            "Approaching in the wrong lane",
            "Changing lanes on the roundabout",
            "Not observing traffic from all sides",
            "Exiting in the wrong lane"
        ]
    },
    {
        question: "How do you keep your vehicle roadworthy?",
        answers: [
            "Regular servicing",
            "Check steering",
            "Check brakes",
            "Check tyres",
            "Check lights",
            "Check wipers",
            "Check mirrors"
        ]
    },
    {
        question: "Within how many hours must you report an accident?",
        answers: ["As early as possible, but within 24 hrs"]
    },
    {
        question: "What do regulatory signs (circled signs) include?",
        answers: [
            "Prohibitory signs",
            "Regulatory signs",
            "Signs to be observed"
        ]
    },
    {
        question: "What do warning signs (triangular signs) include?",
        answers: [
            "Warning signs",
            "Cautionary signs",
            "Hazard informative signs"
        ]
    },
    {
        question: "What do informatory signs include?",
        answers: [
            "Facility signs",
            "Informatory signs"
        ]
    },
    {
        question: "Why should you observe regulatory signs?",
        answers: ["They give mandatory orders; ignoring them is dangerous and illegal"]
    },
    {
        question: "What do warning signs (red triangles) do?",
        answers: ["Inform drivers of hazards ahead for safety"]
    },
    {
        question: "How should you approach a pedestrian crossing?",
        answers: [
            "Approach at a controllable speed, ready to stop if needed",
            "Pedestrians have right of way"
        ]
    },
    {
        question: "What is a pedestrian crossing?",
        answers: ["A designated safe crossing point for pedestrians"]
    },
    {
        question: "What is the safe overtaking procedure?",
        answers: [
            "Check if the road ahead is clear",
            "Check mirrors for traffic behind",
            "Signal right and hoot (flash lights at night)",
            "Overtake quickly, leaving space",
            "Return to the left lane safely"
        ]
    },
    {
        question: "What does a green arrow filter light mean?",
        answers: ["Proceed in the arrow's direction if clear and safe"]
    },
    {
        question: "When the traffic light shows Green and you are stopped by the police officers who do you obey?",
        answers: [
            "I will obey Police officer.",
            "Police signals override traffic lights"
        ]
    },
    {
        question: "When should you use vehicle lights?",
        answers: ["6:30 PM to 6:30 AM (adjust for weather conditions)"]
    },
    {
        question: "What should you do when you receive your first driving license?",
        answers: ["Sign it immediately"]
    },
    {
        question: "When are you not allowed to drive?",
        answers: [
            "When sick",
            "On medication affecting driving",
            "When drunk",
            "With an expired license",
            "If banned by court order"
        ]
    },
    {
        question: "What are the ten major causes of road accidents?",
        answers: [
            "Overloading",
            "Speeding",
            "Careless overtaking",
            "Reckless driving",
            "Ignoring traffic rules",
            "Driving unroadworthy vehicles",
            "Driving under alcohol/drug influence",
            "Driving while sick",
            "Poor road conditions",
            "Bad weather"
        ]
    },
    {
        question: "What are the rules of the model town?",
        answers: [
            "Use the shortest correct route without parking",
            "Use the longest correct route without parking",
            "Use parking only if no other route exists"
        ]
    },
    {
        question: "Which vehicles require inspection?",
        answers: [
            "Heavy Commercial Vehicles",
            "Public Service Vehicles (PSVs)",
            "Pick-ups"
        ]
    },
    {
        question: "When should you use vehicle lights during the day?",
        answers: [
            "Heavy rain",
            "Dusty roads",
            "Mist or fog",
            "Warning other drivers"
        ]
    }
];

// Section 2: Driving Theory Test Questions (50 questions)
const section2Questions = [
    {
        question: "What is a life saver?",
        answers: ["A quick glance over the shoulder (blind spot check) before changing direction"]
    },
    {
        question: "Name three places you should not hoot:",
        answers: [
            "Near hospitals",
            "Near schools during class hours",
            "In residential areas between 10pm and 6am"
        ]
    },
    {
        question: "What is one-way traffic?",
        answers: ["A road where all vehicles move in the same direction"]
    },
    {
        question: "At what distance should a life saver (warning triangle) be placed?",
        answers: [
            "30 meters behind the vehicle on highways",
            "10 meters behind the vehicle in towns"
        ]
    },
    {
        question: "What are chevrons?",
        answers: ["Yellow V-shaped markings that warn of sharp bends"]
    },
    {
        question: "When should you use the clutch?",
        answers: ["Only when changing gears or stopping completely"]
    },
    {
        question: "What's the difference between a lane and a line?",
        answers: [
            "Lane: The vehicle's path on the road",
            "Line: The painted road marking separating lanes"
        ]
    },
    {
        question: "How many types of parking does NTSA recognize? Name them:",
        answers: [
            "Parallel parking",
            "Angle parking (45°)",
            "Perpendicular parking (90°)"
        ]
    },
    {
        question: "Explain the overtaking procedure (MSM):",
        answers: [
            "Check mirrors",
            "Signal your intention",
            "Manoeuvre when safe"
        ]
    },
    {
        question: "What is a filter lane?",
        answers: ["A lane allowing turning without stopping flowing traffic"]
    },
    {
        question: "Explain Kenya's 4-second rule:",
        answers: ["Maintain at least a 4-second gap from the vehicle ahead"]
    },
    {
        question: "What is a blind spot?",
        answers: ["An area not visible in your mirrors"]
    },
    {
        question: "What is a walkway?",
        answers: ["A pedestrian path separated from the road"]
    },
    {
        question: "Name three emergency vehicles with right of way:",
        answers: [
            "Ambulances",
            "Police vehicles",
            "Fire engines"
        ]
    },
    {
        question: "What should you observe when passing stationary vehicles?",
        answers: [
            "Reduce speed",
            "Watch out for people opening doors or crossing"
        ]
    },
    {
        question: "Who is a pillion passenger?",
        answers: ["A person seated behind a motorcycle rider"]
    },
    {
        question: "What's the safe following distance on highways?",
        answers: ["At least 3 seconds in good driving conditions"]
    },
    {
        question: "How should you approach a roundabout?",
        answers: ["Give way to vehicles coming from your right"]
    },
    {
        question: "What is a level crossing?",
        answers: ["Where a road crosses a railway at the same level"]
    },
    {
        question: "How should you approach level crossings?",
        answers: [
            "Stop completely",
            "Look both ways",
            "Proceed only when safe"
        ]
    },
    {
        question: "What should you check before opening your car door?",
        answers: [
            "Side mirror",
            "Blind spot for approaching traffic or cyclists"
        ]
    },
    {
        question: "What protective gear is mandatory for motorcyclists?",
        answers: [
            "EAC-standard helmet",
            "Bright or reflective jacket",
            "Closed shoes"
        ]
    },
    {
        question: "How should a child under 12 be carried on a motorcycle?",
        answers: ["Children under 12 should not be carried on motorcycles"]
    },
    {
        question: "What are Kenya's motorcycle load limits?",
        answers: [
            "Load must not be wider than handlebars",
            "Load must not be higher than the rider's head"
        ]
    },
    {
        question: "When must motorcycle lights be on?",
        answers: ["At all times when riding—day and night"]
    },
    {
        question: "When are you prohibited from riding motorcycles?",
        answers: [
            "When drunk",
            "When unlicensed",
            "When carrying more than one passenger"
        ]
    },
    {
        question: "What does 'Yield' mean in Kenyan traffic?",
        answers: ["Give way to other road users"]
    },
    {
        question: "How is a three-point turn done?",
        answers: [
            "Turn right",
            "Reverse to the left",
            "Move forward right to complete the turn"
        ]
    },
    {
        question: "How do you perform a hill start?",
        answers: [
            "Engage handbrake",
            "Bring clutch to biting point",
            "Accelerate and release handbrake"
        ]
    },
    {
        question: "When should indicators be used?",
        answers: ["At least 30 meters before turning or changing lanes"]
    },
    {
        question: "Name three ways to improve road safety in Kenya:",
        answers: [
            "Avoid drunk driving",
            "Maintain safe speeds",
            "Carry out regular vehicle inspections"
        ]
    },
    {
        question: "What does a flashing amber traffic light mean?",
        answers: ["Proceed with caution and yield if necessary"]
    },
    {
        question: "What is a central reserve?",
        answers: ["A raised or painted divider between opposite traffic flows"]
    },
    {
        question: "How do you park at angle parking?",
        answers: [
            "Approach at 45°",
            "Enter the marked space within the bay lines"
        ]
    },
    {
        question: "What indicators warn of accidents ahead?",
        answers: [
            "Hazard triangle",
            "Slow traffic",
            "Glass or debris on the road"
        ]
    },
    {
        question: "When must drivers use hand signals?",
        answers: ["Only when indicators are not working"]
    },
    {
        question: "Why wouldn't you proceed when traffic lights turn green?",
        answers: [
            "If the junction is blocked",
            "If pedestrians are still crossing"
        ]
    },
    {
        question: "When do you count lanes from the right?",
        answers: ["When preparing to turn right at multi-lane intersections"]
    },
    {
        question: "Why is maximum speed more dangerous at night?",
        answers: [
            "Visibility is reduced",
            "Stopping distance remains the same"
        ]
    },
    {
        question: "What is an acceleration lane?",
        answers: ["A lane used to speed up when joining a highway"]
    },
    {
        question: "How do you alert others during emergencies?",
        answers: [
            "Switch on hazard lights",
            "Place triangle 30 meters behind the vehicle"
        ]
    },
    {
        question: "What is a climbing lane?",
        answers: ["An extra lane for slow vehicles on steep roads"]
    },
    {
        question: "Define dual carriageway:",
        answers: ["A road with a physical divider between opposite directions"]
    },
    {
        question: "What is vehicle drift?",
        answers: ["Side movement due to tire loss of grip or control"]
    },
    {
        question: "What are black spots?",
        answers: ["High-risk accident zones marked by NTSA"]
    },
    {
        question: "How should you drive past animals?",
        answers: [
            "Slow down",
            "Avoid hooting",
            "Be ready to stop"
        ]
    },
    {
        question: "Who has priority – green light or police signal?",
        answers: ["Always obey police signals over traffic lights"]
    },
    {
        question: "How do you overtake in a right-hand drive vehicle?",
        answers: [
            "Check mirrors",
            "Check right blind spot",
            "Overtake when safe"
        ]
    },
    {
        question: "What is a deceleration lane?",
        answers: ["A lane for slowing down safely before exiting a highway"]
    }
];

// App state
let currentSection = null;
let currentQuestionIndex = 0;

// DOM elements
const welcomeScreen = document.getElementById('welcomeScreen');
const testSelection = document.getElementById('testSelection');
const section1Container = document.getElementById('section1Container');
const section2Container = document.getElementById('section2Container');
const section1Completion = document.getElementById('section1Completion');
const section2Completion = document.getElementById('section2Completion');

// Section 1 elements
const section1ProgressBar = document.getElementById('section1ProgressBar');
const section1QuestionNumber = document.getElementById('section1QuestionNumber');
const section1QuestionText = document.getElementById('section1QuestionText');
const section1AnswersContainer = document.getElementById('section1AnswersContainer');
const section1PrevBtn = document.getElementById('section1PrevBtn');
const section1NextBtn = document.getElementById('section1NextBtn');

// Section 2 elements
const section2ProgressBar = document.getElementById('section2ProgressBar');
const section2QuestionNumber = document.getElementById('section2QuestionNumber');
const section2QuestionText = document.getElementById('section2QuestionText');
const section2AnswersContainer = document.getElementById('section2AnswersContainer');
const section2PrevBtn = document.getElementById('section2PrevBtn');
const section2NextBtn = document.getElementById('section2NextBtn');

// Buttons
const startBtn = document.getElementById('startBtn');
const startSection1Btn = document.getElementById('startSection1Btn');
const startSection2Btn = document.getElementById('startSection2Btn');
const proceedToSection2Btn = document.getElementById('proceedToSection2Btn');
const restartSection1Btn = document.getElementById('restartSection1Btn');
const restartAllBtn = document.getElementById('restartAllBtn');
const backToSelectionBtn = document.getElementById('backToSelectionBtn');

// Show a specific page
function showPage(page) {
    if (!page) return;

    // Hide all pages
    document.querySelectorAll('.welcome-screen, .test-selection, .question-container, .completion-screen').forEach(p => {
        if (p) p.style.display = 'none';
    });
    // Show the specified page
    page.style.display = 'block';
}

// Initialize the app
function initApp() {
    showPage(welcomeScreen);
}

// Show test selection
function showTestSelection() {
    showPage(testSelection);
}

// Start a specific section
function startSection(section) {
    currentSection = section;
    currentQuestionIndex = 0;

    if (section === 'section1') {
        showPage(section1Container);
        showSection1Question();
    } else if (section === 'section2') {
        showPage(section2Container);
        showSection2Question();
    }
}

// Show Section 1 question
function showSection1Question() {
    if (currentQuestionIndex < section1Questions.length) {
        const question = section1Questions[currentQuestionIndex];
        section1QuestionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${section1Questions.length}`;
        section1QuestionText.textContent = question.question;

        // Update progress bar
        const progress = ((currentQuestionIndex + 1) / section1Questions.length) * 100;
        section1ProgressBar.style.width = `${progress}%`;

        // Show/hide Previous button
        section1PrevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';

        // Clear previous answers
        section1AnswersContainer.innerHTML = '';

        // Add new answers
        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer';
            answerElement.textContent = answer;
            section1AnswersContainer.appendChild(answerElement);
        });
    } else {
        // Section 1 completed
        showPage(section1Completion);
    }
}

// Show Section 2 question
function showSection2Question() {
    if (currentQuestionIndex < section2Questions.length) {
        const question = section2Questions[currentQuestionIndex];
        section2QuestionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${section2Questions.length}`;
        section2QuestionText.textContent = question.question;

        // Update progress bar
        const progress = ((currentQuestionIndex + 1) / section2Questions.length) * 100;
        section2ProgressBar.style.width = `${progress}%`;

        // Show/hide Previous button
        section2PrevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';

        // Clear previous answers
        section2AnswersContainer.innerHTML = '';

        // Add new answers
        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer';
            answerElement.textContent = answer;
            section2AnswersContainer.appendChild(answerElement);
        });
    } else {
        // Section 2 completed
        showPage(section2Completion);
    }
}

// Event listeners
if (startBtn) startBtn.addEventListener('click', showTestSelection);

if (startSection1Btn) startSection1Btn.addEventListener('click', () => startSection('section1'));
if (startSection2Btn) startSection2Btn.addEventListener('click', () => startSection('section2'));

if (section1NextBtn) section1NextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showSection1Question();
});

if (section1PrevBtn) section1PrevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    showSection1Question();
});

if (section2NextBtn) section2NextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showSection2Question();
});

if (section2PrevBtn) section2PrevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    showSection2Question();
});

if (proceedToSection2Btn) proceedToSection2Btn.addEventListener('click', () => startSection('section2'));
if (restartSection1Btn) restartSection1Btn.addEventListener('click', () => startSection('section1'));
if (restartAllBtn) restartAllBtn.addEventListener('click', initApp);
if (backToSelectionBtn) backToSelectionBtn.addEventListener('click', showTestSelection);

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp); 
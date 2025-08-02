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
        answers: ["It's safe to proceed in the direction indicated by the arrow, even if the main traffic light is red."]
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
            "All vehicles, but especially:",
            "• Heavy Commercial Vehicles",
            "• Public Service Vehicles (PSVs)",
            "• Pick-ups"
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
        answers: [
            "1. Starting the Car",
            "Press the clutch fully before starting the engine.",
            "2. Changing Gears",
            "Always press the clutch pedal fully when shifting from one gear to another.",
            "3. Slowing Down or Stopping",
            "Press the clutch when your speed is too low for the current gear to avoid stalling (gari kuzima).",
            "4. Driving Slowly in Traffic or on a Hill",
            "Use the clutch with the brake to control speed, especially in slow traffic or on slopes.",
            "5. Reversing",
            "Fully press the clutch before engaging the reverse gear."
        ]
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
            "Angle/Ample/controlled parking",
            "parallel/flush/uncontrolled parking",
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
        answers: ["A filter lane is a special road lane that allows vehicles to turn left or right, even when other vehicles are stopped at a red light."]
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
            "Presidential escort",
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
        answers: ["A passenger on a motorcycle or bicycle"]
    },
    {
        question: "What's the safe following distance on highways?",
        answers: ["At least 3 seconds in good driving conditions"]
    },
    {
        question: "How should you approach a roundabout?",
        answers: [
            "1. Slow Down",
            "Reduce speed as you near the roundabout.",
            "2. Check for Traffic",
            "Look for vehicles already on the roundabout, especially from your right.",
            "3. Give Way",
            "Yield to vehicles already inside the roundabout.",
            "4. Signal",
            "Use indicators before entering and when exiting.",
            "5. Choose Correct Lane",
            "Pick the lane based on where you plan to exit.",
            "6. Maintain Speed",
            "Keep a steady speed inside the roundabout.",
            "7. Exit Safely",
            "Signal and merge carefully into your lane when leaving."
        ]
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
            "Hand glove",
            "Closed shoes"
        ]
    },
    {
        question: "How should a child under 12 be carried on a motorcycle?",
        answers: ["A child under 12 may only be carried if seated between the rider and one adult passenger,never behind the adult.",
            "The child must wear a child-sized helmet and all passengers must wear helmets and reflective jackets."
        ]
    },
    {
        question: "What are Kenya's motorcycle load limits?",
        answers: [
            "Only one passenger",
            "Cannot carry load and passenger at the same time.",
            "Load limit is 50Kg",
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
        answers: ["To give way to other road users in certain situations, e.g. pedestrians, emergency vehicles."]
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
            "Engage handbrake, press clutch, shift into first gear",
            "Check mirrors for traffic and boda bodas behind",
            "Press accelerator slightly ",
            "Lift clutch to bite point",
            "Release handbrake and move off smoothly"

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
            "Signal your intention to park.",
            "Slow down as you approach the space.",
            "Approach at an angle of 45 or 60 degrees.",
            "Turn smoothly into the space and straighten wheels.",
            "Stop fully in the space and engage handbrake."
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
            "If pedestrians are still crossing",
            "When police officers signals you to stop"

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
        question: "Name any four types of fluids found in a saloon car and state their functions.",
        answers: [
            "1. Engine Oil",
            "Lubricates engine parts to reduce friction and prevent overheating.",
            "2. Coolant / Radiator Water",
            "Cools the engine by absorbing excess heat.",
            "3. Brake Fluid",
            "Transfers pressure in the brake system, enabling the car to stop.",
            "4. Windshield Washer Fluid",
            "Cleans the windscreen for better visibility.",
            "5. Transmission Fluid (Automatic cars)",
            "Lubricates and cools the transmission system.",
            "6. Power Steering Fluid",
            "Assists in making steering smooth and easy.",
            "7. Battery Electrolyte (for non-sealed batteries)",
            "Allows chemical reaction to store and release electrical energy."
        ]
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

// DOM elements - will be initialized after DOM loads
let welcomeScreen, testSelection, section1Container, section2Container, section1Completion, section2Completion;
let section1ProgressBar, section1QuestionNumber, section1QuestionText, section1AnswersContainer, section1PrevBtn, section1NextBtn;
let section2ProgressBar, section2QuestionNumber, section2QuestionText, section2AnswersContainer, section2PrevBtn, section2NextBtn;
let startBtn, startSection1Btn, startSection2Btn, proceedToSection2Btn, restartSection1Btn, restartAllBtn, backToSelectionBtn;

// Initialize DOM elements
function initializeDOMElements() {
    welcomeScreen = document.getElementById('welcomeScreen');
    testSelection = document.getElementById('testSelection');
    section1Container = document.getElementById('section1Container');
    section2Container = document.getElementById('section2Container');
    section1Completion = document.getElementById('section1Completion');
    section2Completion = document.getElementById('section2Completion');

    // Section 1 elements
    section1ProgressBar = document.getElementById('section1ProgressBar');
    section1QuestionNumber = document.getElementById('section1QuestionNumber');
    section1QuestionText = document.getElementById('section1QuestionText');
    section1AnswersContainer = document.getElementById('section1AnswersContainer');
    section1PrevBtn = document.getElementById('section1PrevBtn');
    section1NextBtn = document.getElementById('section1NextBtn');

    // Section 2 elements
    section2ProgressBar = document.getElementById('section2ProgressBar');
    section2QuestionNumber = document.getElementById('section2QuestionNumber');
    section2QuestionText = document.getElementById('section2QuestionText');
    section2AnswersContainer = document.getElementById('section2AnswersContainer');
    section2PrevBtn = document.getElementById('section2PrevBtn');
    section2NextBtn = document.getElementById('section2NextBtn');

    // Buttons
    startBtn = document.getElementById('startBtn');
    startSection1Btn = document.getElementById('startSection1Btn');
    startSection2Btn = document.getElementById('startSection2Btn');
    proceedToSection2Btn = document.getElementById('proceedToSection2Btn');
    restartSection1Btn = document.getElementById('restartSection1Btn');
    restartAllBtn = document.getElementById('restartAllBtn');
    backToSelectionBtn = document.getElementById('backToSelectionBtn');
}

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
    initializeDOMElements(); // Initialize DOM elements here
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
        question.answers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer';

            // Check if this is a numbered point (starts with number) - this takes priority
            if (answer.match(/^\d+\./)) {
                answerElement.classList.add('numbered-point');

                // Extract key terms and make them green
                const keyTerms = ['Starting the Car', 'Changing Gears', 'Slowing Down or Stopping', 'Driving Slowly in Traffic or on a Hill', 'Reversing'];
                let processedText = answer;

                keyTerms.forEach(term => {
                    if (processedText.includes(term)) {
                        processedText = processedText.replace(term, `<span class="key-term">${term}</span>`);
                    }
                });

                answerElement.innerHTML = processedText;
            } else if (answer.startsWith('•') || answer.startsWith('·')) {
                answerElement.classList.add('sub-point');
                // Remove the bullet from the text since CSS will add it
                answerElement.textContent = answer.replace(/^[•·]\s*/, '');
            } else if (answer.includes('Heavy Commercial') ||
                answer.includes('Public Service') ||
                answer.includes('Pick-ups') ||
                answer.includes('Valid driving') ||
                answer.includes('Valid road') ||
                answer.includes('Valid insurance') ||
                answer.includes('Vehicle inspection')) {
                answerElement.classList.add('sub-point');
                answerElement.textContent = answer;
            } else {
                answerElement.textContent = answer;
            }

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
        question.answers.forEach((answer, index) => {
            const answerElement = document.createElement('div');

            // Skip bullets for Question 6 (index 5) and keep numbering
            if (currentQuestionIndex === 5) {
                // Check if this is a numbered main point or an explanation
                if (answer.match(/^\d+\./)) {
                    // This is a main point - make it green and bold
                    answerElement.className = 'numbered-point';
                    answerElement.innerHTML = `<span class="key-term">${answer}</span>`;
                } else {
                    // This is an explanation - regular styling
                    answerElement.className = 'answer';
                    answerElement.textContent = answer;
                }
            } else if (currentQuestionIndex === 12) {
                // Roundabout question - same formatting as clutch question
                if (answer.match(/^\d+\./)) {
                    // This is a main point - make it green and bold
                    answerElement.className = 'numbered-point';
                    answerElement.innerHTML = `<span class="key-term">${answer}</span>`;
                } else {
                    // This is an explanation - regular styling
                    answerElement.className = 'answer';
                    answerElement.textContent = answer;
                }
            } else if (currentQuestionIndex === 20) {
                // Car fluids question - same formatting as clutch question
                if (answer.match(/^\d+\./)) {
                    // This is a main point - make it green and bold
                    answerElement.className = 'numbered-point';
                    answerElement.innerHTML = `<span class="key-term">${answer}</span>`;
                } else {
                    // This is an explanation - regular styling
                    answerElement.className = 'answer';
                    answerElement.textContent = answer;
                }
            } else {
                // Default behavior for other questions
                answerElement.className = 'answer';

                // Check if this is a numbered point (starts with number) - this takes priority
                if (answer.match(/^\d+\./)) {
                    answerElement.classList.add('numbered-point');

                    // Extract key terms and make them green
                    const keyTerms = ['Starting the Car', 'Changing Gears', 'Slowing Down or Stopping', 'Driving Slowly in Traffic or on a Hill', 'Reversing'];
                    let processedText = answer;

                    keyTerms.forEach(term => {
                        if (processedText.includes(term)) {
                            processedText = processedText.replace(term, `<span class="key-term">${term}</span>`);
                        }
                    });

                    answerElement.innerHTML = processedText;
                } else if (answer.startsWith('•') || answer.startsWith('·')) {
                    answerElement.classList.add('sub-point');
                    // Remove the bullet from the text since CSS will add it
                    answerElement.textContent = answer.replace(/^[•·]\s*/, '');
                } else if (answer.includes('Heavy Commercial') ||
                    answer.includes('Public Service') ||
                    answer.includes('Pick-ups') ||
                    answer.includes('Valid driving') ||
                    answer.includes('Valid road') ||
                    answer.includes('Valid insurance') ||
                    answer.includes('Vehicle inspection')) {
                    answerElement.classList.add('sub-point');
                    answerElement.textContent = answer;
                } else {
                    answerElement.textContent = answer;
                }
            }

            section2AnswersContainer.appendChild(answerElement);
        });
    } else {
        // Section 2 completed
        showPage(section2Completion);
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function () {
    initializeDOMElements();
    setupEventListeners();
    initApp();
});

// Setup event listeners
function setupEventListeners() {
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
} 
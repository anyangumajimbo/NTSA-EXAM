// All 56 NTSA Questions and Answers
const questions = [
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

// DOM elements
const welcomeScreen = document.getElementById('welcomeScreen');
const questionContainer = document.getElementById('questionContainer');
const completionScreen = document.getElementById('completionScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const restartBtn = document.getElementById('restartBtn');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const progressBar = document.getElementById('progressBar');

// Quiz state
let currentQuestionIndex = 0;

// Initialize the quiz
function initQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
    welcomeScreen.style.display = 'none';
    questionContainer.style.display = 'block';
    completionScreen.style.display = 'none';
}

// Show current question
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        questionText.textContent = question.question;

        // Update progress bar
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Show/hide Previous button
        prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';

        // Clear previous answers
        answersContainer.innerHTML = '';

        // Add new answers
        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer';
            answerElement.textContent = answer;
            answersContainer.appendChild(answerElement);
        });
    } else {
        // Quiz completed
        questionContainer.style.display = 'none';
        completionScreen.style.display = 'block';
    }
}

// Event listeners
startBtn.addEventListener('click', initQuiz);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

prevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    showQuestion();
});

restartBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'block';
    questionContainer.style.display = 'none';
    completionScreen.style.display = 'none';
}); 
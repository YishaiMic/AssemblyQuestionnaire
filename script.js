const questions = [
  {
    question: "איך אתה מתמודד עם משימות ואחריות מרובות?",
    options: [
      "אני מתעדף ומנהל אותם ביעילות ",
      "אני יוצר תוכנית ועובד לפי הגאנט",
      "אני לוקח סיכונים ומאלתר תוך כדי ",
      "אני בא בגישה חיובית ועם מוטיבציה לאורך כל הדרך",
    ],
  },
  {
    question: "כשאתה עובד בקבוצה, איזה תפקיד אתה בדרך כלל לוקח?",
    options: [
      "השחקן המתאים - צריך גלגל, אני גלגל",
      "המנהיג המאורגן",
      "האיש השקט אבל זורק את הפתרון הנדרש במאני-טיים",
      "שומר על האווירה הטובה והמורל הקבוצתי",
    ],
  },
  {
    question: "איך אתה מתמודד עם אתגרים ומכשולים?",
    options: [
      "אני נשאר רגוע וגמיש",
      "אני נשאר מאורגן וממוקד",
      "אני חושב מחוץ לקופסה",
      "אני ממשיך להתמיד במשימות",
    ],
  },
  {
    question: "מהי הגישה שלך לקבלת החלטות?",
    options: [
      "אני שוקל את האפשרויות שלי ובוחר את הפתרון הטוב ביותר",
      "אני מתכנן מראש ונצמד לתוכנית",
      "אני שוקל פתרונות חלופיים",
      "אני עוקב אחר האינטואיציה שלי ונשאר חיובי",
    ],
  },
  {
    question: "המורה גולש בשיעור מנושא לנושא, מה אתה עושה?",
    options: [
      "בודק מיילים, מטפל בחשבונות וגם מקשיב",
      "מזכיר לו בדיוק את כל נושאי השיחה וחוזרים בחזרה לנושא",
      "זורם עם השינוי ומנסה להפוך את זה להזדמנות",
      "אני נשאר עם מוטיבציה וממוקד במטרת השיעור",
    ],
  },
  {
    question: "בעת משבר...",
    options: [
      "אני נשאר מסתגל ומתמיד",
      "אני נשאר מאורגן ושולט בסיטואציה",
      "אני לוקח סיכונים ",
      "אני נשאר חיובי ",
    ],
  },
  {
    question: "איזה סוג של שחקן צוות אתה?",
    options: [
      "אני משתף פעולה ותומך באחרים",
      "אני מוביל ומתאם מאמצים",
      "אני מחדש ומציע נקודות מבט ייחודיות",
      "אני מניע ושומר על רוח צוות גבוהה",
    ],
  },
];

const personalityTypes = ["AX", "SP", "CF", "CX"];
const personalityDescriptions = [
  "אתה AX: אתה מולטי-טסקר, כלבויניק בקטע טוב. אוגר AX ידוע ביכולתו להתמודד עם משימות מרובות ביעילות: לאחסן גם נתונים וגם כתובות, מה שהופך אותו למגוון וורסטילי. גם אתה גמיש, ומסוגל להתמודד עם משימות מגוונות ביעילות. ",
  "אתה SP: אתה המאורגן של החבורה, תמיד עוקב אחר החפצים של כולם ומבטיח שהדברים יתנהלו בצורה חלקה. מנהיג טבעי, לעתים קרובות לוקח אחריות על פרויקטים ואירועים קבוצתיים. ידוע באמינותך ובתשומת הלב שלך לפרטים. אוגר SP משמש בעיקר כמצביע מחסנית, עוקב אחר מחסנית הזיכרון ומבטיח סדר וארגון. בדומה לו, אתה מצטיין בהובלת פרויקטים קבוצתיים, ומבטיח שהכל יתנהל בצורה חלקה.",
  "אתה CF: אומר מעט ועושה הרבה מאחורי הקלעים. רציני, מוכן לאתגרים ולא מפחד לקחת סיכונים. בעל פרספקטיבה ייחודית ולעתים קרובות מגיע עם פתרונות מחוץ לקופסה. הCF עוקב אחרי תוצאות של פעולות אריתמטיות והגיוניות, מספק מידע חיוני אך לא משתתף ישירות בפעולות.",
  "אתה CX: מתמיד ואנרגטי, מלא בהתלהבות גם לפעולות שגרתיות. אוגר CX משמש לספירה ובקרה של לולאה, לפעולות חוזרות והתמדה. בדומה לאוגר CX, אתה תמיד נשאר עם מוטיבציה, שומר על הקבוצה ממוקדת במטרותיה, ולא מוותר בקלות.",
];

let currentQuestion = 0;
let personalityScores = [0, 0, 0, 0];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const personalityDescriptionElement = document.getElementById(
  "personality-description"
);
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const restartButton = document.getElementById("restart-btn");

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const questionContainer = document.getElementById("question-container");

  startButton.addEventListener("click", function () {
    welcomeScreen.style.display = "none";
    questionContainer.style.display = "block";
    displayQuestion();
  });
});

function displayQuestion() {
  questionContainer.style.display = "block";
  resultContainer.style.display = "none";

  const q = questions[currentQuestion];
  questionElement.innerText = q.question;

  optionsContainer.innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => {
      selectAnswer(index);
    });
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(index) {
  personalityScores[index]++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";

  const maxScoreIndex = personalityScores.indexOf(
    Math.max(...personalityScores)
  );
  resultElement.innerText = `אתה ${personalityTypes[maxScoreIndex]}.`;
  personalityDescriptionElement.innerText =
    personalityDescriptions[maxScoreIndex];
  restartButton.style.display = "inline-block";
}

function restartQuiz() {
  currentQuestion = 0;
  personalityScores = [0, 0, 0, 0];
  questionContainer.style.display = "block";
  resultContainer.style.display = "none";
  displayQuestion();
}

restartButton.addEventListener("click", restartQuiz);

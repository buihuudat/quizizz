const apiUrl = "https://opentdb.com/api.php?amount=10";

const fetchQuestions = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

const renderQuizCard = (question) => {
  const quizCard = document.createElement("div");
  quizCard.className = "quiz-card";

  const category = document.createElement("h2");
  category.className = "category";
  category.textContent = `Category: ${question.category}`;
  quizCard.appendChild(category);

  const questionText = document.createElement("p");
  questionText.className = "question";
  questionText.textContent = question.question;
  quizCard.appendChild(questionText);

  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options";

  question.incorrect_answers.forEach((incorrectAnswer) => {
    const label = createAnswerOption(incorrectAnswer, false);
    optionsContainer.appendChild(label);
  });

  const correctLabel = createAnswerOption(question.correct_answer, true);
  optionsContainer.appendChild(correctLabel);

  quizCard.appendChild(optionsContainer);

  document.body.appendChild(quizCard);
  return quizCard;
};

const createAnswerOption = (answerText, isCorrect) => {
  const label = document.createElement("label");
  label.textContent = answerText;

  if (isCorrect) {
    label.style.color = "green";
    label.style.fontWeight = "600";
  } else {
    label.style.color = "red";
  }

  return label;
};

const loadQuizzes = async () => {
  const questions = await fetchQuestions();
  const quizedList = document.getElementById("quized_list");

  questions.forEach((question) => {
    const quizCard = renderQuizCard(question);
    quizedList.appendChild(quizCard);
  });
};

loadQuizzes();

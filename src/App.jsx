import "./App.css";

function App() {
  const questions = [
    {
      id: "1",
      question: "Виды инструктажей, проводимые для рабочих профессий:",
      true: "1",
      answers: {
        1: "По программе первичного инструктажа для работников рабочих профессий",
        2: "По программе вводного инструктажа",
        3: "Программа не требуется",
      },
    },
    {
      id: "2",
      question: "question2",
      true: "1",
      answers: {
        1: "4",
        2: "5",
        3: "6",
      },
    },
    {
      id: "3",
      question: "question3",
      true: "1",
      answers: {
        1: "7",
        2: "8",
        3: "9",
      },
    },
    {
      id: "4",
      question: "question4",
      true: "1",
      answers: {
        1: "10",
        2: "11",
        3: "12",
      },
    },
    {
      id: "5",
      question: "question5",
      true: "1",
      answers: {
        1: "13",
        2: "14",
        3: "15",
      },
    },
    {
      id: "6",
      question: "question6",
      true: "1",
      answers: {
        1: "16",
        2: "17",
        3: "18",
      },
    },
  ];

  let rand = Math.floor(Math.random() * questions.length);
  let questionRand = questions[rand].question;
  let id = questions[rand].id;
  let answers = Object.values(questions[rand].answers);
//   let answersKye = Object.keys(questions[rand].answers);
  let answerRand = answers.sort(() => Math.random() - 0.5);

  let question = () => {
    return (
      <div >
        {id}) Вопрос: {questionRand}
      </div>
    );
  };
  let answerShow = answerRand.map((item) => {
    return (
      <div>
        <label>
          <input type="radio" name="answer" id="{count++}" />
          <span>{item}</span>
        </label>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {question(questionRand)}
          {answerShow}
        </div>
      </header>
    </div>
  );
}

export default App;

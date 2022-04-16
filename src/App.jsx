import "./App.css";

function App() {
  const questions = [
    {
      id: "1",
      question: "Виды инструктажей, проводимые для рабочих профессий:",
      true: "1",
      answers: {
        a: "По программе первичного инструктажа для работников рабочих профессий",
        b: "По программе вводного инструктажа",
        c: "Программа не требуется",
      },
    },
    {
      id: "2",
      question: "question2",
      true: "2",
      answers: {
        a: "4",
        b: "5",
        c: "6",
      },
    },
    {
      id: "3",
      question: "question3",
      true: "1",
      answers: {
        a: "7",
        b: "8",
        c: "9",
      },
    },
    {
      id: "4",
      question: "question4",
      true: "2",
      answers: {
        a: "10",
        b: "11",
        c: "12",
      },
    },
    {
      id: "5",
      question: "question5",
      true: "3",
      answers: {
        a: "13",
        b: "14",
        c: "15",
      },
    },
    {
      id: "6",
      question: "question6",
      true: "2",
      answers: {
        a: "16",
        b: "17",
        c: "18",
      },
    },
  ];

  let rand = Math.floor(Math.random() * questions.length);
  let questionRand = questions[rand].question;
  let id = questions[rand].id;
  // let trueAnswer = questions[rand].true;
  let answers = Object.entries(questions[rand].answers);
  let answerRand = answers.sort(() => Math.random() - 0.5);
  
  let question = () => {
    return (
      <div key={id}>
        {id}) Вопрос: {questionRand}
      </div>
    );
  };

//  const getValue =()=> document.querySelector('input[name="answer"]:checked').value;

  let answerShow = answerRand.map((item) => {
    return (
      <div key={item[0]}>
        <label>
          <input value={item[0]} type="radio" name="answer" id="{count++}" />
          <span > {item[1]} </span>
        </label>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {question(questionRand)}
          {answerShow }
          <button>Проверить ответ</button>
        </div>
      </header>
    </div>
  );
}

export default App;

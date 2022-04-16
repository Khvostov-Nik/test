import './App.css';

function App() {
  const questions = [
    {
      id: '1',
      question: 'Виды инструктажей, проводимые для рабочих профессий:',
      true: 'a',
      answers: {
        a: 'По программе первичного инструктажа для работников рабочих профессий',
        b: 'По программе вводного инструктажа',
        c: 'Программа не требуется',
      },
    },
    {
      id: '2',
      question: 'question2',
      true: 'b',
      answers: {
        a: 'Lorem ipsum dolor sit amet.',
        b: 'em ipsum dolor sit amet.',
        c: '6Lorem ipsum nnndolor sit amet.',
      },
    },
    {
      id: '3',
      question: 'question3',
      true: 'a',
      answers: {
        a: '7',
        b: '8',
        c: '9',
      },
    },
    {
      id: '4',
      question: 'question4',
      true: 'b',
      answers: {
        a: '10',
        b: '11',
        c: '12',
      },
    },
    {
      id: '5',
      question: 'question5',
      true: 'c',
      answers: {
        a: '13',
        b: '14',
        c: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores temporibus vero rerum. Qui voluptate beatae nobis pariatur sunt esse magnam in commodi explicabo expedita enim unde optio modi perferendis amet, autem soluta animi eligendi veritatis facilis! Ex dignissimos velit autem nobis earum ducimus, eos beatae, accusantium, sunt qui explicabo corporis!',
      },
    },
    {
      id: '6',
      question: 'question6',
      true: 'b',
      answers: {
        a: '16',
        b: '17',
        c: '18',
      },
    },
  ];
  let count = 1;
  const rand = Math.floor(Math.random() * questions.length);
  const questionRand = questions[rand].question;
  const id = questions[rand].id;
  const answers = Object.entries(questions[rand].answers);
  const answerRand = answers.sort(() => Math.random() - 0.5);

  const checkAnswer = () => {
    const checkRadio = document.querySelector('input[name="answer"]:checked');
    const trueAnswer = questions[rand].true;
    if (!checkRadio) {
      return;
    }
    if (checkRadio.value === trueAnswer) {
      checkRadio.parentNode.classList.add('correct');
    } else {
      checkRadio.parentNode.classList.add('err');
    }
  };

  const question = () => {
    return (
      <div className='question' key={id}>
        {id}) Вопрос: {questionRand}
      </div>
    );
  };

  const answerShow = answerRand.map((item) => {
    return (
      <div className='answer'>
        <label className='answer-inner'>
          <input
            className='input-radio'
            value={item[0]}
            type='radio'
            name='answer'
          />
          <div>{count++})</div>
          <div className='answer-text'>{item[1]} </div>
        </label>
      </div>
    );
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <div class='container'>
          {question(questionRand)}
          {answerShow}
          <button onClick={checkAnswer} className='btn'>
            Проверить ответ
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

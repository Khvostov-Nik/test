import './App.css';

function App() {
  const questions= [
    {
        id:'1',   
        question:'Виды инструктажей, проводимые для рабочих профессий:',
        true:'1',
        answers:[
            'По программе первичного инструктажа для работников рабочих профессий',
            'По программе вводного инструктажа',
            'Программа не требуется'
        ]
    },
    {
        id:'2',
        question:'question2',
        true:'1',
        answers:[
            '4',
            '5',
            '6'
        ]
    },
    {
        id:'3',
        question:'question3',
        true:'1',
        answers:[
            '7',
            '8',
            '9'
        ]
    },
    {
        id:'4',
        question:'question4',
        true:'1',
        answers:[
            '10',
            '11',
            '12'
        ]
    },
    {
        id:'5',
        question:'question5',
        true:'1',
        answers:[
            '13',
            '14',
            '15'
        ]
    },
    {
        id:'6',
        question:'question6',
        true:'1',
        answers:[
            '16',
            '17',
            '18'
        ]
    },
    ]
    
    let rand = Math.floor(Math.random() * questions.length);
    let questionRand = questions[rand].question
    let id = questions[rand].id
    let answers = questions[rand].answers
    let answerRand= answers.sort(()=>Math.random()-0.5)
    let count = 1


let question = ()=>{
        return <div>{id}) Вопрос: {questionRand}</div>
      }
let answerShow = answerRand.map((item)=>{
    return <div><span>{count++}) </span><label ><input type="radio" name="answer" id='{count++}' /><span>{item}</span></label></div>
})
 
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

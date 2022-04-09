import './App.css';

function App() {
  const questions= [
    {
        id:'1',   
        question:'Виды инструктажей, проводимые для рабочих профессий:',
        true:'a',
        answers:{
            a:'По программе первичного инструктажа для работников рабочих профессий',
            b:'По программе вводного инструктажа',
            c:'Программа не требуется'
        }
    },
    {
        id:'2',
        question:'question2',
        true:'a',
        answers:{
            a:'4',
            b:'5',
            c:'6'
        }
    },
    {
        id:'3',
        question:'question3',
        true:'a',
        answers:{
            a:'7',
            b:'8',
            c:'9'
        }
    },
    {
        id:'4',
        question:'question4',
        true:'a',
        answers:{
            a:'10',
            b:'11',
            c:'12'
        }
    },
    {
        id:'5',
        question:'question5',
        true:'a',
        answers:{
            a:'13',
            b:'14',
            c:'15'
        }
    },
    {
        id:'6',
        question:'question6',
        true:'a',
        answers:{
            a:'16',
            b:'17',
            c:'18'
        }
    },
    ]
    
    let rand = Math.floor(Math.random() * questions.length);
    let question = questions[rand].question
    let id = Object.values(questions[rand].id)
    let answers = Object.values(questions[rand].answers)
    let answerRand= answers.sort(()=>Math.random()-0.5)
    let count = 1


let q = ()=>{
        return <div>{id}) Вопрос: {question}</div>
      }
let a = answerRand.map((item)=>{
    return <div>{count++}) {item}</div>
})
 
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
        {q(questions)}
        {a}
        </div>


      </header>
    </div>
  );
}

export default App;

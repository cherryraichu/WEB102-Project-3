import './App.css';
import FlashCard from './components/FlashCard';
import {useState} from 'react';

const App = () => {
  const questions = ['It is used to travel in the air','You need to have this in order to enter a foreign country', 
  'It\'s a place that attracts a lot of visitors','Tourists have the option of being provided accommadations here during their vacation',
  'When you visit new places in a new country that is an example of...','It can helpful to learn this when you travel to country that speaks a language different than your own'];
  const answers = ['avión','pasaporte','atracción turística','hotel','hacer turismo','idioma extranjero'];
  const [frontText,setFrontText] = useState(questions[0]);
  const [backText,setBackText] = useState(answers[0]);
  const [currCard,setCurrCard] = useState(0);
  const [userInput,setUserInput] = useState('');
  const [correctGuess,setCorrectGuess] = useState('');

  function prevQ () {
    console.log("prevQ");
    if (currCard > 1) {
      updatePrevCardNum();
      updateFront();
      updateBack();
      setCorrectGuess('');
    }
  }
  function nextQ () {
    console.log("nextQ");
    updateNextCardNum();
    updateFront();
    updateBack();
    setCorrectGuess('');
  }
  const updatePrevCardNum = () => {
    setCurrCard(currCard - 1)
  }  
  const updateNextCardNum = () => {
    setCurrCard(currCard + 1)
  }

  const updateFront = () => {
      if (currCard < 6) { setFrontText(questions[currCard]);}
      else { setFrontText("The end of the quiz. How did you do? 🤔")}
  }
  const updateBack = () => {
    if (currCard < 6) { setBackText(answers[currCard]);}
    else { setBackText("")}
  }

  const handleSubmit = () => {
    let userAnswer = userInput.toLowerCase(); 
    let answer = answers[currCard-1];
    console.log(`userAnswer is ${userAnswer} and answer is ${answer}\n`);
    if (answer == userAnswer) {
      console.log("Correct Guess!");
      setCorrectGuess('right');
    }
    else {
      console.log("Incorrect Guess!");
      setCorrectGuess('wrong');
    }
    return false;
    
  }
  const handleInput = (e) => setUserInput(e.target.value);
  return (
    <div>
      <h1>Spanish Language Quiz 🌎</h1>
      <h2>Based on the english description, can you guess the spanish equivalent?</h2>
      <h2>Theme: Travel ✈️</h2>
      <p>There are 6 questions. Click on the card to see the answer!</p>
      <FlashCard front={frontText} back={backText}/><br/>
      <div className='layout'>
        <button onClick={prevQ}>←</button>
        <button onClick={nextQ}>→</button><span>&nbsp;&nbsp;</span>

        <form onSubmit={e => e.preventDefault()}>
          <input type='text' value={userInput} onChange={handleInput}
            style={{ 
              borderColor: correctGuess == ''? 'white' : (correctGuess == 'right'? 'green':'rgb(219, 93, 93)') 
            }}/>
          <span>&nbsp;&nbsp;</span>
          <button onClick={handleSubmit}>Submit Guess</button>
        </form>
      </div>
    </div>
  )
}
export default App;

import './App.css';
import React, { useState } from "react";
import StartQuiz from "./components/StartQuiz";
import Question from "./components/Question";

function App() {
  const [isQuizStarted  , setIsQuizStarted] = useState(false);

  return (
    <div className="bg-darker">
      { !isQuizStarted ?
        <StartQuiz setIsQuizStarted={setIsQuizStarted}/>
        :
        <Question/>
      }
      {/* <StartQuiz/>
      <Question/> */}
    </div>
  );
}

export default App;

import './Question.css';
import React, { useState } from 'react';
import QUESTIONS from "../quiz.json";
import Result from './Result';


function Question() {

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  // console.log(result);
  const {question , options , answer} = QUESTIONS[activeQuestion];

  const handleOnAnswerSelect = (option, index) => {
    setSelectedAnswerIndex(index);
    if(option === answer)
    {
      setSelectedAnswer(true);
    }
    else
    {
      setSelectedAnswer(false);
    }
  }

  const handleOnClickNext = () =>
  {
    setSelectedAnswerIndex(null);
    setResult((previous)=>
    selectedAnswer ? 
    {
      ...previous , 
      score : previous.score + 10,
      correctAnswers : previous.correctAnswers + 1,
    }:
    {
      ...previous,
      wrongAnswers : previous.wrongAnswers + 1,
    }
    )
    if(activeQuestion !== QUESTIONS.length - 1)
    {
      setActiveQuestion(activeQuestion+1);
    }
    else
    {
      setActiveQuestion(0);
      setShowResult(true);
    }
    
  }
  return (
    <div>
      {!showResult ? (
    <div className='container'>
    <div className='row align-items-center justify-content-center text-white' style={{height:"100vh"}}>
        <div className='col-8 rounded pr-4 pl-4 pt-2 pb-2'>
            <div className='mt-4 d-flex justify-content-between'>
            <h5 className='mr-2'>{question}</h5>
            <p>{activeQuestion + 1}/10</p>
            </div>
              {
                options.map((option , index)=>
                {
                  const isCorrect = option === answer;
                  const isSelected = index === selectedAnswerIndex; 
                  return(
                       <div className='mt-4' key={option}>
                          <button 
                             style={{ backgroundColor : `${
                              isSelected ? (isCorrect ? 'green' : 'red') : ""
                            }`}}
                              className={`btn d-block mb-3 ${selectedAnswerIndex && isCorrect && 'bg-success'}` }
                              onClick={() => handleOnAnswerSelect(option, index)}
                              disabled={selectedAnswerIndex !== null}
                            >
                            {option}
                          </button>
                      </div>

                  )
                })
              }
            <button className='btn btn-primary text-center font-weight-bold mb-3' onClick={handleOnClickNext} disabled={selectedAnswerIndex == null}>Next Question</button>
        </div>
    </div>
  </div>
      ):(
        <Result result={result} setShowResult={setShowResult}
        setResult={setResult}
        />
      )}

  </div>
    )
}

export default Question

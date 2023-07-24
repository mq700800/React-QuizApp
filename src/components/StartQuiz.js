import './StartQuiz.css';
import React from 'react'

function StartQuiz({setIsQuizStarted}) {    
  return (
    <div>
      <div className='container'>
        <div className='row align-items-center text-center text-white' style={{height:"100vh"}}>
          <div className='col-sm-12'>
              <h1 className='d-none d-lg-block d-md-block'>Basic React JS Quiz</h1>
              <h2 className='d-sm-block d-md-none d-lg-none'>Basic React JS Quiz</h2>
              <button className='pt-2 pb-2 pl-4 pr-4 btn-outline-dark bg-white mt-3' onClick={()=>setIsQuizStarted(true)}>Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartQuiz

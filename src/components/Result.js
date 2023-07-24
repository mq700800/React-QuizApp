import './Result.css';
import React from 'react'

function Result({result , setShowResult , setResult}) {

  const handleClickStartOver = () =>
  {
    setShowResult(false);
    setResult({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
      })
  }
  return (
    <div className='container'>
        <div className='row align-items-center justify-content-center text-white vh-100' >

            {
                result.score > 60 ?
                (
                    <div className='col-8 rounded pr-4 pl-4 pt-2 pb-2 bg-success'>
                    <div className='text-center pt-5 pb-5'>
                        <h3 className='display-4'>AWESOME!</h3>
                        <h4>Your score is {result.score}/100</h4>
                        <button className='pt-2 pb-2 pl-4 pr-4 btn-outline-dark bg-white mt-3' 
                            onClick={handleClickStartOver}>
                            Start Over
                        </button>
                    </div>
                </div>
                ):
                (
                    <div className='col-8 rounded pr-4 pl-4 pt-2 pb-2 bg-danger'>
                    <div className='text-center pt-5 pb-5'>
                        <h3 className='display-4'>OOPS!</h3>
                        <h4>Your score is {result.score}/100</h4>
                        <button className='pt-2 pb-2 pl-4 pr-4 btn-outline-dark bg-white mt-3' onClick={handleClickStartOver} >
                            Start Over
                        </button>
                    </div>
                </div>
                )
            }

        </div>
    </div>
  )
}

export default Result

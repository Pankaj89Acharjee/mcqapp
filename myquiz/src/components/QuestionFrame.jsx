import React from 'react'
import History from './History'

const QuestionFrame = () => {

    const nextButtonClick = () => {
        console.log("Clicked on Next btn")
      }
    
      const prevButtonClick = () => {
        console.log("Clicked on Prev btn")
      }
    
      return (
        <div className='bg-gray-200 flex flex-col lg:w-full items-center justify-center'>
          <h1 className='font-bold text-center text-2xl mt-5 p-2 font-normal bg-yellow-200 rounded-xl'>History: Indian Struggle For Freedom</h1>
    
          {/* Questions */}
          <div>           
            <History></History>
          </div>
          <div className='justify-between flex flex-row gap-5'>
            <button className='bg-green-400 p-2 rounded-xl mt-2  relative font-semibold flex'
              onClick={prevButtonClick}
            >
              Previous</button>
    
    
            <button className='bg-green-400 p-2 rounded-xl mt-2  relative font-semibold flex'
              onClick={nextButtonClick}
            >Next</button>
          </div>
        </div>
      )
}

export default QuestionFrame
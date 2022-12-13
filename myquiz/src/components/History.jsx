import React, { useEffect } from 'react'
import { useState } from 'react'
import HistoryQs from '../data/historyquestions'

const History = () => {

  const [checked, setChecked] = useState(undefined)

  const singleQs = HistoryQs[0]

  useEffect(() => {
    console.log(HistoryQs)
  }, [])

  const onSelect = () => {
    console.log("Radio Button Selected")
  }

  return (
    <div className='mt-5 font-normal text-lg'>
      <h2><span>Qs. {singleQs.id}</span> {singleQs.question}</h2>
      <ul key={singleQs.id}>
        {
          singleQs.options.map((qs, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  value={false}
                  name="options"
                  id={`q${qs}-option`}
                  onChange={onSelect()}
                />
              <label className='font-semibold text-gray-600 ml-3' htmlFor={`q${qs}-option`}>{qs}</label>
                <div className='check'></div>
              </li>
            )

          })
        }
      </ul>

    </div>
  )
}

export default History
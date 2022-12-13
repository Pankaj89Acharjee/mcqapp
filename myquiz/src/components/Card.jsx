import React from 'react'

const Card = (props) => {
    const { children } = props;
    return (
        <div className=" dark:bg-gray-800 rounded shadow p-6">
            <div className="flex items-center justify-between w-full sm:w-full mb-8">
                {children}
                <div>
                    <div className="flex items-center pl-3 text-green-700">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4_col_stat_cards-svg2.svg" alt="increase" />
                        <p className="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">97.2%</p>
                    </div>
                    <p className="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">Updated</p>
                </div>
            </div>
            <div className="relative mb-3">
                <hr className="h-1 rounded-sm bg-green-200" />
                <hr className="absolute top-0 h-1 w-6/12 rounded-sm bg-indigo-700 border-indigo-700 left-0" />
            </div>
            <h4 className="text-base text-gray-600 dark:text-gray-400 font-normal tracking-normal leading-5">Your Overall Stats</h4>
            <div className='flex flex-row justify-between'>
                <button className='bg-green-400 p-2 rounded-xl mt-2 relative font-semibold flex'> Percent: 85</button>
                <button className='bg-green-400 p-2 rounded-xl mt-2 relative font-semibold flex'>View Score</button>
               
            </div>

        </div>
    )
}

export default Card
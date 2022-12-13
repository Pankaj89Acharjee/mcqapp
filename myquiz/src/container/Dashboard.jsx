import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../components/Card';
import English from '../components/English';
import History from '../components/History';
import Userprofile from '../components/Userprofile'
import logo from '../assets/logoexp.jpeg'
import categories from '../data/categorydata';
import QuestionFrame from '../components/QuestionFrame';
import Evaluation from '../components/Evaluation';
//import Allusers from '../components/Allusers'
//import Chartexp from '../components/Chartexp'
//import Expendituresheet from '../components/Expendituresheet'
//import Incomesheet from '../components/Incomesheet'
//import Expsuccessscreen from '../components/Expsuccessscreen'
//import AllExpenditure from '../components/AllExpenditure'


const Dashboard = ({ loginUser }) => {


  const logoutUser = () => {
    localStorage.removeItem('token');
    alert("Logged Out");
    window.location.href = '/';
  }

  const gotologin = () => {
    window.location.href = '/login'
  }

  return (
    <div className='px-3'>
      {loginUser ? (

        <div className="flex flex-row-reverse my-3 mb-0.5 gap-6 p-2 text-bold text-center items-center bg-blue-500 rounded-lg shadow-lg " >
          <div className="flex flex-right my-5 mb-3 gap-10 p-2 text-bold text-center items-center bg-red-400 rounded-lg shadow-lg mx-3" >
            <button className='text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClickCapture={logoutUser}>Logout</button>
          </div>

          <div className="ml-3 text-sm items-center text-center">
            <label className="text-gray-500 text-center dark:text-gray-300">Hi! {loginUser.name}</label>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
            </svg>
            You need to login to view this component
            <button
              type="submit"
              href="/login"
              onClick={gotologin}
              className="flex flex-col items-center mt-10 justify-center text-center px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login Here
            </button>
          </div>


        </>
      )}

      <>
        <div /*This section os for cards*/>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.slice(0, categories.length).map((cat, index) => {
              return (
                <section className='m-1'>
                  <Card key={index}>
                    < img src={logo} alt="logo" className='w-20 h-20 items-center justify-center' />
                    <h2 className="mb-1 uppercase leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">{cat.name}</h2>
                    <Link to={'/questionframe'}>
                      <button className='bg-green-400 p-2 rounded-xl mt-2 relative font-semibold flex'>Start Exam</button>
                    </Link>
                  </Card>

                </section>


              )
            })}
          </div>
        </div>
      </>


      <div>
        <Routes>
          <Route path="/api/singleuser/:id" element={<Userprofile loginUser={loginUser && loginUser} />} />
          <Route path="category/english" element={<English loginUser={loginUser && loginUser} />} />
          <Route path="category/history" element={<History loginUser={loginUser && loginUser} />} />
          <Route path="category/:name" element={<History loginUser={loginUser && loginUser} />} />
          <Route path="/questionframe" element={<QuestionFrame loginUser={loginUser && loginUser} />} />
          <Route path="/category/evaluation" element={<Evaluation loginUser={loginUser && loginUser} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
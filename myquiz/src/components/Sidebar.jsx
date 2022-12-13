import React from 'react'
import logo from '../assets/logoexp.jpeg'
import { RiHomeFill } from 'react-icons/ri'
import { NavLink, Link } from 'react-router-dom'
import categories from '../data/categorydata'

const isActiveStyle = 'flex items-center px-5 capitalize font-extrabold text-yellow-400 hover:text-white hover:text-xl transition-all duration-200 ease-in-out '
const isNotActiveStyle = 'flex items-center px-5 gap-3  border-r-2 border-black transition-all duration-200 ease-in-out capitalize'


const Sidebar = ({ loginUser, closeToggle }) => {

    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
    }
    console.log("User in Sidebar is", loginUser)
    return (
        <div className='bg-gray-800 bg-black flex flex-col justify-between text-white h-full md:h-full sm:h-full min-w-210 '>
            <div className='flex flex-col'>
                <Link to="/home"
                    className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
                    onClick={handleCloseSidebar}
                >
                    <img src={logo} alt="logo" className='w-20 h-20 items-center justify-center' />
                </Link>

                <div className='flex flex-col gap-5'>
                    <NavLink
                        to="/dashboard"
                        onClick = {handleCloseSidebar}
                        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                    >
                        <RiHomeFill />Dashboard
                    </NavLink>

                    <h3 className='mt-2 px-5 text-base 2xl:text-xl underline text-semibold'>
                        This is Sidebar
                    </h3>

                    {categories.slice(0, categories.length).map((category) => {
                        return (
                            <NavLink
                                to={`/category/${category.name}`}
                                key={category.name}
                                onClick={handleCloseSidebar}
                                className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                            >
                                {category.name}
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            {loginUser && (
                <Link
                    to={`/api/singleuser/${loginUser.id}`}
                    className="flex my-5 mb-3 gap-2 p-2 text-bold text-center item-center bg-blue-400 rounded-lg shadow-lg mx-3"
                >
                    <p className='items-center text-center ml-2 capitalize font-bold'>Welcome! {loginUser.name}</p>
                </Link>
            )}
        </div>
    )
}

export default Sidebar
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#4070ff]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/addTask'><li className='text-xl '><a>ADD TASK</a></li></Link>
                    <Link to='/myTask'><li className='text-xl '><a>MY TASK</a></li></Link>
                        
                    </ul>
                </div>
                <a className="font-serif font-bold text-2xl">Task Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/addTask'><li className='text-xl text-white '><a>ADD TASK</a></li></Link>
                    <Link to='/myTask'><li className='text-xl text-white '><a>MY TASK</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="px-5 py-3 bg-black text-white rounded-md text-xl">Login</a>
            </div>
        </div>
    );
};

export default Navbar;
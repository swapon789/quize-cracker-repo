import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import pic from '../images/log1 (1).svg'


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400 bg-slate-400 text-white">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                            <img src={pic} alt="" />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Quiz to Test</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <Link rel="noopener noreferrer" href="#">Instagram</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href="#">Facebook</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" href="#">Twitter</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
        
    );
};

export default Main;
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Content from '../Content/Content';
import './Topic.css'
import pic from '../../images/log1 (1).svg'


const Topic = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='topic'>
                <h1 className='text-5xl text-white'>Introduce  <br /> Quiz & <br /> Solve It</h1>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20'>
                <div className='topic-show grid gap-8 row-gap-5 md:grid-cols-2 lg:grid-cols-4 lg:row-gap-8'>
                    {
                        topics.data.map(topic => <Content key={topic.id} topic={topic}></Content>)
                    }
                </div>
            </div>
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

export default Topic;
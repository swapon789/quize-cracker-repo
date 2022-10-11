import React from 'react';
import './Content.css'

const Content = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <div className='content-item'>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 bg-black">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold tracking-wide text-white">Name:{name}</p>
                        <p className="text-white">Total:{total}</p>
                    </div>
                    <button type="button" className=" bg-sky-400 hover:bg-blue-500 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                </div>
            </div>
        </div>
    

    );
};

export default Content;
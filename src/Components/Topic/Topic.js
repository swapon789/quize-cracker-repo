import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Content from '../Content/Content';
import './Topic.css'



const Topic = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='topic'>
                <h1 className='text-5xl text-white'>Introduce  <br /> Quiz & <br /> Solve It</h1>
                <p>Question follow and solve quize are <br /> very important on Development skill</p>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20'>
                <div className='topic-show grid gap-8 row-gap-5 md:grid-cols-2 lg:grid-cols-4 lg:row-gap-8'>
                    {
                        topics.data.map(topic => <Content key={topic.id} topic={topic}></Content>)
                    }
                </div>
            </div>
        </div>
    


    );
};

export default Topic;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Content from '../Content/Content';


const Topic = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2017/07/10/23/43/question-mark-2492009__480.jpg")`, backgroundRepeat: "no-repeat" }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Question Quize <br /> & Technology</h1>
                        <p className="mb-5">Introduce technology department and learn this side.Answer the quize and learn more and more.</p>
                    </div>
                </div>
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
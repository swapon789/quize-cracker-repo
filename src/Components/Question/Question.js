import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Question = () => {
    const quizes = useLoaderData();
    const {name} = quizes.data;
    
    return (
        <div>
            <div className=' bg-green-300 py-9'>
            <h4 className='text-center text-3xl fw-bold pt-3'>Question Of {name}</h4>
             
            <div>
            {
                quizes.data.questions.map(quize => <Quiz key={quize} quize={quize}></Quiz> )
            }
            </div>
        </div> 
        </div>
    );
};

export default Question;
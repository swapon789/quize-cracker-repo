import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = ({ quize }) => {
    const { question, correctAnswer, options } = quize;

    
    const clickIcon = (correctAnswer) =>{
        toast.success  (correctAnswer, {autoClose: 2000, theme:'dark'})
    }

    const correctAns = (options) => {
        if (correctAnswer === options){
            toast.success("Correct Answer", {autoClose: 1000, theme:'dark'});
        }
        else{
            toast.warning('Wrong Answer', {autoClose: 1000, theme:'dark'})
        }
    }

    return (
        <div>
            <div className="max-w-lg p-4 shadow-md mx-auto bg-emerald-400 dark:text-gray-100 my-9 rounded">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <p><b>Question:</b> {question}</p>
                    </div>
                    <div>
                        <EyeIcon onClick={() => clickIcon(correctAnswer)} className="h-6 w-6 text-blue-500" />

                    </div>
                </div>
                <div className="space-y-4  grid items-baseline grid-cols-2">
                    <div onChange={() => correctAns(options[0])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q1" />
                        <label className='ml-3' for="q1">{quize.options[0] ? quize.options[0] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={() => correctAns(options[1])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q2" />
                        <label className='ml-3' for="q2">{quize.options[1] ? quize.options[1] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={() => correctAns(options[2])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q3" />
                        <label className='ml-3' for="q3">{quize.options[2] ? quize.options[2] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={() => correctAns(options[3])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q4" />
                        <label className='ml-3' for="q4">{quize.options[3] ? quize.options[3] : 'Undifined'}</label><br></br>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quiz;
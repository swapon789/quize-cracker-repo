import React, { useId } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = ({ quize }) => {
    const { question, correctAnswer, options } = quize;

    
    const clickIcon = (correctAnswer) =>{
        toast.success  (correctAnswer, {autoClose: 2000, theme:'dark'})
    }
    const select = useId();

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
            <div className="max-w-lg p-4 shadow-md mx-auto bg-emerald-400 text-white my-9 rounded">
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
                        <input className='cursor-pointer' type="radio" name="java" id={select + 'first'} />
                        <label className='ml-3 cursor-pointer' for={select + 'first'}>{quize.options[0] ? quize.options[0] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={() => correctAns(options[1])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + 'second'} />
                        <label className='ml-3 cursor-pointer' for={select + 'second'}>{quize.options[1] ? quize.options[1] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={() => correctAns(options[2])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + 'third'} />
                        <label className='ml-3 cursor-pointer' for={select + 'third'}>{quize.options[2] ? quize.options[2] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={() => correctAns(options[3])} className='border border-blue-700 p-2 m-3 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + 'fourth'} />
                        <label className='ml-3 cursor-pointer' for={select + 'fourth'}>{quize.options[3] ? quize.options[3] : 'Undifined'}</label><br></br>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quiz;
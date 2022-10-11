import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quize }) => {
    const { question } = quize;
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md mx-auto bg-emerald-400 dark:text-gray-100 my-9 rounded">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <p><b>Question:</b> {question}</p>
                    </div>
                    <div>
                        <EyeIcon className="h-6 w-6 text-blue-500" />

                    </div>
                </div>
                <div className="space-y-4  grid items-baseline grid-cols-2">
                    <div className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q1" />
                        <label className='ml-3' for="q1">{quize.options[0] ? quize.options[0] : 'Undifined'}</label><br></br>

                    </div>
                    <div className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q2" />
                        <label className='ml-3' for="q2">{quize.options[1] ? quize.options[1] : 'Undifined'}</label><br></br>

                    </div>
                    <div className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q3" />
                        <label className='ml-3' for="q3">{quize.options[2] ? quize.options[2] : 'Undifined'}</label><br></br>

                    </div>
                    <div className='border border-blue-700 p-2 m-3 rounded'>
                        <input type="radio" name="java" id="q4" />
                        <label className='ml-3' for="q4">{quize.options[3] ? quize.options[3] : 'Undifined'}</label><br></br>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quiz;
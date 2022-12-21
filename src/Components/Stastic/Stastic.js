import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Stastic = () => {
    const topic = useLoaderData();
    console.log(topic)
    const stastic = topic.data;
    return (
        <div className='py-3'>
            <div className='text-center'>
                <h1 className='text-4xl text-bold text-white'>Mark Chart</h1>
            </div>
            <div className='sm:w-11/12 md:w-9/12 mx-auto lg:w-6/12 my-9'>
                <ResponsiveContainer width="75%" height={400}>
                    <LineChart
                        width={300}
                        height={300}
                        data={stastic}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="blue" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stastic;
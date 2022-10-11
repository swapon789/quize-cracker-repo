import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-purple-400 py-5">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl pb-5 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg bg-blue-500">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the purpose of react router?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-blue-500">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does contex API ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
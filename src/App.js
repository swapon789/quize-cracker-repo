
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topic from './Components/Topic/Topic';
import Question from './Components/Question/Question';
import Stastic from './Components/Stastic/Stastic';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Question></Question>
        },
        {
          path: '/stastic',
          loader: async () => {
            return fetch (`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Stastic></Stastic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

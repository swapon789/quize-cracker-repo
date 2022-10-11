
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
      errorElement:<Error></Error>,
      children: [
        {
          path: '/topic',
          loader:  () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path:'/question',
          element: <Question></Question>
        },
        {
          path:'/stastic',
          element: <Stastic></Stastic>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
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

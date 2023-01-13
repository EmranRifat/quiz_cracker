import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './Componends/About/About';
import Blog from './Componends/Blog/Blog';
import Home from './Componends/Home/Home';
import Page from './Componends/Page/Page';
import QuizDetail from './Componends/Quiz/QuizDetail';
import Login from './Componends/Login/login/Login';
import Signup from './Componends/Login/SignUp/Signup';
import PrivateRoute from './Route/PrivateRoute';


function App() {
  const router= createBrowserRouter([
    {
      path:"/",element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:
          <PrivateRoute>
          <Home></Home>
          </PrivateRoute>

        },
        {
          path:"/page",element:<Page></Page>
        },
        {
          path:"/quizDetail/:id",
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          
          element:<QuizDetail></QuizDetail>
        },
        {
          path:"/Login",element:<Login></Login>
        },
        {
          path:"/signup",element:<Signup></Signup>
        },
    
      ]
      
    },
    
    {
      path:"/about",element:<About></About>
    },
    {
      path:"/blog",element:<Blog></Blog>
    },
    
   
  ])
  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;

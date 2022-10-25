import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../pages/pages/Blog";
import Courses from "../pages/pages/Courses";
import FAQ from "../pages/pages/FAQ";
import Home from "../pages/pages/Home";
import Login from "../pages/pages/Login";
import Register from "../pages/pages/Register";

const routes = createBrowserRouter([ 
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
        ]
    }
])

export default routes;
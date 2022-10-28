import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Admission from "../pages/pages/Admission";

import Blog from "../pages/pages/Blog";
import Course from "../pages/pages/Course";
import CourseInfo from "../pages/pages/CourseInfo";
import Courses from "../Layouts/Courses";
import DownloadPDF from "../pages/pages/DownloadPDF";
import FAQ from "../pages/pages/FAQ";
import Home from "../pages/pages/Home";
import Login from "../pages/pages/Login";
import Register from "../pages/pages/Register";
import ErrorPage from "../pages/shearedPages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllCourses from "../pages/pages/AllCourses";

const routes = createBrowserRouter([ 
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<Courses></Courses>,
                loader: ()=>fetch('https://assignment-10-app-server-arifbiswas.vercel.app/courses'),
                children:[
                    {
                        path:'/courses',
                        element:<AllCourses></AllCourses>,
                        loader: ({params})=>fetch(`https://assignment-10-app-server-arifbiswas.vercel.app/courses`)
                    },
                    {
                        path:'/courses/:id',
                        element:<Course></Course>,
                        loader: ({params})=>fetch(`https://assignment-10-app-server-arifbiswas.vercel.app/courses/${params.id}`)
                    }
                ]
            },
            {
                path:'/course/:id',
                element:<PrivateRoute><CourseInfo></CourseInfo></PrivateRoute>,
                loader: ({params})=>fetch(`https://assignment-10-app-server-arifbiswas.vercel.app/courses/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/admission/:id',
                element:<PrivateRoute><Admission></Admission></PrivateRoute>,
                loader: ({params})=>fetch(`https://assignment-10-app-server-arifbiswas.vercel.app/courses/${params.id}`)
            },
           
        ]
    },
    {
        path:'/pdf/:id',
        element:<DownloadPDF></DownloadPDF>,
        loader: ({params})=>fetch(`https://assignment-10-app-server-arifbiswas.vercel.app/courses/${params.id}`)
    }
])

export default routes;
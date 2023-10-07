import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import NewsDetails from "../pages/Home/📰 News/NewsDetails";
import Gurd from "../pages/Home/Gurd/Gurd";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/news.json')
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
                path:'/news/:id',
                element:<Gurd><NewsDetails></NewsDetails></Gurd>
            },
            {
                path:'*',
                    element:<h1 className="text-9xl text-center font-bold">404</h1>
            }
        ]
    }    
]);

export default router;
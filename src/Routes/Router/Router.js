import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Payment from "../../Pages/Payment/Payment";
import AddProduct from "../../Pages/Products/AddProduct";
import MyProducts from "../../Pages/Products/MyProducts";
import Products from "../../Pages/Products/Products";
import Report from "../../Pages/Report/Report";
import Error from "../../Pages/Shared/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories',
                element:<Categories></Categories>
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader:({params})=>fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/category/${params.id}`)
               
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'/orders',
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'/all/sellers',
                element:<PrivateRoute><Sellers></Sellers></PrivateRoute>
            },
            {
                path:'/all/buyers',
                element:<PrivateRoute><Buyers></Buyers></PrivateRoute>
            },
            {
                path:'/add/product',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/products',
                element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path:'/report',
                element:<PrivateRoute><Report></Report></PrivateRoute>
            },
            {
                path:'/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>,
                loader:({params})=>fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/bookings/${params.id}`)
            }
            
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<Register></Register>
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
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
                path:'/category/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader:({params})=>fetch(`https://share-knowledge-server.vercel.ap/category/${params.id}`)
               
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/orders',
                element:<Orders></Orders>
            },
            {
                path:'/all/sellers',
                element:<Sellers></Sellers>
            },
            {
                path:'/all/buyers',
                element:<Buyers></Buyers>
            },
            {
                path:'/add/product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/products',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/report',
                element:<Report></Report>
            },
            
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
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Error from "../../Pages/Shared/Error/Error";

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
                element:<Products></Products>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }

        ]
    }
])

export default router;
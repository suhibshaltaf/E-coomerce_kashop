import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ProductDetails from "./pages/productdetails/ProductDetails";
import CategoriesPage from "./pages/categories/CategoriesPage";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";

const router= createBrowserRouter([

    {
        path:'/',
        element:
                    <MainLayout/> ,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'cart',
                element:
                <ProtectedRouter>
                    <Cart/>
                    </ProtectedRouter>
                    
            }
            ,
            {
                path:'cart/checkout',
                element:
                <ProtectedRouter>
                    <Checkout/>
                    </ProtectedRouter>
                    
            }  ,
            {   path:'categories',
                element:
                    <CategoriesPage/>
            },
              {
                path:'products/:id',
                element:
                    <ProductDetails/>
            },
            {
                path:'login',
                element:<Login/>
            }, {
                path:'register',
                element:<Register/>
            },
        
    ]
    }
]);
export default router;
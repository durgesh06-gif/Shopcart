import { createBrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Layout from "./components/Layout";
import  Cart  from "./components/Cart";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Quotes from "./components/Quotes";
import Reducer from "./components/Reducer";
import Productabmin from "./components/Productadm";
import Propex from "./components/Propex";
import A from "./components/A";

const routes=createBrowserRouter([
   {
    path:"/",
    element:<Layout/>,
    children:[{
        path:'/product',
        element:<Product/>
    },
    {
        index:true,
        element:<Home/>
    },
{
path:'cart',
element:<Cart/>
},
{
    path:'login',
    element:<Login/>
},
{
    path:'register',
    element:<Register/>
},
{
    path:'quotes',
    element:<Quotes/>
},
{
    path:'reducer',
    element:<Reducer/>
},
{
    path:'products',
    element:<Productabmin/>
},
{
    path:'props',
    element:<Propex/>
},
{
    path:'acom',
    element:<A/>
}
]
   }
])

export default routes;
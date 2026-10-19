import { RouterProvider } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter';
import Product from './components/Product';
import Recipes from './components/Recipes';
import State from './components/State';
import routes from './routes';
import Login from './components/Login';
import { LoginContext, LoginProvider } from './Logincontext';

function App() {
    return(
        <>
<h1>Hello</h1>
{/* <Product/> */}
{/* <Counter/> */}
{/* <State/> */}
{/* <Recipes/> */}
<LoginProvider>
    <RouterProvider router={routes} />
</LoginProvider>
</>
);
}

export default App

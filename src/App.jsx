import { RouterProvider } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter';
import Product from './components/Product';
import Recipes from './components/Recipes';
import State from './components/State';
import routes from './routes';

function App() {
    return(
        <>
<h1>Hello</h1>
{/* <Product/> */}
{/* <Counter/> */}
{/* <State/> */}
{/* <Recipes/> */}

    <RouterProvider router={routes} />

</>
);
}

export default App

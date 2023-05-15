import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import Rootlayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Rootlayout/>,
    errorElement : <ErrorPage/>,  
    children : [
      { path : '' , element : <Home/>}, 
      { path : 'content' , element : <Content/> },
      { path : 'content/:productId' , element : <ProductDetail/>}
    ],
  },
  
]);
 
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

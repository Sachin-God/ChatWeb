import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Room from './Component/Room';
import Home from './Component/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:'/room/:id',
      element:<Room/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  );
}

export default App;

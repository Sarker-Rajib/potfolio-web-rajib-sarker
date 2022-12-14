import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
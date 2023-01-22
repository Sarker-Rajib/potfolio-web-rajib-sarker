import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
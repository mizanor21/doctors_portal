import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='mx-5 md:mx-0'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

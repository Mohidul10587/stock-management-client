
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Dashboard from './pages/Dashboard/Dashboard';

import Profile from './pages/Dashboard/Profile';
import MyOrders from './pages/Dashboard/MyOrders';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {


  return (
    <>
      <Navbar />
      <Routes>
      
     
      
     
      
      
        <Route path='/' element={<Dashboard />}>
          <Route index='profile' element={<Profile></Profile>}></Route>
          <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
     

        </Route>

      </Routes>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App

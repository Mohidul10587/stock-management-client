import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { Link, Outlet } from 'react-router-dom'
import auth from '../Authentication/firebase.init'
import useAdmin from '../../hooks/useAdmin'
import { GoThreeBars } from 'react-icons/go'


const Dashboard = () => {

  return (


    <div className="drawer drawer-mobile sm:mx-2  pt-24">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content sm:px-2">
        {/* <!-- Page content here --> */}
        <p className=' font-bold text-2xl p-1 w-16'><label htmlFor="my-drawer-2" className=" bg-teal-700 lg:hidden"><GoThreeBars /></label></p>
        <div className='mt-2'>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 sm:w-72 w-56 bg-teal-600 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className='mb-2 bg-white rounded-md'> <Link to='/'>Profile</Link></li>

        
      
          
            <li className='mb-2 bg-white rounded-md'> <Link to='/MyOrders'>My Orders</Link></li>
           
        </ul>

      </div>
    </div>


  )
}

export default Dashboard





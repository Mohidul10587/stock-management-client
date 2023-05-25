import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Authentication/firebase.init'
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';

const Profile = () => {





  // if (isLoading) return <div className=' flex justify-center font-bold text-3xl pt-20 min-h-screen'><Spinner /></div>

  return (
 <div>
  this is dashboard
 </div>
  )
}

export default Profile
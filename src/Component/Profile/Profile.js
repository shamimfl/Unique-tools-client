import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Profile = () => {
    const navigate =useNavigate()
    const [user, loading, error] = useAuthState(auth)
    const [updateProfile, updating, uerror] = useUpdateProfile(auth)
    const handleupdate=e=>{
        e.preventDefault();
        const name =e.target.name.value;
        updateProfile({displayName: name})
        navigate('/')
    }
   
    if(updating){
        <Loading></Loading>
    }
    return (
        <div>
            <p className='font-bold text-3xl text-black text-center font-serif'></p>
            <h1 className='text-center text-pink-400 text-xl font-serif'> Wellcome to Your profile</h1>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='rounded-full' src={user?.photoURL} alt="Profile Img" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{user?.displayName}</h2>
                        <div class="card-actions">
                           <label for="my-modal-3" class="btn bg-pink-500 hover:bg-pink-700 border-0 modal-button">Update Profile</label> 
                        </div>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleupdate}>
                        <input type="text" name="name" required id="" placeholder='Enter your Name' className='border-b-2 w-full p-3 cursor-pointer border-pink-500 focus:outline-none' />
                        <input type="submit" className='bg-pink-500 px-2 py-1 border-0 cursor-pointer font-bold text-white rounded-md block mt-5' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Profile;
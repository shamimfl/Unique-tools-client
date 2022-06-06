import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const Header = () => {
    const d = new Date()
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='div md:flex justify-between items-center bg-white  z-50 sticky top-0'>

            <div className='flex justify-between p-5 bg-white'>
                
                <p className='text-xl font-bold block w-40 font-serif'>Unique Tools 
                </p>
                

                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>

                    <div className='border-2 border-pink-600 p-1'>
                        <div className='bg-black w-5 h-1'></div>
                        <div className='bg-black w-5 h-1 mt-1'></div>
                        <div className='bg-black w-5 h-1 mt-1'></div>
                    </div>
                </div>
            </div>
            <ul className={`md:flex justify-center items-center absolute div z-50 bg-pink-300 md:bg-white lg:bg:white p-5 md:static  w-full duration-500 ease-in ${open ? 'top-16' : 'top-[-200px]'}`}>
                <div className='bg-pink-400 w-full h-1 md:hidden'></div>
                <Link to='/profile' className='md:mr-10  font-semibold flex items-center '>
                    {
                        user?.photoURL ?  <img className='h-12 rounded-full border-2 border-pink-500' src={user?.photoURL} alt="" /> : <img className='h-12 w-12 rounded-full border-2 border-pink-500' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLXMjRwxKb32_iBLR5ouRYFiu0DNjYNR_xg&usqp=CAU' alt="" />
                }
                   <p className='ml-2'>My  Profile</p></Link>
                <span className='md:mr-10 block font-semibold '>{user?.displayName}</span>
                <Link to={'/'} className='md:mr-10  uppercase  block font-semibold'>Home</Link>
                {
                    user ? <Link to={'/dashbord'} className='md:mr-10 block item font-semibold uppercase '>Dashbord</Link> : ''
                }
                <Link to='/blogs' className='md:mr-10  item block font-semibold uppercase '>Blogs</Link>
                <Link to='/myprotfoliyo' className='md:mr-10  item block font-semibold uppercase '>My Protfoliyo</Link>
                {
                    user ? <button onClick={logout} className='md:mr-10  item block font-semibold uppercase '>Log Out</button> : <Link to='/login' className='md:mr-10  item block font-semibold  uppercase'>Login</Link>
                }
            </ul>
        </div>
    );
};

export default Header;
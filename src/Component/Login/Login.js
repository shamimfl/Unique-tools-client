import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      //
      const location = useLocation()
      const from = location?.state?.from?.pathname || '/'
      const navigate =useNavigate()
      const [singInWithGoogle, guser, gloading, gerror]=useSignInWithGoogle(auth)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        //update user

        toast('successful')
        reset()
    }
    if(loading){
        return <Loading></Loading>
    }

    if (guser) {
        navigate(from, { replace: true })
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <section className='h-[90vh]'>
            <h1 className='mt-5 text-center text-pink-400 text-xl'>Please Login</h1>
            <div className='flex justify-center items-center'>
                <form className='lg:w-2/6  p-5 rounded-lg shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
                <p className='mt-5 mb-5'>
                        {
                            error ? error.message : ''
                        }
                    </p>
                    <input placeholder='Enter Your Email' type='email' defaultValue="" className='border-b-2  p-2 block border-pink-400 w-full mb-5 focus:outline-none' {...register("email",{ required: true })} />
                    <input placeholder='Enter Your Password' type='password' defaultValue="" className='border-b-2  p-2 block border-pink-400 w-full mb-5 focus:outline-none' {...register("password",{ required: true })} />
                    <div className='flex justify-center'>
                        <input value='Login' className='rounded-md w-full text-white font-bold bg-pink-500 item px-4 py-2 mt-10  border-2' type="submit" />
                    </div>
                    <Link className='mt-5 block' to='/singup'><small className='font-semibold'>Create New Account</small></Link>
                    <Link className='mt-5 block' to='/reset'><small className='font-semibold'>Forgete password</small></Link>
                    <div className='w-full mt-3 flex justify-center'>
                        <button onClick={()=>singInWithGoogle()} className='flex items-center  font-bold justify-center  border-2 border-pink-400 text-pink-400 p-3 w-full'>
                            <img className='h-6 w-6 mr-3' src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="" />
                            <small>Sing In with Google</small>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
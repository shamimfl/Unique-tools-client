import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';


const SingUp = () => {
    const navigate =useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [token] = useToken(guser)
    const [accestoken] = useToken(user)
    if (loading) {
        <Loading></Loading>
    }

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        createUserWithEmailAndPassword(data.email, data.password)
        reset();
    }
    if(user){
        navigate('/profile')
    }

    return (
        <div>
            <h1 className='mt-5 text-center text-pink-400 text-xl'>Please SingUp</h1>
            <div className='flex justify-center'>
                <form className='lg:w-2/6  p-5 rounded-lg shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
                    <p className='mt-5 mb-5'>
                        {
                            error ? error.message : ''
                        }
                    </p>
                    <input placeholder='Enter Your Email' type='email' defaultValue="" className='border-b-2  p-2 block border-pink-400 w-full mb-5 focus:outline-none' {...register("email")} />
                    <input placeholder='Enter Your Password' type='password' defaultValue="" className='border-b-2  p-2 block border-pink-400 w-full mb-5 focus:outline-none' {...register("password")} />
                   
                    <div className='flex justify-center'>
                        <input value='Sing Up' className='rounded-md w-full text-white font-bold cursor-pointer bg-pink-500 item px-4 py-2 mt-10  border-2' type="submit" />
                    </div>
                    <Link className='mt-5 block' to='/login'><small className='font-semibold'>All ready have an account</small></Link>

                </form>
                
            </div>
            <div className='w-full mt-3 flex justify-center'>
                    <button onClick={() => signInWithGoogle()} className='flex items-center bg-base-100 shadow-xl card  font-bold  border-2 border-pink-400 text-pink-400 p-3 w-2/6'>
                        <img className='h-6 w-6' src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="" />
                        <small>Sing In with Google</small>
                    </button>
                </div>
        </div>
    );
};

export default SingUp;
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Order = () => {
    const [phone , setPhone] =useState('');
    const [address , setadress] =useState('');
    const [value, setValue] = useState(100)
    const [user, loading, uerror] =useAuthState(auth)
    const _id = useParams()
    const navigate =useNavigate();
    const { isLoading, error, data, refetch } = useQuery('parts', () =>
        fetch(`https://frozen-sands-98061.herokuapp.com/parts/${_id._id}`).then(res =>
            res.json()
        )

    )
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    refetch()
    // console.log(data)
    const handleincress = e => {
        if (data.quentity == value) {
            setValue(data.quentity)
        }
        else {
            setValue(value + 1)
        }

    }
    const handledecress = e => {
        if (value == 100) {
            setValue(100)
        }
        else {
            setValue(value - 1)
        }

    }

    const handleOrderadd =async (e)=>{
        e.preventDefault()
        const parts =data?.name;
        const price =data?.price;
        const name =e.target.name.value;
        const email =e.target.email.value;
        const quentity =e.target.quentity.value;
        const phone =e.target.phone.value;
        const address =e.target.address.value;
        if(address =='' || phone=='' || name=='' || parts=='' || price == ''){
            toast.error('please add information')
        }
        else{
            const orderData =await { email, phone, quentity, address, parts, name, price}
       
        fetch('https://frozen-sands-98061.herokuapp.com/order',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        toast.success('successfully to added')

        e.target.reset()
        navigate('/')
        }
        console.log(name)
    }
    return (
        <div className='p-5'>
            <h1 className='text-xl text-center text-pink-400 mb-5'>Manane Your Order</h1>
            <div className='lg:flex justify-around'>
                <img className='lg:w-2/4 h-96' src={data?.imgURL} alt="" />
                <div>
                    <h1 className='text-xl font-semibold text-pink-400'>Parts Name: {data?.name}</h1>
                    <h1 className=' font-semibold text-pink-400'>Parts Quentity: {data?.quentity}</h1>
                    <h1 className=' font-semibold text-pink-400'>Parts Price: {data?.price}</h1>
                    <div className='mt-10'>
                        <p className='mb-5 text-red-600 font-bold'>
                            {
                                value == 100 ? <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <p>You must order at least 100 parts</p>
                                </span> : <span className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p class=" text-green-400">Available</p>
                                </span>
                            }
                        </p>
                        <button onClick={handledecress} className='bg-pink-500 px-4 py-2 rounded-l-2xl text-white font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </button>
                        <span className='px-5 py-3 text-3xl'>{value}</span>
                        <button onClick={handleincress} className='bg-pink-500 px-4 py-2 rounded-r-2xl text-white font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        {/* <button for="my-modal-3" className='block bg-pink-300 mt-5 w-full py-3 rounded text-white font-bold uppercase'>Procced</button> */}
                        <label for="my-modal-3" class="block bg-pink-500 mt-5 w-full py-3 rounded cursor-pointer text-white font-bold uppercase text-center">Procced</label>
                    </div>
                </div>
            </div>

            {/* modal----------------------------- */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <form onSubmit={handleOrderadd} class="modal-box relative">
                    <p className='text-pink-500 font-semibold text-center' >Confirm Order</p>
                    <label for="my-modal-3" class="bg-pink-600 btn border-0 hover:bg-pink-600 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-pink-500 font-semibold mt-3'>Name:</p>
                    <input type="text" name='name' readOnly value={user?.displayName} className='border-b-2 border-pink-600 input-disabled p-2 w-full  rounded-t-md focus:outline-none' />
                    <p className='text-pink-500 font-semibold mt-3'>Product Name:</p>
                    <input type="text" name='parts' readOnly value={data.name} className='border-b-2 border-pink-600 input-disabled p-2 w-full  rounded-t-md focus:outline-none' />

                    <p className='text-pink-500 font-semibold mt-3'>Email:</p>
                    <input type="text" name='email' readOnly value={user?.email} className='border-b-2 border-pink-600 input-disabled p-2 w-full  rounded-t-md focus:outline-none' />

                    <p className='text-pink-500 font-semibold mt-3'>Quentity:</p>
                    <input type="text" name='quentity' readOnly value={value} className='border-b-2 border-pink-600 input-disabled p-2 w-full  rounded-t-md focus:outline-none' />

                    <p className='text-pink-500 font-semibold mt-3'>Phone Number:</p>
                    <input type="number" placeholder='Enter Your Phone Number'  name='phone'  className='border-b-2 border-pink-600 p-2 w-full  rounded-t-md focus:outline-none' />

                    <p className='text-pink-500 font-semibold mt-3'>Add Adress:</p>
                    <input type="text" placeholder='Enter Your Address'  name='address'  className='border-b-2 border-pink-600 p-2 w-full  rounded-t-md focus:outline-none' />
                    <button type='submit' className={`block bg-pink-600 mt-5 w-full py-3 rounded text-white font-bold uppercase text-center`}>Confirm Order</button>
                </form>
            </div>
        </div>
    );
};

export default Order;
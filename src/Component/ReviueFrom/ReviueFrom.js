import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const ReviueFrom = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        fetch('https://frozen-sands-98061.herokuapp.com/reviue',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        toast.success('successfully to added')
        reset()
    };
    return (
        <div>
            <div className='img  flex justify-center items-center'>
                <form className='w-2/4 p-5  shadow-xl rounded-md' onSubmit={handleSubmit(onSubmit)}>
                    <input className='block border-b-2 border-black mt-5  p-3 w-full focus:outline-none'  {...register("name", { required: true })} placeholder='Enter your Name' />
                    <input className='block border-b-2 border-black mt-5  p-3 w-full focus:outline-none' {...register("email", { required: true })} placeholder='Enter Your Email' />
                    <input className='block border-b-2 border-black mt-5  p-3 w-full focus:outline-none' {...register("comment", { required: true })} placeholder='Enter Your Commrnt' />
                    <div class="rating rating-md mt-4">
                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-yellow-400" checked />
                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-yellow-400" />
                        <input type="radio" name="rating-7" class="mask mask-star-2 bg-yellow-400" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='flex justify-center'>
                        <input className='text-white px-4 py-2 block rounded cursor-pointer bg-pink-500 font-bold uppercase' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviueFrom;
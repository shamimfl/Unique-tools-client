import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



const AddParts = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        fetch('https://frozen-sands-98061.herokuapp.com/parts',{
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
        <section className='flex justify-center items-center p-10  '>
            <form className='lg:w-2/6  p-5 rounded-lg shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Parts Name' defaultValue="" className='border-b-2  p-2  block border-pink-500 w-full mb-5 focus:outline-none' {...register("name")} />
                <input placeholder='Descrebtion' className='border-b-2  p-2  block border-pink-500 w-full mb-5 focus:outline-none' {...register("Descrebtion", { required: true })} />
                <input type='number' placeholder='Price' className='border-b-2  p-2  block border-pink-500 w-full mb-5 focus:outline-none' {...register("price", { required: true })} />
                <input type='number' placeholder='quentity' className='border-b-2  p-2  block border-pink-500 w-full mb-5 focus:outline-none' {...register("quentity", { required: true })} />
                <input type='text' placeholder='Img URL' className='border-b-2  p-2  block border-pink-500 w-full mb-5 focus:outline-none' {...register("imgURL", { required: true })} />
                <div className='flex justify-center'>
                    <input className='border-pink-500 rounded-md btn item bg-pink-500 px-4 py-2 mt-10  ' type="submit" />
                </div>
            </form>
        </section>
    );
};

export default AddParts;
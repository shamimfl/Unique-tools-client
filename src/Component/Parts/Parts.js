import React from 'react';
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Parts = () => {
const navigate =useNavigate()
    const { isLoading, error, data,refetch } = useQuery('repoData', () =>
        fetch('https://frozen-sands-98061.herokuapp.com/parts').then(res =>
            res.json()
        )
       
    )
    if(isLoading){
        return <Loading></Loading>    
    }
    refetch()
    const handlemanage =_id =>{
         navigate(`/parts/${_id}`)
    }
    // console.log(data)
    return (
        <div className='p-5'>
            <h1 className='text-2xl text-center text-pink-500 mt-10 uppercase mb-10'>Our Parts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.map(parts => 
                    <div className='rounded-lg p-5 bg-base-100 shadow-xl card'>
                        <img  className='hover:border-l-8 border-pink-400 ease-in-out duration-500 w-full h-60  overflow-hidden' src={parts.imgURL} alt="" />
                        <div className=' p-5 rounded-lg'>
                        <h4 className='text-center text-xl font-semibold mt-3 text-pink-500'>{parts.name}</h4>
                        <div className='h-1 mt-5 w-full bg-pink-400'></div>
                        <span className='flex justify-between mt-5'>
                        <h4 className='font-semibold'>Price: {parts.price} $</h4>
                        <h4 className='font-semibold'>{parts.quentity} P</h4>
                        </span>
                        <p className='text-sm font-semibold mt-3'>{parts.Descrebtion}</p>
                        </div>
                        <button onClick={()=> handlemanage(parts._id)} className='bg-pink-500 text-white font-bold opacity-70 mt-5 px-3 py-1 w-full  rounded-md shadow-inner shadow-current'>Order Now</button>
                    </div>
                    )
                }
        </div>
        <div className='flex justify-end mt-10  rounded-md'>
        <Link className='text-pink  bg-pink-400 px-2 text-white font-semibold ' to='/allparts'>SEE MORE</Link>
        </div>
        </div>
    );
};

export default Parts;
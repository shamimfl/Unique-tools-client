import React from 'react';

const Service = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center text-2xl text-pink-400 mt-10 mb-10' >Our services</h1>
            <div className='grid lg:grid-cols-3 lg:gap-20 gap-5'>
                <div className='text-center font-bold text-xl mb-3 rounded-md shadow-lg bg-pink-50 p-5 text-pink-400'>
                <img src="https://www.svgrepo.com/show/65050/machinery.svg" className='text-pink-400 w-full h-20 filter brightness-200' alt="" />
                <p>Made by modern technology</p>
                </div>
                <div className='text-center font-bold text-xl mb-3  rounded-md shadow-lg text-pink-400 bg-pink-50 p-5'>
                <img src="https://www.svgrepo.com/show/62035/warning.svg" className='text-pink-400 w-full h-20 filter brightness-200' alt="" />
                <p>Lasts a long time</p>
                </div>
                <div className='text-center font-bold text-xl mb-3  rounded-md shadow-lg text-pink-400 bg-pink-50 p-5'>
                <img src="https://www.svgrepo.com/show/13754/tractor.svg" className='text-pink-400 w-full h-20 filter brightness-200' alt="" />
                <p>Transportation</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
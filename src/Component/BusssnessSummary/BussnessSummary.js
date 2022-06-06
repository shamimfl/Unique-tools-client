import React from 'react';

const BussnessSummary = () => {
    return (
        <div className='p-5'>
            <section className='lg:grid md:grid-cols-2 gap-10 mt-10 p-5'>
                <div className=''>
                    <img src="https://www.coventry.ac.uk/globalassets/media/global/06-life-on-campus-section-assets/faculties-and-schools/faculty-of-engineering-environment-and-computing/facilities-panels-for-courses/institute_for_advanced_manufacturing_and_engineering-facilities-panel-767x460.jpg" alt="" />
                </div>
                <div className=''>
                    <h1 className=' mt-5 mb-5 text-pink-400 text-3xl font-semibold'>Bussness Summary</h1>
                    <p className='text-xl text-slate-400'>We make all kinds of parts through advanced technology, all our parts have the confidence to last a long time. We make it beautifully.
                        And we deliver to different countries through transportation. All our parts are guaranteed.And made by skilled craftsmen
                    </p>
                </div>
            </section>
            <div class="mt-20 lg:grid grid-cols-4 gap-5 mb-5">
                <div className='p-10 w-full  shadow-lg rounded-xl'>
                    <h1 className='font-semibold'>We seerve Customer</h1>
                    <span className='flex items-center justify-between'>
                        <h1 className='text-6xl text-pink-400 font-bold'>100k+</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" className='h-10 w-10 text-pink-400' stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </span>
                    <p className='text-slate-300 font-semebold'>70% more then last Month</p>
                </div>



                <div className='p-10 w-full  shadow-lg rounded-xl'>
                    <h1 className='font-semibold'>Annual revenue</h1>
                    <span className='flex items-center justify-between text-blue-400'>
                        <h1 className='text-6xl  font-bold'>20M+</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" className='h-10 w-10' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>
                    <p className='text-slate-300 font-semebold'>21% more then last Year</p>
                </div>


                <div className='p-10 w-full  shadow-lg rounded-xl'>
                    <h1 className='font-semibold'> Reviews</h1>
                    <span className='flex items-center justify-between text-yellow-400'>
                        <h1 className='text-6xl  font-bold'>33K+</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                    </span>
                    <p className='text-slate-300 font-semebold'>70% revius in  last 1 Year</p>
                </div>


                <div className='p-10 w-full  shadow-lg rounded-xl'>
                    <h1 className='font-semibold'>Tools</h1>
                    <span className='flex items-center justify-between '>
                        <h1 className='text-6xl  font-bold'>50+</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                    </span>
                    <p className='text-slate-300 font-semebold'>we make  Evary Day</p>
                </div>
            </div>
        </div>
    );
};

export default BussnessSummary;
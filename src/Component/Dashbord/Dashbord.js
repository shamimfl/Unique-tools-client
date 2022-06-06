import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';


const Dashbord = () => {
    const [user , loading, uerror] =useAuthState(auth)
    const url = `https://frozen-sands-98061.herokuapp.com/singleuser/${user?.email}`
    const { isLoading, error, data, refetch } = useQuery('user', () =>
        fetch(url).then(res =>
            res.json()
        )

    )
    if(loading || isLoading){
        return <Loading></Loading>
    }
    refetch()
    const role = (data[0]?.role)
    return (
        <div className='lg:p-10'>
            <div className='flex justify-between items-center '>
                <label for="my-drawer-2" class="btn bg-pink-400 text-white border-0 drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg></label>
                <p className='text-xl font-bold text-pink-400'>Your Dashboard</p>
            </div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content w-full">
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu w-40 bg-base-100 text-base-content">
                        <Link to='myorder' className='text-pink-400 font-bold uppercase mt-2' >MY order</Link>
                        <Link className='text-pink-400 font-bold uppercase  mt-2 py-1' to='/dashbord/addveviue'>add Reviue</Link>
                        <Link className='text-pink-400 font-bold uppercase mt-2' to='/dashbord/addparts'>Add parts</Link>
                        <Link className={`text-pink-400 font-bold uppercase mt-2 ${role == 'user' ? 'hidden' : ''}`} to='/dashbord/alluser'>All user</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;
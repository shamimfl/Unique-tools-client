import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../Firebase.init';
import Loading from '../../Loading/Loading';

const Alluser = () => {
    const [user, loading, uerror] = useAuthState(auth)
    const { isLoading, error, data, refetch } = useQuery('alluser', () =>
        fetch('https://frozen-sands-98061.herokuapp.com/user').then(res =>
            res.json()
        )

    )
    refetch()
    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const handlemakeadmin = email => {
            const uemail =user?.user?.email;
            const name =user?.user?.displayName;
            const currentUser ={role: 'admin'}
            const url =`https://frozen-sands-98061.herokuapp.com/user/${email}`
            console.log(url)
            fetch(url,{
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
    }

    return (
        <div>
            <h1 className='font-bold text-center text-pink-500 w-full'>Our all user</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>Role</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(users => <tr>
                                <td><small>{users?.email}</small></td>
                                <td >{users?.role}</td>
                                <td><button onClick={() => handlemakeadmin(users?.email)} className={`bg-pink-400 font-bold text-white px-2 rounded-md ${users?.role== 'admin' ? 'hidden' : '' }`}><small>Make Admin</small></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;
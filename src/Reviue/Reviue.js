import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Component/Loading/Loading';


const Reviue = () => {
    const { isLoading, error, data, refetch } = useQuery('reviue', () =>
        fetch('https://frozen-sands-98061.herokuapp.com/reviue').then(res =>
            res.json()
        )

    )
    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()

    return (
        <div className='p-5 mb-10'>
            <h1 className='text-xl text-pink-400 mt-6'>Customer Reviue</h1>
            <div className='grid lg:grid-cols-4 gap-10 mt-5 text-center'>
                {
                    data.map(user =>
                        <div className='border-2 border-pink-400 p-5 rounded-lg'>
                            <h1 className='font-semibold'>{user.name}</h1>
                            <h1 className='text-slate-400'>{user.comment}</h1>
                            <div class="rating rating-md mt-4">
                                <input type="radio" name="rating-7" readOnly class="mask mask-star-2 bg-yellow-400 input-disabled" checked />
                                <input type="radio" name="rating-7" readOnly class="mask mask-star-2 bg-yellow-400 input-disabled" checked />
                                <input type="radio" name="rating-7" readOnly class="mask mask-star-2 bg-yellow-400 input-disabled" checked />
                                <input type="radio" name="rating-7" readOnly class="mask mask-star-2 bg-yellow-400 input-disabled" checked />
                                <input type="radio" name="rating-7" readOnly class="mask mask-star-2 bg-yellow-400 input-disabled" checked />
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Reviue;
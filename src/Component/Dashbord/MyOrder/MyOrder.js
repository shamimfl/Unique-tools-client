import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../Firebase.init';
import Loading from '../../Loading/Loading';
import ChekoutForm from './ChekoutForm';

const MyOrder = () => {
    const [payfor, setPayfor] = useState('')
    const [user, loading, uerror] = useAuthState(auth)
    const url = `https://frozen-sands-98061.herokuapp.com/myorder?email=${user?.email}`
    const { isLoading, error, data, refetch } = useQuery('reviue', () =>
        fetch(url).then(res =>
            res.json()
        )

    )
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    refetch()

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://frozen-sands-98061.herokuapp.com/myorder/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    const handlepay = e => {
        setPayfor(e)
    }

    // strype 
    const stripePromise = loadStripe('pk_test_51L3eBjHytanEjC3t1CaK0lrUfRBalQwxdOyYqhSqDoSEdmfmS18XzsuJP4MZ7mvFpFJowpXk30c5ah91JWgWPS2N00kpuljhh1');

    return (
        <div>
            <h1 className='font-bold text-center text-pink-500'>My Order Summary</h1>
            <div class="">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quentity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(data => <tr>
                                <td>{data.parts}</td>
                                <td>{data.quentity} P</td>
                                <td>{data.price * data.quentity} $</td>
                                <td>
                                    <label for="my-modal" onClick={() => handlepay(data.parts)} className='bg-green-500 py-1 text-center cursor-pointer w-full block rounded-md mb-1 font-semibold text-white'>Pay Now</label>
                                    {/* <button className='bg-green-500 w-full block rounded-md mb-1 font-semibold text-white'>pay</button> */}
                                    <button onClick={() => handleDelete(data._id)} className='bg-red-500 block w-full rounded-md text-white font-semibold'>Cencal</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Pay For : {payfor}</h3>
                    <Elements stripe={stripePromise}>
                        <ChekoutForm />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default MyOrder;
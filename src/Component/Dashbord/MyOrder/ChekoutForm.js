import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const ChekoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, seterror] = useState('')
    const [tranjection, setTranjection] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            seterror(error?.message);
        } else {
            setTranjection(paymentMethod.id);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            <p>{error}</p>
            <p className='text-green-400'>Tran: {tranjection}</p>
        </div>
    );
};

export default ChekoutForm;
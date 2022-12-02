import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const bookings = useLoaderData();
    const navigation = useNavigation();
    const { location, user_name, user_email, price, product_name, phone, img } = bookings;
    const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='font-lobster text-6xl text-center'>Payment</h2>
            <div className="overflow-x-auto">
                <table className="table w-96 mx-auto">
                    <tbody>
                        <tr>
                            <td className='col-span-2'>
                                <div className="avatar mx-auto">
                                    <div className="w-96 rounded ">
                                        <img src={img} alt={product_name} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>Product</th>
                            <td>{product_name}</td>
                        </tr>
                        <tr className="hover">
                            <th>Price</th>
                            <td>$ {price}</td>
                        </tr>
                        <tr className="hover">
                            <th>Buyer</th>
                            <td>{user_name}</td>
                        </tr>
                        <tr className="hover">
                            <th>Buyer Email</th>
                            <td>{user_email}</td>
                        </tr>
                        <tr className="hover">
                            <th>Phone</th>
                            <td>{phone}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="divider"> </div>
                <div className='w-96 my-12 border-2 border-sky-500 rounded-box place-items-center mx-auto p-4'>
                <Elements stripe={stripePromise} >
                    <CheckoutForm
                        booking={bookings}
                    />
                </Elements>
            </div>
               
            </div>
        </div>
    );
};

export default Payment;
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Booking from './Booking';

const Product = ({ product, productItem, setProductItem }) => {
      console.log(productItem);
    const { user, setLoading, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [booking, setBooking] = useState(true);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { _id, cat_name, cat_id, img, name, location, resale_price, original_price, used_years, posted_on, seller_name, verified,paid } = product;

    // const [verify, setVerify] = useState([]);
    // axios.get('https://share-knowledge-server-anita-mahmud.vercel.app/users')
    //     .then(verify => {
    //         setVerify(verify.data);
    //     });
    //     // console.log(verify);
    // const handleBook = data => {
    //     const booking = {
    //         user_name: user.displayName,
    //         user_email: user.email,
    //         product_id:_id,
    //         product_name: name,
    //         price: resale_price,
    //         phone: data.phone,
    //         location: location,
    //         img: img
    //     }
    //     // console.log(booking);
    //     fetch('https://share-knowledge-server-anita-mahmud.vercel.app/bookings', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.acknowledged) {

    //                 toast.success('Booking confirmed');


    //             }

    //         })

    // }
   
    const handleReport = id => {
        fetch(`https://share-knowledge-server-anita-mahmud.vercel.app/products/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Reported successful.')

                }
            })
    }


    return (
        <div>
           {!paid && <div className="card lg:card-side shadow-xl ">
                <figure><img src={img} alt={name} className='w-full h-96' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h5><span>Location:</span> {location}</h5>
                    <h5><span>Original Price:</span> {original_price} Taka</h5>
                    <h5><span>Resale Price:</span> {resale_price} Taka</h5>
                    <h5><span>Years of Use:</span> {used_years}</h5>
                    <h5><span>Posted On:</span> {posted_on}</h5>
                    <div className='flex items-center'>
                        <h5><span>Seller:</span> {seller_name}</h5>
                        {
                            verified ? <CheckBadgeIcon className='text-blue-500 w-6 ml-2'></CheckBadgeIcon> : ''
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <label htmlFor="book-modal" onClick={() => setProductItem(product)} className="btn btn-primary">Book Now</label>

                    </div>
                    {/* modal */}
                    {/* Put this part before </body> tag */}
                    {/* <input type="checkbox" id="book-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Booking </h3>
                            <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleSubmit(handleBook)}>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Buyer:</span>

                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={user?.displayName} readOnly />

                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Email:</span>

                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={user?.email} readOnly />

                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Item:</span>

                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={name} readOnly />

                                </div>
                                
                                <div className="modal-action">
                                    <input className='btn btn-info' type="submit" value="Submit" />

                                </div>
                            </form>
                        </div>
                    </div> */}
                    {
                        productItem && <Booking productItem={productItem} setProductItem={setProductItem}></Booking>
                    }
                    <div className='flex justify-end'>
                        <button className='btn btn-info' onClick={() => handleReport(_id)}>Report</button>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Product;
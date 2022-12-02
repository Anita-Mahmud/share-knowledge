import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Booking = ({ productItem, setProductItem }) => {
    const { user, setLoading, loading } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { _id, cat_name, cat_id, img, name, location, resale_price, original_price, used_years, posted_on, seller_name, verified } = productItem;
    const handleBook = data => {
        const booking = {
            user_name: user.displayName,
            user_email: user.email,
            product_id: _id,
            product_name: name,
            price: resale_price,
            phone: data.phone,
            location: location,
            img: img
        }
        // console.log(booking);
        fetch('https://share-knowledge-server-anita-mahmud.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking confirmed');
                    setProductItem(null)

                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Booking </h3>
                <form onSubmit={handleSubmit(handleBook)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Buyer:</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} readOnly />

                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email:</span>

                </label>
                <input type="text"  placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} readOnly />

            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Item:</span>

            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={name} readOnly />

        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Price:</span>

        </label>
        <input type="text"  placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={resale_price} readOnly />

    </div>
    <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone:</span>

                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  {...register("phone", {
                                        required: "Phone is required"
                                    })} />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Location:</span>

                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={location} />

                                </div>
                                <div className="modal-action">
                                    <input className='btn btn-info' type="submit" value="Submit" />

                                </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
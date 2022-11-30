import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Product = ({ product }) => {
    const { user,setLoading,loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [booking,setBooking] = useState(true);
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const { _id, cat_name, cat_id, img, name, location, resale_price, original_price, used_years, posted_on, seller_name, verified } = product;
   
    const handleBook = data => {
     
        const booking = {
            user_name: data.user_name,
            user_email: data.user_email,
            product_name: data.product_name,
            price: data.price,
            phone: data.phone,
            location: data.location,
            img: product.img
        }
        fetch('https://share-knowledge-server.vercel.ap/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    
                    toast.success('Booking confirmed');
                    reset()
                   
             
                }
                else {
                    toast.error(data.message);
                }
            })

    }
   const handleReport = product =>{
    fetch('https://share-knowledge-server.vercel.ap/report', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                    
                                toast.success('Reported Successfully');
                                
                               
                         
                            }
                        })
   }
   
    return (
        <div>
            <div className="card lg:card-side shadow-xl ">
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
                            verified ? <CheckBadgeIcon className='w-6 ml-2 text-blue-400'></CheckBadgeIcon> : ''
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <label htmlFor="book-modal" className="btn btn-primary">Book Now</label>

                    </div>
                    {/* modal */}
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="book-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Booking </h3>
                            <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleSubmit(handleBook)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Buyer:</span>

                                    </label>
                                    <input type="text" {...register("user_name")} placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} readOnly />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email:</span>

                                    </label>
                                    <input type="text" {...register("user_email")} placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.email} readOnly />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Item:</span>

                                    </label>
                                    <input type="text" {...register("product_name")} placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={name} readOnly />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Price:</span>

                                    </label>
                                    <input type="text" {...register("price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={resale_price} Taka readOnly />

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
                                    <input type="text" {...register("location")} placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={location} />

                                </div>
                                <div className="modal-action">
                               <input className='btn btn-info'  type="submit" value="Submit" />
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='btn btn-info' onClick={()=>handleReport(product)}>Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
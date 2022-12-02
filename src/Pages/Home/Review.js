import React from 'react';

const Review = () => {
    return (
        <div>
            <h2 className='font-lobster text-6xl italic text-center'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-md shadow-blue-500  my-10 mx-auto">
                    <div className="card-body mx-auto">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt="" />
                            </div>
                        </div>
                        <h2 className="card-title">Sushmita</h2>
                        <p>Their service is really good.Loved it.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md shadow-blue-500  my-10 mx-auto">
                    <div className="card-body mx-auto">
                        <div className="avatar placeholder">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <span className='text-3xl'>S</span>
                            </div>
                        </div>
                        <h2 className="card-title">Sushmit</h2>
                        <p>Thanks for your awesone service</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-md shadow-blue-500  my-10 mx-auto">
                    <div className="card-body mx-auto">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/195/195/people" alt="" />
                            </div>
                        </div>
                        <h2 className="card-title">Samin</h2>
                        <p>Best</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { signUp, updateUserProfile, loading } = useContext(AuthContext);
    const [signUpError, setsignUpError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    if (loading) {
        return <Loading></Loading>
    }
    const handleSignUp = data => {
        //SIGNUP
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/login');

            })
            .catch(error => {
                console.error(setsignUpError(error));

            });
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const profile = {
                        displayName: data.name,
                        photoURL: imgData.data.url
                    }
                    updateUserProfile(profile)
                        .then(() => { })
                        .catch(error => console.error(error))

                }
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="input input-bordered w-full " />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Account Type</span></label>
                        <select
                              {...register("type", {
                                required: "Account Type is required"
                            })}
                            className="select input-bordered w-full max-w-xs">

                            <option>Buyer</option>
                            <option>Seller</option>

                        </select>
                        {errors.type && <p className='text-red-600'>{errors.type?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password should be atleast 6 characters' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account?  <Link className='text-secondary' to="/login">Please Login</Link></p>

            </div>
        </div>
    );
};

export default Register;
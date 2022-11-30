import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const {user,loading}=useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [categories,setCategories] = useState([]);
    axios.get('http://localhost:5000/categories')
.then(categories => {
    setCategories(categories.data);
});
if(loading){
    return <Loading></Loading>
}
const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handleAdd = (data) => {
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
                    const product = {
                        cat_name: data.cat,
                        img: data.image,
                        name:data.product_name,
                        location:data.location,
                        resale_price:data.resale_price,
                        original_price:data.original_price,
                        used_years:data.year,
                        seller_name:user.displayName,



                    }
                    fetch('http://localhost:5000/products', {
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
                    
                    toast.success('Added');
                    reset();
                    navigate('/products');
                   
             
                }
                
            })
            }
            })
      
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <h2 className='font-lobster text-6xl text-center'>Add a Product</h2>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(handleAdd)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>

                        </label>
                        <input type="text" {...register("product_name")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price:</span>

                        </label>
                        <input type="text" {...register("original_price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale Price:</span>

                        </label>
                        <input type="text" {...register("resale_price")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone:</span>

                        </label>
                        <input type="text" {...register("phone")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>

                        </label>
                        <input type="text" {...register("location")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="input input-bordered w-full " />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Categoriey:</span>

                        </label>
                        <select {...register(cat)} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Choose</option>
                       {categories.map(cat=><option key={cat.cat_id} value={cat.cat_name}>{cat.cat_name}</option>) }
                     
                    </select>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description:</span>

                        </label>
                        <textarea className="textarea textarea-bordered w-full max-w-xs"  {...register("Description")} />

                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Years of Use:</span>

                        </label>
                        <input type="text" {...register("year")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div>
                        <button type="submit" className='btn btn-info my-4'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
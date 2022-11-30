import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';
import { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const url = `https://share-knowledge-server.vercel.ap/products?name=${user?.displayName}`;
    const { data: products = [],refetch,isLoading } = useQuery({
        queryKey: ['products', user?.displayName],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete = id =>{
        fetch(`https://share-knowledge-server.vercel.ap/products/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success('Deleted successfully')
            }
        })
    }
    const handleAdvertise = product =>{
        // console.log(product);
        fetch('https://share-knowledge-server.vercel.ap/advertise', {
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
                    
                                toast.success('Advertised Successfully');
                                
                               
                         
                            }
                        })
    }
    return (
        <div className='mx-36'>
        <Sidebar></Sidebar>
        <div>
            <h2 className='font-lobster text-6xl text-center'>My Products</h2>

            {products.length > 0 ?
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product?.img} alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.resale_price} Taka</td>
                                <td>{!product.paid ? 'Available':'Sold'} </td>
                                <td><button className='btn btn-info'onClick={()=>handleDelete(product._id)}>Delete</button></td>
                                <td>{!product.paid ?
                                <button className='btn btn-info' onClick={()=>handleAdvertise(product)}>Advertise</button>:''}</td>
                                </tr>
                            )}
                    </tbody>
                </table>

                : <h3 className='text-red-600 text-5xl text-center'>No Order</h3>}
        </div>

    </div>
    );
};

export default MyProducts;
import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Loading';
import Booking from './Booking';
import Product from './Product';

const Products = () => {
    const [productItem, setProductItem] = useState(null);
    const products = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state==='loading'){
      return <Loading></Loading>
    }
    return (
        <div className=''>
            <h2 className='font-lobster text-6xl text-center'>Products</h2>
            <div className='grid grid-cols-1 gap-10 mx-auto'>
                {
                    products.map(product => 
                    <Product
                        key={product._id} product={product}
                        productItem={productItem} setProductItem={setProductItem}
                    ></Product>
                    
                    )
                }
            </div>
           
        </div>
    );
};

export default Products;
import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';



const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    }, [products])

  return (
    <div className='my-10'>
        <div className= 'text-center py-8 text-3xl'>
            <Title text1={'Best'} text2={' Sellers'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our best sellers, the most popular and highly rated products that our customers love. From fashion to electronics, these top-selling items are a must-have for anyone looking for quality and style.
            </p>
        </div>

        <div className= 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default      BestSeller
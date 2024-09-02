import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({id, name, price, desc, rating, image, handleToast}) => {

  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg'>
        <img src={image} alt="fooditem" 
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'  />

        <div className='flex justify-between my-2'>
            <h2>{name}</h2>
            <span className='text-green-500'>₹{price}</span>
        </div>

        <p className='text-sm text-gray-700 my-2'>{desc.slice(0,50)}...</p>

        <div className='flex justify-between my-1'>
            <div>{rating}⭐</div>
            <button
              onClick={() => {
                dispatch(addToCart({id, name, price, rating, image, qty: 1}));
                handleToast(name)
              }}
             className='text-sm text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded-sm'>Add To Cart</button>
        </div>

    </div>
  )
}

export default FoodCard

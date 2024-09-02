import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Cart = () => {


  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);

  const totalQty = cartItems.reduce((total, item) => {
    return (total + item.qty)
  }, 0)

  const totalPrice = cartItems.reduce((total, item) => {
    return (total + (item.price*item.qty))
  }, 0)

  const[activeCart, setActiveCart] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}>
        <div className='flex justify-between'>
            <span className='text-lg font-bold text-green-400'>My Order</span>
            <MdClose onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300            hover:border-red-300 cursor-pointer" />
        </div>

        {
          cartItems.length > 0 ?
          cartItems.map((item) => {
            return <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty} />
          }):
          <h2 className='text-center text-2xl mt-3 text-gray-600'>Cart is Empty, Add Items to it</h2>
        }

        <div className='absolute bottom-0'>
            <h3 className='font-bold text-gray-800'>Item: {totalQty} </h3>
            <h3 className='font-bold text-gray-800'>Total Amount: {totalPrice} </h3>
            <hr className="w-[90vw] lg:w-[18vw] my-2" />
            <button onClick={() => navigate("/success")}
             className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
      </div>

      <IoCartSharp onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-1 cursor-pointer hover:bg-green-400 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `} />

    </>
  )
}

export default Cart

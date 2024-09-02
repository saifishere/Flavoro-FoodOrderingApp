import React, { useEffect, useState } from 'react'
import {PropagateLoader} from 'react-spinners'
const Success = () => {

  const[loading , setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
      {loading ? <PropagateLoader color="#57eb0d" /> :
        <div>
          <h2 className='text-3xl text-green-600 font-bold text-center'>Order Successfull !</h2>
          <p className='text-xl text-green-500 font-semibold'>Your order has been Successfully placed.</p>
        </div>
      }
    </div>
  )
}

export default Success

import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice';
const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
      <div className=''>
        <div className='text-xl font-bold text-green-400'>
            The taste of India
        </div>
        <div className='text-2xl font-extrabold text-green-600'>
            Flavoro Foods
        </div>
      </div>
      <div>
        <input onChange={(e) => dispatch(setSearch(e.target.value))}
        type='search' name='search' autoComplete="off" placeholder='Search Here' className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
      </div>
    </nav>
  )
}

export default Navbar

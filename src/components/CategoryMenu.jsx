import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
const CategoryMenu = () => {

  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const unique = [...new Set(FoodData.map((food) => food.category))]
    setCategories(unique);
  //  console.log(unique);
  }

  useEffect(() => {
    listUniqueCategories();
  }, [])


  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.category.category);

  return (
    <div className='mx-6'>
      <h3 className='text-xl font-semibold text-green-400'>Find The Best Food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={() => dispatch(setCategory("All"))}
        className={`px-5 py-2 font-bold bg-gray-300 rounded-lg hover:bg-green-400 hover:text-white
          ${selectedCategory === 'All' && "bg-green-400 text-white" }`
        }>
            All
        </button>
        {categories.map((category, index) => {
          return <button onClick={() => dispatch(setCategory(category))}
             key={index} className={`px-5 py-2 font-bold bg-gray-300 rounded-lg hover:bg-green-400 hover:text-white
              ${selectedCategory === category && "bg-green-400 text-white"}    `
             }>
            {category}
          </button>
        })}
      </div>
    </div>
  )
}

export default CategoryMenu

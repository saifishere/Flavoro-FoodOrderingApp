import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {


  const handleToast = (name) => {
    toast.success(`${name} Added To Cart`)
  }

  const category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  return (
    <>

      <Toaster position='top-center' reverseOrder={false} />

      <div className='flex flex-wrap mx-4 justify-center lg:justify-between gap-9 my-9 pr-11 pl-3'>

        {FoodData.filter((item) => {
          if(category === 'All'){
            return item.name.toLowerCase().includes(search.toLowerCase());
          }
          else{
            return item.category === category && item.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((item) => {
            return <FoodCard 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                desc={item.desc}
                rating={item.rating}
                image={item.img}
                handleToast={handleToast}
                />
        })}

      </div>
    </>
  )
}

export default FoodItems

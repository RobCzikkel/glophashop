import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/wishSlice';

export default function WishItem({ item }) {

  const dispatch = useDispatch()

const remove = (e) => {
  e.preventDefault();
  dispatch(removeItem(item.id))
}

  return (
    <div className='flex flex-row lg:justify-between justify-around lg:w-10/12 w-full bg-white'>
        <div className='w-24 h-24 bg-center bg-no-repeat bg-cover brightness-125 contrast-110' style={{backgroundImage: `url('https://glopha.s3.eu-west-2.amazonaws.com/products/${item.image}')`}}></div>
        <div className='flex flex-col w-2/4 items-end px-1 py-2'>
            <h4 className='text-slate-700 text-md font-semibold'>{item.name}</h4>
            <p className='text-sm'>{item.packaging}</p>
            <p className='text-xs text-gray-500'>{item.size}</p>
            <button onClick={remove} className='bg-pink-800 mt-2 rounded-md duration-300 hover:scale-110 text-white px-2 py-1 text-xs'>Delete</button>
        </div>
    </div>
  )
}

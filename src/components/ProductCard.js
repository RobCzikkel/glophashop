import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/wishSlice';


import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';


export default function ProductCard({ product, id, itemIDX }) {

  const dispatch = useDispatch();

  const handlePlus = (e) => {
    e.preventDefault();
    dispatch(addItem({product, id}));
  }

  const handleMinus = (e) => {
    e.preventDefault()
    dispatch(removeItem(id))
  }

  const checkID = (id) => {
    return itemIDX.includes(id);
  }


  return (
    <div className='lg:w-[250px] w-2/5 relative mb-10 shadow-lg  hover:scale-105 transition-transform duration-250'>
        <Link to=''><div className='w-full h-[250px] bg-center bg-no-repeat bg-cover brightness-125 contrast-110 rounded-t-md' style={{backgroundImage: `url('https://glopha.s3.eu-west-2.amazonaws.com/products/${product.image}')`}}>
        </div></Link>
        <div className='flex flex-col w-full h-fit justify-start items-start px-1 py-4 text-left'>
            <h4 className='text-lg text-slate-800 font-semibold'>{product.name}</h4>
            <p className='text-sm text-gray-600'>{product.packaging} - <span className=''>{product.size}</span></p>
            <p className='mt-3 text-sm text-gray-800'>{product.short}</p>
            <div className='self-end'>
               {!checkID(id) ? <IconButton onClick={handlePlus}><AddCircleIcon sx={{ color: "black" }}/></IconButton> :
               <IconButton onClick={handleMinus}><RemoveCircleIcon sx={{ color: "black" }}/></IconButton>}
            </div>
        </div>
        
    </div>
  )
}


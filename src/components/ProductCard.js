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
    <div className='md:w-[250px] sm:w-[180px] xs:w-5/12 w-8/12 relative mb-10 shadow-lg  hover:scale-105 transition-transform duration-250'>
        <Link to={`/${id}`}><div className='w-full h-[150px] md:h-[250px] bg-center bg-no-repeat bg-cover brightness-125 contrast-110 rounded-t-md' style={{backgroundImage: `url('https://glopha.s3.eu-west-2.amazonaws.com/products/${product.image}')`}}>
        </div></Link>
        <div className='w-full h-36 md:h-40 px-1 py-2 md:py-4 text-left relative'>
            <div className=' flex flex-col w-full h-fit justify-between items-start'>
              <h4 className='text-base md:text-lg text-slate-800 font-semibold leading-5 '>{product.name}</h4>
              <p className='text-xs md:text-sm text-gray-600'>{product.packaging} - <span className=''>{product.size}</span></p>
              <p className='mt-3 text-[0.7em] md:text-xs lg:text-sm text-gray-800'>{product.short}</p>
            </div>
              
            <div className='absolute bottom-1 right-1'>
               {!checkID(id) ? <IconButton onClick={handlePlus}><AddCircleIcon sx={{ color: "black" }}/></IconButton> :
               <IconButton onClick={handleMinus}><RemoveCircleIcon sx={{ color: "black" }}/></IconButton>}
            </div>
        </div>
        
    </div>
  )
}


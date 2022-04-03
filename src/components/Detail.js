import React from 'react';
import { useParams, Link } from 'react-router-dom';
import db from '../app/db';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/wishSlice';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Detail() {

  const itemIDX = useSelector((state) => state.wishlist.items.map(item => item.id));
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id)
  const product = db[id];

  const checkID = (id) => {
    return itemIDX.includes(id);
  }

  return (
    <div className='2xl:w-7/12 lg:w-10/12 w-full m-auto lg:pt-32 pt-20'>
      {/* Breadcrumbs */}
      <div className='md:w-full w-11/12 mb-4 m-auto flex flex-row flex-wrap justify-start items-center p-4 md:text-base text-sm gap-2 uppercase text-cyan-500'>
        <Link to="/" className='hover:text-slate-700'>PRODUCTS</Link>
        <ArrowForwardIosIcon fontSize="16px" sx={{ color: "gray" }}/>
        <p>{product.cat}</p>
        <ArrowForwardIosIcon fontSize="16px" sx={{ color: "gray" }}/>
        <p className='text-cyan-800'>{product.name}</p>
      </div>
      {/* Product */}
      <div className='w-full h-fit flex md:flex-row flex-col justify-between md:items-start items-center gap-4 p-4'>
        <div className='w-11/12 md:w-5/12 h-[22em] sm:h-[28em] bg-center bg-no-repeat bg-cover brightness-125 contrast-110 hover:opacity-80' style={{backgroundImage: `url('https://glopha.s3.eu-west-2.amazonaws.com/products/${product.image}')`}}></div>
        <div className='w-11/12 md:w-6/12 flex flex-col items-start text-left'>
          <h2 className='text-slate-700 text-3xl uppercase font-semibold mb-4'>{product.name}</h2>
          <h4 className='text-blue-600'>{product.packaging}</h4>
          <h6 className='text-xs mb-6'>{product.size}</h6>
          <p className='text-gray-600 text-sm leading-5 mb-8'>{product.desc}</p>
          {!checkID(id) ? <button onClick={() => dispatch(addItem({product, id}))} className='rounded-md p-2 bg-blue-600 text-white hover:scale-110 transition-transform duration-200 active:bg-blue-500'>Add to wishlist</button> 
          : <button onClick={() => dispatch(removeItem(id))} className='rounded-md p-2 bg-pink-800 text-white hover:scale-110 transition-transform duration-200 active:bg-pink-600'>Remove from wishlist</button>}
        </div>
      </div>
    </div>
  )
}

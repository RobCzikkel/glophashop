import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard() {

  return (
    <div className='w-1/4 overflow-hidden relative'>
        <Link to=''><div className='relative w-full h-[300px] bg-center bg-no-repeat bg-cover brightness-125 contrast-110 rounded-md' style={{backgroundImage: "url('https://glopha.s3.eu-west-2.amazonaws.com/products/photo1.jpeg')"}}>
        </div></Link>
        <div className='flex flex-col w-full h-[100px] justify-start items-start px-1 py-4'>
            <h4 className='text-xl text-slate-800 font-normal'>Kamagra</h4>
            <p className='text-sm text-gray-600'>Tablet/<span className=''>100mg</span></p>
            <p className='mt-3 text-sm text-zinc-500'>For erectile dysfunction</p>
        </div>
        <div className='absolute bottom-12 right-0'>
            <IconButton><FavoriteBorderIcon sx={{ color: "black" }}/></IconButton>
        </div>
    </div>
  )
}


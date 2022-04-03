import React from 'react';
import { useState, useEffect } from 'react';
import WishItem from '../components/WishItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Modal from '@mui/material/Modal';
import ContactForm from '../components/ContactForm';
import Confirmation from '../components/Confirmation';
import { setSent } from './globalSlice';

export default function Wish() {

  const wishList = useSelector((state) => state.wishlist.items);
  const sent = useSelector((state) => state.global.sent);
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    let delay
    if(sent) {
      delay = setTimeout(() => {
        dispatch(setSent(false))
        setOpen(false)
      }, 2000);
    }

    return () => {
      clearTimeout(delay)
    }
  }, [sent, dispatch])

  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };
  
  return (
    <div className='2xl:w-7/12 xl:w-9/12 w-full m-auto'>
      {/* Main */}
      <section className='w-full flex flex-col pt-16 px-2'>
        <h3 className='lg:text-left text-center lg:text-6xl text-5xl text-slate-700 font-bold'><span className='font-normal'>Currently</span> in <br/><span className='text-blue-600 lg:text-8xl text-7xl'>your</span><span className='text-4xl font-normal block md:inline'>wishlist:</span></h3>
        
        {/* 2 Columns */}
        <div className='w-full h-fit pt-16 flex lg:flex-row flex-col lg:justify-between items-center px-2'>
          {/* Items Column*/}
          <div className='flex flex-col lg:w-7/12 w-full gap-6 mb-8'>
            {/* Empty List */}
            {wishList.length === 0 && 
            <div className='flex flex-col items-center gap-4'>
              <h2 className='text-2xl'>Your list is empty</h2>
              <Link to="/" className="py-2 w-30 px-4 bg-blue-600 rounded-lg duration-300 hover:scale-110 text-white text-sm">Add products</Link>
            </div>}
            {/* Items List */}
            {wishList.map(item => {
              return <WishItem key={item.name} item={item}/>
            })}
          </div>
          {/* Email box */}
            {wishList.length !== 0 && <div className='lg:w-4/12 w-full h-96 flex flex-col items-center justify-start gap-8'>
              <div className='bg-slate-700 p-6 rounded-md shrink-0'>
                <p className='lg:text-left text-center lg:text-4xl text-3xl text-white font-bold'>Send us <br/><span className='text-blue-600 lg:text-6xl text-4xl'>your</span> wishlist</p>
              </div>
              <div className='bg-slate-700 text-white rounded-full animate-bounce'><ArrowDownwardIcon fontSize='large'/></div>
              {/* <Link to="/contact" className="py-2 w-30 px-4 bg-pink-800 rounded-lg duration-300 hover:scale-110 text-white text-lg">Send List</Link> */}
              <button onClick={handleOpen} className="py-2 w-30 px-4 bg-pink-800 rounded-lg duration-300 hover:scale-110 text-white text-lg">Send List</button>
            </div>}
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className='pt-24 xl:w-4/12 lg:w-6/12 md:w-8/12 w-11/12 m-auto flex flex-row justify-center h-fit'>
            {!sent ? <ContactForm /> : <Confirmation />}
          </div>
      </Modal>
    </div>


  )
}

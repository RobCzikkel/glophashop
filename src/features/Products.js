import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ProductCard from '../components/ProductCard';
import products from '../app/db';




export default function Products() {

  const itemIDX = useSelector((state) => state.wishlist.items.map(item => item.id))
  
  return (
    <div className='2xl:w-7/12 xl:w-9/12 w-full m-auto flex flex-col'>
      {/* Hero */}
      <section className='pt-12 pb-10 px-4 w-full flex md:flex-row flex-col xl:justify-between gap-4 md:justify-evenly items-center bg-auto bg-no-repeat bg-center' style={{backgroundImage: "url('https://glopha.s3.eu-west-2.amazonaws.com/products/caps.png')"}}>
       
        {/* Left div */}
        <div className='md:w-5/12 w-8/12 h-[450px] flex flex-col gap-2 md:justify-start md:items-start justify-center items-center bg-white md:bg-transparent'>
          <h1 className='md:text-left text-center lg:text-6xl text-5xl text-slate-700 font-bold'>Our <span className='text-blue-600 lg:text-8xl text-7xl'>Products</span><span>.</span></h1>
          <p className='md:text-2xl text-xl md:text-left text-center text-slate-900 font-light'>Browse our current catalogue below</p>
          <small className='md:text-left text-slate-600 font-thin'>(We update our stock quite frequently, so make sure to check back regurarly)</small>
          
          <p className='text-blue-600 text-3xl font-semibold mt-4'>Not sure which one?</p>
          <p className='font-light text-sm'>Give us a shout and we'll help you decide</p>
          <Link to="contact" className="md:py-4 py-2 w-7/12 md:w-1/2 px-6 bg-blue-600 rounded-lg duration-300 hover:scale-110 text-white"><button>Contact us</button></Link>
        </div>

        {/* Right div */}
        <div className='md:w-[300px] w-10/12 h-auto text-white rounded-md bg-slate-800 opacity-80 p-4 flex flex-col items-start'>
          <h3 className='text-left text-4xl mb-4'>How to <span className='text-blue-500'>order</span> from us?</h3>
          <div className='flex flex-col w-full gap-2'>
              <div className='w-full flex flex-row justify-start text-sm gap-4 items-center'>
                <ScreenSearchDesktopOutlinedIcon />
                <p className='text-left leading-8'>Browse through our products</p>
              </div>
              <div className='w-full flex flex-row justify-start text-sm gap-4 items-center'>
                <AddCircleIcon />
                <p className='text-left leading-8'>Add products to your wishlist</p>
              </div>
              <div className='w-full flex flex-row justify-start text-sm gap-4 items-center'>
                <AttachEmailIcon />
                <p className='text-left leading-4'>Send us your wishlist along your contact details</p>
              </div>
              <div className='w-full flex flex-row justify-start text-sm gap-4 items-center'>
                <ContactMailIcon />
                <p className='text-left text-pink-300 leading-4'>We'll get in touch</p>
              </div>
          </div>
        </div>
      </section>
      <br/>

      {/* Products */}
      <section className='w-full h-fit'>
        <div className='w-full flex flex-row flex-wrap gap-1 sm:gap-3 justify-around p-2'>
          
          {Object.keys(products).map((key) => {
            const product = products[key];
            return <ProductCard key={key} id={key} product={product} itemIDX={itemIDX}/>
          })}

        </div>
      </section>
    </div>
  )
}

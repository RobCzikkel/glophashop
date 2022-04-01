import { useSelect } from '@mui/base';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Contact() {

  const wishList = useSelector((state) => state.wishlist.items);

  // Form data
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [wait, setWait] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()
    

    setFirst('');
    setLast('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='2xl:w-7/12 xl:w-9/12 w-full m-auto'>
      <section className='w-full flex flex-col items-center pt-16 px-2 gap-8'>
        {/* Info */}
        <div className='text-center w-2/4 flex flex-col justify-center items-center'>
          <h5 className='uppercase text-blue-600'>Questions?</h5>
          <h1 className='md:text-6xl text-5xl text-slate-700 font-extrabold my-8 leading-7 text-center'>Get in <br/><span className='text-blue-600 md:text-8xl text-7xl'>touch</span><small>with</small><br/> us</h1>
          <p className='text-xs'>Perhaps you have questions about our products, or the <span className='text-pink-800 font-semibold'>delivery options</span>. Maybe you just need some <span className='text-pink-800 font-semibold'>advice</span>. Whatever the case is, we are here to help</p>
        </div>

        {/* Form */}
        <div className='rounded-md shadow-lg shadow-gray-400 py-2 bg-blue-600 w-3/4 sm:w-96 h-fit my-8'>
          <form onSubmit={submitHandler} className='w-full p-4 flex flex-col gap-4'>
            <div className='flex flex-row w-full gap-2'>
              <div className='text-left'>
                <label className='labelStyle' htmlFor="first">Your first...</label>
                <input className='inputFields w-full'
                id="first"
                type="text"
                placeholder=""
                name="first"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                minLength="1"
                >
                </input>
              </div>
              <div className='text-left'>
                <label className='labelStyle' htmlFor="last">...and last name</label>
                <input className='inputFields w-full'
                id="last"
                type="text"
                placeholder=""
                name="last"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                >
                </input>
              </div>
            </div>
            <div className='flex flex-col items-start w-full'>
              <label className='labelStyle' htmlFor="email">Your email</label>
              <input className='inputFields w-full placeholder:text-neutral-700'
              id="email"
              type="email"
              placeholder="required"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required>
              </input>
            </div>
            <div className='flex flex-col items-start w-full'>
              <label className='labelStyle' htmlFor="message">How can we help? <small className='text-slate-200 font-thin'> {`  ${500 - message.length}`}</small></label>
              <textarea className='h-48 rounded-md w-full mt-2 p-2 text-slate-800 text-sm'
              id="message"
              placeholder=""
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength="500"/>
              
            </div>
            {wishList.length !== 0 && <div className='w-full mb-2'>
                <h5 className='text-white uppercase text-sm font-semibold text-left mb-2'>Wishlist:</h5>
                <div className='flex flex-col gap-2 items-start'>
                  {wishList.map(item => {
                    return (
                      <small className='bg-white p-1 text-gray-700 text-xs font-normal rounded-md'>{item.name}</small>
                    )
                  })}
                </div>
              </div>}
              <input className="w-1/2 self-center p-2 rounded-md text-white bg-fuchsia-700 ring-2 ring-white hover:scale-110 transition-transform duration-200 active:bg-fuchsia-500" type="submit" value="Send email"></input>
          </form>
        </div>
      </section>
    </div>
  )
}

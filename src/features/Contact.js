import React from 'react';
import { useState } from 'react';
import { clearList } from './wishSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RotateRightIcon from '@mui/icons-material/RotateRight';


export default function Contact() {

  const wishList = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();


  // Form data
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [AWSResp, setAWSResp] = useState('')

  const [wait, setWait] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false)

  const submitHandler = async(e) => {
    e.preventDefault()
    setWait(true);
    const response = await fetch('https://pta948hgp0.execute-api.eu-west-2.amazonaws.com/dev/send_email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first: first,
        last: last,
        email: email,
        message: message,
        wishlist: wishList.length > 0 ? wishList.map(item => item.name) : ''
      })
    });

    if (response.ok) {
      setAWSResp("We'll get back to you");
      dispatch(clearList())
    };
    if (!response.ok) {
      setAWSResp('Ooops, something went wrong. Let us look into it!')
      setError(true)
    };
    setSent(true);
    setWait(false);
    

    setFirst('');
    setLast('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='2xl:w-7/12 xl:w-9/12 w-full m-auto'> 

      {!sent && <section className='w-full flex lg:flex-row flex-col justify-around items-center pt-16 px-2 gap-8'>
        {/* Info */}
        <div className='text-center md:w-1/4 w-3/4 flex flex-col justify-center items-center'>
          <h5 className='uppercase text-blue-600'>Questions?</h5>
          <h1 className='md:text-6xl text-5xl text-slate-700 font-extrabold my-8 leading-7 text-center'>Get in <br/><span className='text-blue-600 md:text-8xl text-7xl'>touch</span><small>with</small><br/> us</h1>
          <p className='text-xs'>Perhaps you have questions about our products, or the <span className='text-pink-800 font-semibold'>delivery options</span>. Maybe you just need some <span className='text-pink-800 font-semibold'>advice</span>. Whatever the case is, we are here to help</p>
        </div>

        {/* Form */}
        <div className='rounded-bl-3xl rounded-br-[170px] rounded-tl-[120px] rounded-tr-[50px] shadow-lg shadow-gray-400 bg-blue-600  p-6 w-full sm:w-[500px] h-fit my-8 bg-no-repeat bg-center bg-cover'>
          <form onSubmit={submitHandler} className='w-full p-6 flex flex-col gap-4'>
            <div className='flex flex-row w-full gap-2'>
              <div className='text-left'>
                <label className='labelStyle' htmlFor="first">Your first</label>
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
                <label className='labelStyle' htmlFor="last">and last name</label>
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
                      <small key={item.name} className='bg-white p-1 text-gray-700 text-xs font-normal rounded-md'>{item.name}</small>
                    )
                  })}
                </div>
              </div>}
              {!wait ? <input className="w-fit self-center p-2 rounded-md text-white bg-fuchsia-700 ring-2 ring-white hover:scale-110 transition-transform duration-200 active:bg-fuchsia-500" 
              type="submit" value="Send email"></input>
              : <button className="w-fit self-center p-1 rounded-md text-white text-3xl bg-fuchsia-700 ring-2 ring-white hover:scale-110 transition-transform duration-200 active:bg-fuchsia-500" 
              type="submit" value="Send email"><RotateRightIcon fontSize="inherit" className='animate-spin'/></button>}
          </form>
        </div>
      </section>}
      {sent && <section className='w-full flex flex-col justify-center items-center pt-16 px-2 gap-10'>
                  <div className={!error ? `success` : `failure`}>
                    <h3 className='font-semibold text-center text-5xl py-6'>{AWSResp}</h3>
                    <p className='mb-6 text-sm'>In the meantime, you can continue to browse our catalogue</p>
                    <Link to="/" className='w-fit m-auto block py-2 px-4 rounded-md bg-blue-600 text-white ring-2 ring-white hover:scale-105 transition-transform duration-200 active:bg-blue-500'>See more products</Link>
                  </div>
                  <div className=' w-2/4 h-fit p-4'>
                    <h5 className='mb-6 uppercase text-pink-700'>{!error ? 'Forgot something?' : 'Care to try again?'}</h5>
                    <p className='mb-6 text-sm'>Send us another email</p>
                    <button onClick={() => setSent(false)} className='w-fit m-auto block py-2 px-4 rounded-md bg-pink-800 text-white ring-2 ring-white hover:scale-105 transition-transform duration-200 active:bg-pink-700'>Contact us</button>
                  </div>
        </section>}
    </div>
  )
}

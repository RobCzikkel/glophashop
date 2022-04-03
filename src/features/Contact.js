import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSent } from './globalSlice';
import ContactForm from '../components/ContactForm';
import Confirmation from '../components/Confirmation';


export default function Contact() {

  const dispatch = useDispatch();

  // Using redux
  const sent = useSelector((state) => state.global.sent);
  const error = useSelector((state) => state.global.error);

  // Form data
  // const [first, setFirst] = useState('');
  // const [last, setLast] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [AWSResp, setAWSResp] = useState('')

  // const [wait, setWait] = useState(false);
  // const [sent, setSent] = useState(false);
  // const [error, setError] = useState(false)

  // const submitHandler = async(e) => {
  //   e.preventDefault()
  //   setWait(true);
  //   const response = await fetch('https://pta948hgp0.execute-api.eu-west-2.amazonaws.com/dev/send_email', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       first: first,
  //       last: last,
  //       email: email,
  //       message: message,
  //       wishlist: wishList.length > 0 ? wishList.map(item => item.name) : ''
  //     })
  //   });

  //   if (response.ok) {
  //     setAWSResp("We'll get back to you");
  //     dispatch(clearList())
  //   };
  //   if (!response.ok) {
  //     setAWSResp('Ooops, something went wrong. Let us look into it!')
  //     setError(true)
  //   };
  //   setSent(true);
  //   setWait(false);
    

  //   setFirst('');
  //   setLast('');
  //   setEmail('');
  //   setMessage('');
  // }

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
        <ContactForm />
        
      </section>}
      {sent && <Confirmation children={<div className=' w-2/4 h-fit p-4'>
                <h5 className='mb-6 uppercase text-pink-700'>{!error ? 'Forgot something?' : 'Care to try again?'}</h5>
                <p className='mb-6 text-sm'>Send us another email</p>
                <button onClick={() => dispatch(setSent(false))} className='w-fit m-auto block py-2 px-4 rounded-md bg-pink-800 text-white ring-2 ring-white hover:scale-105 transition-transform duration-200 active:bg-pink-700'>Contact us</button>
            </div>}/>}
    </div>
  )
}

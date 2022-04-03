import React from 'react';
import { useState } from 'react';
import { clearList } from '../features/wishSlice';
import { setWait, setError, setSent, setAWSResp } from '../features/globalSlice'
import { useSelector, useDispatch } from 'react-redux';
import RotateRightIcon from '@mui/icons-material/RotateRight';


export default function ContactForm() {

    const wishList = useSelector((state) => state.wishlist.items);
    const wait = useSelector((state) => state.global.wait);
    const dispatch = useDispatch();

 
    // Form data
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const submitHandler = async(e) => {
        e.preventDefault()
        dispatch(setWait(true));
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
            dispatch(setAWSResp("We'll get back to you"));
            dispatch(clearList())
        };
        if (!response.ok) {
            dispatch(setAWSResp('Ooops, something went wrong. Let us look into it!'));
            dispatch(setError(true));
        };
        dispatch(setSent(true));
        dispatch(setWait(false));
        

        setFirst('');
        setLast('');
        setEmail('');
        setMessage('');
    }
  
    return (
        <div className='rounded-bl-[50px] rounded-br-[160px] rounded-tl-[100px] rounded-tr-[50px] shadow-lg shadow-gray-600 bg-blue-600 p-6 w-11/12 sm:w-[500px] h-fit my-8 bg-no-repeat bg-center bg-cover'>
            <form onSubmit={submitHandler} className='w-full sm:p-6 p-2 flex flex-col sm:gap-4 gap-2'>
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
                <textarea className='sm:h-48 h-40 rounded-md w-full my-2 p-2 text-slate-800 text-sm'
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
                : <button className="w-20 self-center p-1 rounded-md text-white text-3xl bg-fuchsia-700 ring-2 ring-white hover:scale-110 transition-transform duration-200 active:bg-fuchsia-500" 
                type="submit" value="Send email"><RotateRightIcon fontSize="inherit" className='animate-spin'/></button>}
            </form>
        </div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSent } from '../features/globalSlice';

export default function Confirmation({ children }) {

    const dispatch = useDispatch();

    const AWSResp = useSelector((state) => state.global.AWSResp);
    const error = useSelector((state) => state.global.error);

    return (
        <section className='w-full flex flex-col justify-center items-center pt-16 px-2 gap-10'>
            <div className={!error ? `success` : `failure`}>
                <h3 className='font-semibold text-center text-5xl py-6'>{AWSResp}</h3>
                <p className='mb-6 text-sm'>In the meantime, you can continue to browse our catalogue</p>
                <Link to="/" className='w-fit m-auto block py-2 px-4 rounded-md bg-blue-600 text-white ring-2 ring-white hover:scale-105 transition-transform duration-200 active:bg-blue-500'>See more products</Link>
            </div>
            {children}
        </section>
    )
}

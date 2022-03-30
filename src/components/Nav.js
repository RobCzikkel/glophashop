import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() {

    const wishlist = useSelector((state) => state.wishlist.items);

    useEffect(() => {
        const burger = document.querySelector('#burger');
        const menu = document.querySelector('#burgerMenu');
        burger.addEventListener('click', () => {
            menu.classList.remove('-translate-y-full')
      })
        menu.addEventListener('click', () => {
            menu.classList.add('-translate-y-full')
        })
    }, [])
    
    const activeClassName = 'activeLink'
    
  return (
    <header className="bg-slate-800 sticky top-0 z-10">
        <nav className="2xl:w-7/12 xl:w-9/12 w-full m-auto flex flex-row justify-between items-center">
            {/* Logo */}
            <div id="logo" className="md:w-28 w-24 px-2 hover:scale-105 transition-transform duration-200">
                <a href="http://www.globalpharmacies.co.uk" target="_self"><img src="https://glopha.s3.eu-west-2.amazonaws.com/landing/logo-light.png" alt="logo"/></a>
            </div>
            {/* Pill */}
            <NavLink to="wishlist">
                <div className="md:w-[30px] w-[25px] h-full relative hover:scale-105 transition-transform duration-200">
                    <img className="relative top-1 right-3" src="https://glopha.s3.eu-west-2.amazonaws.com/landing/pill.png" alt="pill"/>
                    {wishlist.length > 0 && <small className="absolute outline-white top-0 right-0 bg-red-600 rounded-full text-white md:text-[10px] text-[9px] px-2 py-1">{wishlist.length}</small>}
                </div>
            </NavLink>
            {/* Links */}
            <div className="text-md text-white hidden md:block px-2 w-[200px]">
                <ul className="flex flex-row">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : undefined}><li className="md:py-1 h-1/2 rounded-md py-1 px-2">PRODUCTS</li></NavLink>
                    <NavLink to='contact' className={({ isActive }) => isActive ? activeClassName : undefined}><li className="md:py-1 h-1/2 rounded-md py-1 px-2">CONTACT</li></NavLink>
                </ul>
            </div>

            {/* Burger button */}
            <div id="burger" className="md:hidden w-[50px] h-[40px] flex flex-col justify-evenly items-end px-2">
                <div className="h-[2px] w-full bg-white"></div>
                <div className="h-[2px] w-3/4 bg-white"></div>
                <div className="h-[2px] w-1/2 bg-white"></div>
            </div>
        </nav>

        {/* Burger menu */}
        <div id="burgerMenu" className='absolute top-0 -translate-y-full transtion-all duration-1000 right-0 bg-gray-800 h-screen w-screen text-white z-20'>
            <div id="cross" className="relative float-right w-[40px] h-[40px] px-2 ">
                <div className="h-[2px] absolute top-8 right-2 w-full rotate-45 bg-white"></div>
                <div className="h-[2px] absolute top-8 right-2 w-full -rotate-45 bg-white"></div>
            </div>
            <div className='h-full w-1/2 m-auto flex flex-col items-center justify-center'>
                <img className="w-1/2 mb-28 justify-self-start" src="https://glopha.s3.eu-west-2.amazonaws.com/landing/logo-light.png" alt="logo"/>
                <ul className="text-2xl flex flex-col">
                    <a href="https://www.globalpharmacies.co.uk" target="_self"><li className="h-1/2  rounded-md py-2 px-2">HOME</li></a>
                    <NavLink to='/'><li className="h-1/2 rounded-md py-2 px-2">PRODUCTS</li></NavLink>
                    <NavLink to='contact'><li className="h-1/2 rounded-md py-2 px-2">CONTACT</li></NavLink>
                </ul>
            </div>
        </div>
    </header>
  )
}

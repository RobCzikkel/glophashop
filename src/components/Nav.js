import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const activeClassName = 'activeLink'
    
  return (
    <header className="bg-slate-800">
        <nav className="xl:w-7/12 w-full m-auto flex flex-row justify-between items-center">
            <div id="logo" className="md:w-28 w-24 px-2">
                <img src="https://glopha.s3.eu-west-2.amazonaws.com/landing/logo-light.png" alt="logo"/>
            </div>
            <div className="text-lg text-white">
                <ul className="flex flex-row">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : undefined}><li className="md:py-1 h-1/2 rounded-md py-1 px-2">PRODUCTS</li></NavLink>
                    <NavLink to='contact' className={({ isActive }) => isActive ? activeClassName : undefined}><li className="md:py-1 h-1/2 rounded-md py-1 px-2">CONTACT</li></NavLink>
                </ul>
            </div>
        </nav>
    </header>
  )
}

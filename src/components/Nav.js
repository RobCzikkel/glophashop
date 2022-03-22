import React from 'react';

export default function Nav() {
    
  return (
    <header>
        <nav className="xl:w-7/12 w-full m-auto flex flex-row justify-between items-center">
            <div id="logo" className="md:w-28 w-24 px-2">
                <img src="https://glopha.s3.eu-west-2.amazonaws.com/landing/logo.png" alt="logo"/>
            </div>
            <div className="text-xl text-gray-700"><i class="fa-regular fa-badge-check"></i>
                <ul className="flex flex-row">
                    <li className="py-10 px-2 hvr-underline-from-center">PRODUCTS</li>
                    <li className="py-10 px-2 hvr-underline-from-center">CONTACT</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

import React from 'react'
import {social} from '../data'
import Logo from "../assets/img/Logo-Ema-1.png";

const Footer = () => {
  return (
    <footer id='footer' className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className="flex flex'col lg:flex row space-x-6 lg:space-y-0 items-center justify-between">
                {/* SOCIAL ICONS */}
                <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index)=> {
                        const {href, icon} = item
                        return (
                            <a className='text-accent text-base' target='_blank' href={href} key={index}>{icon}</a>
                        )
                    })}
                </div>
                {/* COPYRIGHT */}
                <p>&copy; 2023 Emanuel Martinez. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer
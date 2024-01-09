import React from 'react'
import {social} from '../data'

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index)=> {
        return (
          <li key={index} className='flex justify-center items-center text-accent'>
            <a className='text-base' target='_blank' rel="noopener noreferrer" href={item.href}>{item.icon}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Socials
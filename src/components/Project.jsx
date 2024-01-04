import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='rounded-lg flex flex-col items-center text-center'>
        <p className='capitalize text-accent text-lg mb-3'>{item.category}</p>
        <div className='mb-8 '>
          <img className='rounded-xl min-h-[200px] object-cover' src={item.image} alt="" />
        </div>
        <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
        <p className='subtitle px-4'>{item.description}</p>
        <a href={item.href} className='btn py-4'>{item.icon}</a>
    </div>
  )
}

export default Project 




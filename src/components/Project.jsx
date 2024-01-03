/* import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='rounded-lg flex flex-col items-center text-center'>
        <p className='capitalize text-accent text-lg mb-3'>{item.category}</p>
        <div className='mb-8'>
          <img className='rounded-xl' src={item.image} alt="" />
        </div>
        <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
        <p className='subtitle px-4'>{item.description}</p>
        <a href={item.href} className='btn py-4'>{item.icon}</a>
    </div>
  )
}

export default Project */

import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="rounded-lg overflow-hidden shadow-lg bg-tertiary"
    >
      <div className="text-center p-6">
        {/* <p className="text-lg text-gray-500 py-4">{item.category}</p> */}
        <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <img className="rounded-lg w-full h-48 object-cover" src={item.image} alt={item.name} />
        </div>
        <p className="text-gray-700">{item.description}</p>
      </div>
      <div className="bg-secondary p-4 flex justify-evenly">
        <a
          target="_blank"
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center"
        >
          <span>Ver proyecto</span>
        </a>
        <a
          target="_blank"
          href={item.href}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full flex items-center"
        >
          <span>Ver código</span>
        </a>
      </div>
    </div>
  );
};

export default Project;


import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="rounded-lg flex flex-col items-center text-center border border-accent justify-between h-full lg:transition-transform lg:transform lg:duration-300 lg:hover:scale-105"
    >
      <div className="mb-4 pt-4 mx-4">
        <img
          className="rounded-xl min-h-[200px] object-cover"
          src={item.image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center flex-grow">
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <div className="description-container overflow-hidden h-28">
          <p className="subtitle px-4 mb-6">{item.description}</p>
        </div>
        <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all my-10">
          <a href={item.link} className="text-white">
            Live Demo
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;

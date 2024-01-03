import React from "react";
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[200px] bg-tertiary flex items-center ">
      <div className="container mx-auto flex md:justify-center items-center flex-wrap justify-evenly">
        {/* {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="/" />
            </div>
          );
        })} */}
          <p className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>Web developer</p>
      </div>
    </section>
  );
};

export default Brands;

import React from "react";
import WImage1 from "../assets/img/about-1.jpg";
import { Link } from "react-scroll";
import CV from "../assets/CV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex  items-center h-full pt-8">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[12px] mt-8">Hey, I'm Emanuel</p>
            <h1
              className="text-4xl leading-[44px] md:text-5xl
            md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]"
            >
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              As a Frontend Developer, my focus is on shaping extraordinary
              websites and applications, where design and functionality converge
              to offer a superior user experience.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                <Link to="contact" smooth={true}>
                  Let's Talk
                </Link>
              </button>
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                <a href={CV} download>
                  Download my CV
                </a>
              </button>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="hidden lg:flex flex-1 justify-end items-end">
            <img
              className="mr-4 w-[450px] h-[400px] rounded-3xl opacity-80"
              src={WImage1}
              alt="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "../assets/img/about-1.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-[500px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="/"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Emanuel Martinez
              </h2>
              <p className="mb-4 text-accent">Frontend Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              Enthusiastic tech specializing in programming and web development, dedicated to continuous learning. A collaborative team player with a robust skill set and comprehensive knowledge base, I thrive in dynamic environments. Committed to delivering exceptional results, I eagerly embrace challenges for professional growth. Outside of tech, I enjoy playing basketball, swimming, and play futbol. Additionally, I have a keen interest in collecting watches.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              <Link smooth={true} duration={500} to="contact">
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

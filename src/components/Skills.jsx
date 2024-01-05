import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-8 md:grid-flow-row place-items-center gap-4">
          {skills.map((skill, index) => {
            return (
              <div
                className="mx-auto w-[60px] sm:w-[60px] text-center border-b-2 border-white pb-2"
                key={index}
              >
                <div className="flex justify-center items-center pb-2">
                  <img src={skill.image} alt="" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-white whitespace-nowrap">{skill.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

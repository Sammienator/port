import React from "react";
import { FaReact, FaUser, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Me */}
          <div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            data-aos="fade-up"
          >
            <FaUser size={40} className="text-black mb-4" />
            <h3 className="text-2xl font-bold mb-2">About Me</h3>
            <p>
              I am a passionate frontend developer who enjoys creating
              responsive and visually stunning web applications. My goal is to
              merge functionality with design to create intuitive user
              experiences.
            </p>
          </div>

          {/* Who I Am */}
          <div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaCode size={40} className="text-black mb-4" />
            <h3 className="text-2xl font-bold mb-2">Who I Am</h3>
            <p>
              I am a creative thinker and problem-solver who thrives on
              innovation and continuous learning. My curiosity drives me to
              explore new technologies and find efficient solutions for
              challenges.
            </p>
          </div>

          {/* What I Do */}
          <div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaRocket size={40} className="text-black mb-4" />
            <h3 className="text-2xl font-bold mb-2">What I Do</h3>
            <p>
              I specialize in creating dynamic web applications using React,
              Tailwind CSS, and JavaScript. From building seamless user
              interfaces to optimizing web performance, I ensure every project
              meets user and business goals.
            </p>
          </div>

          {/* Tech Stack */}
          <div
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaReact size={40} className="text-black mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tech Stack</h3>
            <p>
              My toolkit includes React, Tailwind CSS, JavaScript, and Git. I
              leverage these technologies to build robust and scalable
              applications that deliver an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

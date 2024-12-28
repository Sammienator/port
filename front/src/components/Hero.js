import React from "react";
import BackgroundSlider from "react-background-slider";
import { TypeAnimation } from "react-type-animation";
import pic1 from '../assets/pic1.jpg';


<BackgroundSlider images={[pic1, pic1, pic1]} />


const Hero = () => {
  return (
    <section id="hero" className="h-screen relative flex flex-col items-center justify-center text-center text-black">
      <BackgroundSlider images={[pic1, pic1, pic1]} duration={5} transition={1} />


      <div className="z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <TypeAnimation
          sequence={["Frontend Developer", 2000, "ReactJS Enthusiast", 2000, "Just A Chill Guy", 2000]}
          speed={45}
          style={{ fontSize: "2em" }}
          wrapper="p"
          repeat={Infinity}
        />
        <div className="mt-6" id="three">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View Projects
          </button>
          <button className="ml-4 bg-transparent hover:bg-blue-500 text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

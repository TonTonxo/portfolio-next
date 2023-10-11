import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/PromileMe.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My area of expertise is developing front-end UI applications that is
            detailed. I have a strong desire for learning new technologies and
            am aware that there are multiple ways to do a task. Using HTML, CSS,
            Javascript, and React to build front-end applications is where I
            excel, but I am a quick learner and can pick up new tech stacks as
            needed. I think that using the best tool for the job, rather than
            sticking to one particular language, is what makes a great
            developer.
          </p>
          <p className="py-2 text-gray-600">
            I got started with my internet development career in 2020 by working
            as a freelancer to manage and construct websites and systems. I have
            hands-on client interaction experience, from mock wireframes to
            finished applications.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

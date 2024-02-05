import Head from "next/head";
import Image from "next/image";
import React from "react";
import awsImg from "../public/assets/projects/awsLP.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <>
    <Head>
      <title>Ton | AWS Jit LP</title>
    </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={awsImg}
            alt="/" />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Landing Page</h2>
            <h3>Webflow / Tailwind / HubSpot</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This page is the latest Landing Page I&apos;ve done with Jit.io
              using Webflow also integrate a bit of external scripting to
              implement the HubSpot Calendar.
            </p>
            <a href="https://www.jit.io/aws-ftr" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Live Page</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1 ">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Webflow
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> HubSpot
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div></>
  );
};

export default crypto;

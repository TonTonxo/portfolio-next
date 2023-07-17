import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Ton | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Anthony Sulpico</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/anthony-sulpico-090a0a245/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/TonTonxo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Team Player <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Team Player</p>
            <p className="py-2">Web Development</p>
            <p> Problem Solving</p>
          </div>
        </div>
        <p>
          Web development expert who is motivated, creative, and analytical
          Having expertise in team leadership, customer service, and
          organizational efficiency in a demanding and fast-paced environments.
          adept in formulating plans and implementing streamlined operations.
          teamwork, a variety of analytical abilities, and partnership
          development. professional at heart and driven as a leader, has strong
          interpersonal skills and sophisticated problem-solving ability. a
          successful and established background in critical thinking and thought
          generating and increasing productivity.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Basic SQL
            <span className="px-2">|</span>VWO
            <span className="px-2">|</span>Google Search Console
            <span className="px-2">|</span>Firebase
            <span className="px-2">|</span>Zapier
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Jit.io</span>
            <span className="px-2">|</span>Tel Aviv, Israel
            <span className="px-2">|</span>Freelance
          </p>
          <p className="py-1 italic">
            Junior Full Stack Developer & Webflow Developer (2023 Feb - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Assured mobile responsive UI layouts with understanding of HTML,
              CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Integrating AI and API such as Zapier, Notion, Hubspot, VWO and
              Google Optimizer for the website.
            </li>
            <li>
              Managing, Editing and Creating pages for the security.jit.io using
              NEXT JS.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Mineski Slash (/)</span>
            <span className="px-2">|</span>Manila, Philippines
            <span className="px-2">|</span>Freelance
          </p>
          <p className="py-1 italic">
            Front-End Developer/Data Assistant (2022 October - 2023 Feb)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Handling tons of data user for Mineski Slash (/) using CMS and
              XANO.
            </li>
            <li>
              Giving Feedbacks about front end design and how to maximize the
              UX.
            </li>
            <li>Using data to message users thru SMS using MOVIDER.</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Cibola Labs</span>
            <span className="px-2">|</span>Manila, Philippines
            <span className="px-2">|</span>Freelance
          </p>
          <p className="py-1 italic">
            Stream Engineer / NFT Developer / Research and Development (2022
            July – 2022 December)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Setting up stream equipment and organizing application.</li>
            <li>Handling the stream production using Obs Studio</li>
            <li>Generate 5500 normal rarity NFT for Rocket man</li>
            <li>Researching trending NFT GAMES and potential P2E Games</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

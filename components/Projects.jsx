import Image from "next/image";
import Link from "next/link";
import React from "react";
import sastImage from "../public/assets/projects/sastLP.png";
import awsImage from "../public/assets/projects/awsLP.png";
import secImage from "../public/assets/projects/securityJit.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Latest Landing Page Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Jit Sast Landing Page"
            backgroundImg={sastImage}
            projectUrl="/sastLP"
            tech="Webflow"
          />
          <ProjectItem
            title="Jit Aws Landing Page"
            backgroundImg={awsImage}
            projectUrl="/awsLP"
            tech="Webflow"
          />
        </div>
        <h2 className="py-4">Latest Next JS Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Jit Security Page"
            backgroundImg={secImage}
            projectUrl="/secJit"
            tech="Next Js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useEffect } from "react";
import Image from "next/image";
import AddChat from "../utils/tawkto";
import { projects, recommend, skills } from "../utils/data";

import { Card } from "../components/Card";
import { Skill } from "../components/Skill";
import { EmailSend } from "../components/EmailSend";
import { ProjectItem } from "../components/ProjectItem";
import { RecommendDetail } from "../components/RecommendDetail";
import { CoderIcon, CodingIcon, ThinkerIcon } from "../components/icons";

export default function Home() {
  useEffect(() => {
    window.Tawk_API?.showWidget();
    AddChat();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="space-y-4 lg:space-y-8 ">
      <Card id="Home">
        <div className="grid items-center gap-4 sm:grid-cols-7">
          <div className="space-y-2 font-bold text-center lg:space-y-4 sm:col-span-4">
            <p className="text-3xl text-gray-800 sm:text-4xl ">
              Full-Stack Web Developer
            </p>
            <p className="text-2xl text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 sm:text-2xl xl:text-4xl ">
              welcome to my site
            </p>
          </div>
          <div className="sm:col-span-3">
            <CoderIcon className="w-full h-48 " />
          </div>
        </div>
        <div className="my-6 space-y-2 lg:my-12 md:mx-12">
          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            Hello, I'm an experienced web developer with a focus on front-end
            development. With over 8 years of experience in front-end
            development and 5 years in back-end development, I specialize in
            building user-friendly web applications.
          </p>

          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            I'm committed to delivering high-quality code and collaborating
            effectively with clients and team members.
          </p>
        </div>
        <div className="hidden grid-cols-2 gap-4 sm:grid ">
          <div className="h-40 p-4 lg:h-48 ">
            <ThinkerIcon className="w-full h-full " />
          </div>
          <div className="h-40 p-4 lg:h-48 ">
            <CodingIcon className="w-full h-full " />
          </div>
        </div>
      </Card>
      <Card id="About">
        <div className="items-center lg:flex">
          <p className=" title">Get to know me:</p>
          <p className="text-lg font-bold text-green-500 lg:m-6 sm:text-xl md:text-2xl">
            Logan Wang (王明星)
          </p>
        </div>
        <div className="items-center my-8 lg:my-12 lg:flex lg:justify-around">
          <div className="overflow-hidden border-2 border-blue-200 rounded-full w-28 h-28 lg:w-36 lg:h-36 ">
            <div className="object-cover object-center w-full h-full mx-auto rounded">
              <Image
                src="/images/photo/picture.png"
                // src="/images/photo/picture.jpg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="my-8 xl:w-4/6 lg:w-3/5 lg:my-0">
            <p className="font-serif text-gray-700 sm:text-lg lg:text-xl">
              My name is Logan Wang.
              <span className="block">
                I'm a fullstack senior web developer with rich experience in{" "}
                <strong>agile development method</strong>. <br />
                Got bachelor's degree on <strong>math</strong> and{" "}
                <strong>information technology</strong>. Located in Shenyang,
                Liaoning China and looking for a{" "}
                <strong>fully remote job</strong>.
              </span>
              <span className="block">
                Open to work in any time zone. (CET, EST, PST, HKT, IST)
              </span>
            </p>
          </div>
        </div>
      </Card>
      <Card id="Skills">
        <div className="space-y-8 ">
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Main Skills
          </p>
          <div
            className="h-0 w-0 
            bg-green-200 
          border-green-300 
          border-green-500 
          border-yellow-400 
          border-yellow-200 
          border-blue-400 
          border-blue-300 
          border-red-500  
          border-red-300 
          bg-red-200 
          border-green-400 
          border-green-200 
          border-indigo-500 
          border-indigo-300 
          bg-indigo-200 
          bg-green-400
          border-violet-500 
          border-violet-300 
          bg-violet-200 
          bg-teal-400
          border-rose-500 
          border-rose-300 
          bg-rose-200 
          bg-orange-400
          border-pink-500 
          border-pink-300 
          bg-pink-200 
          bg-pink-400
          border-blue-500 
          border-indigo-300 
          bg-red-400 
          border-yellow-500
          border-yellow-300
          bg-yellow-100
          bg-yellow-400"
          ></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 gap-y-6">
            {skills.map((skill) => (
              <Skill
                borderColor1={skill.borderColor1}
                borderColor2={skill.borderColor2}
                backColor={skill.backColor}
                pic={skill.pic}
                picSize={skill.picSize}
                title={skill.title}
                degree={skill.degree}
                degreeColor={skill.degreeColor}
              />
            ))}
          </div>
        </div>
        {/* <div className="space-y-8 ">
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Other Skills
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 gap-y-6">
            {skills.map((skill, idx) => (
              <SubSkill
                borderColor1={skill.borderColor1}
                borderColor2={skill.borderColor2}
                backColor={skill.backColor}
                pic={skill.pic}
                picSize={skill.picSize}
                title={skill.title}
              />
            ))}
          </div>
        </div> */}
      </Card>
      <Card id="Projects">
        <p className="title">Projects I have worked on:</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {projects.map((item, idx) => (
            <ProjectItem item={item} key={idx} />
          ))}
        </div>
      </Card>
      <Card id="Recommend">
        <p className="title">Recommendations:</p>
        <div className="divide-y md:mt-10">
          {recommend.map((item, idx) => (
            <RecommendDetail item={item} key={idx} />
          ))}
        </div>
      </Card>
      <Card id="Contact">
        <p className="title">Contact me:</p>
        <div className="text-sm text-gray-700 lg:text-lg sm:text-base">
          <p>I'm always up for interesting ideas and projects.</p>
          <p>
            If you want to talk about any of the projects I have worked on, or
            want to work with a project with me, feel free to get in touch!
          </p>
        </div>

        <div className="my-4 mb-16">
          <EmailSend />
        </div>

        <div className="my-4">
          <div className="my-4 sm:flex">
            <p className="text-base text-teal-600 md:text-lg">
              <a href="mailto: piaobristar@gmail.com ">Email Me Directly</a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

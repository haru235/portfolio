"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Languages: C++, Java, Dart, HTML, CSS, Python, SQL, JavaScript</li>
        <li>Frameworks: Flutter, Firebase, React</li>
        <li>Tools: Visual Studio, XCode, Eclipse, GitHub, Microsoft 365, Blender, Unreal Engine</li>
        <li>Languages: Japanese (native), English (fluent)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <p>University of Texas at Tyler | Fall 2023</p>
        <ul className="list-disc pl-6">
          <li>
            B.S. in Computer Science, minor in Mathematics
          </li>
          <li>GPA: 4.0 (Summa Cum Laude)</li>
          <li>President's Honor Roll (7 of 7 semesters)</li>
          <li>Treasurer of Asian Student Association</li>
          <li>Member of Association for Computing Machinery</li>
        </ul>
        <p>Winona High School | Spring 2020</p>
        <ul className="list-disc pl-6">
          <li>
            Valedictorian
          </li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <p>Mobile App Dev | June 2022 - August 2023</p>
        <ul className="list-disc pl-6">
          <li>
            University of Texas at Tyler
          </li>
          <li>Developed a cross-platform application for smartphone fluency
            assessment in senior citizens, collaborating with the UT Tyler
            Memory Assessment and Research Center</li>
          <li>Utilized Flutter and Firebase for robust, multi-device compatible
            development
          </li>
          <li>Implemented secure data collection methods for psychology team
            analysis
          </li>
        </ul>
        <p>AVID Tutor | August 2020 - May 2021</p>
        <ul className="list-disc pl-6">
          <li>
            Winona High School
          </li>
          <li>
            Conducted group tutoring sessions for 5-20 students, adapting
            teaching methods to individual learning style
          </li>
          <li>
            Identified and implemented effective educational resources to
            support student learning
          </li>
          <li>
            Maintained regular communication with students and teachers to
            track progress and adjust strategies
          </li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          IBM Full Stack Software Developer (5 of 14 courses)</li>
        <li>
          IBM Full Stack Software Developer (6 or 12 courses)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/profile-pic.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a full stack developer passionate about crafting interactive mobile apps and engineering AI. With skills in Flutter, Dart, React, JavaScript, and Java, I blend strong academic foundations with hands-on experience. I love learning and collaborating to build innovative, user-friendly solutions. My goal is to push the boundaries of software development and make a real impact.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

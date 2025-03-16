"use client";

import Link from "next/link";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import PageWrapper from "@/components/PageWrapper";

const Infrastructure = () => {
  const infrastructureDetails = [
    {
      title: "Frontend",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-teal-500" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" />,
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "Next.js API Route",
          icon: <SiNextdotjs className="text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Atlas", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
  ];

  return (
    <PageWrapper loaderMessage="Loading Infrastructure Page">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-nunito">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400">
          Infrastructure
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {infrastructureDetails.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-72 h-72 flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                {section.title}
              </h2>
              <ul className="text-gray-300">
                {section.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="mb-2 flex items-center justify-center space-x-2"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/" legacyBehavior>
          <a className="mt-8 inline-flex items-center px-6 py-3 bg-yellow-400 text-lg font-medium text-gray-900 rounded-full hover:bg-yellow-500 transition-colors duration-300">
            Back to Home
          </a>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default Infrastructure;

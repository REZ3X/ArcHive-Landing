"use client";

import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

const Team = () => {
  const teamMembers = [
    {
      name: "Shazia el-Hamid",
      title: "Legal & Administrative Specialist",
      role: "Responsible for legal affairs, proposal drafting, office management, documentation, and correspondence.",
    },
    {
      name: "Rahmadhana Ditya Ardiyanto",
      title: "Operations & Infrastructure Manager",
      role: "Oversees VPS management, server maintenance, and deployment processes to ensure seamless operations.",
    },
    {
      name: "Rejaka Abimanyu Susanto",
      title: "Lead Developer & Database Engineer",
      role: "Spearheads the development and architecture of full-stack web solutions, database management, and overall system programming.",
    },
  ];

  return (
    <PageWrapper loaderMessage="Loading Team Page">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-nunito">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400">
          Meet the Team
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-72 h-72 flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                {member.title}
              </h2>
              <h3 className="text-lg font-medium mb-4 text-white">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.role}</p>
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

export default Team;

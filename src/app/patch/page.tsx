"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

interface LinkText {
  type: "link";
  text: string;
  url: string;
}

type ContentItem = string | LinkText;

export default function PatchNotesPage() {
  const [expandedVersion, setExpandedVersion] = useState<string | null>(null);

  const patchNotes = [
    {
      version: "0.6",
      date: "16th March 2025",
      title: "Beta Release",
      highlights: ["Hiveko", "Beta 0.6", "Responsive web"],
      details: [
        "Introducing Hiveko as the official ArcHive Notes mascot that represents creativity, productivity, and joy",
        {
          type: "link" as const,
          text: "Meet with Hiveko here",
          url: "",
        },
        "Beta 0.6 is now available for testing with new features and improvements",
        {
          type: "link" as const,
          text: "Try it out now",
          url: "https://alpha-dev.archivenotes.site",
        },
        "Responsive design for mobile devices is now live",
      ],
    },
    {
      version: "0.5",
      date: "11th March 2025",
      title: "Alpha Release",
      highlights: ["Alpha 0.5", "Basic feature release"],
      details: [
        "Alpha 0.5 is now available for testing with basic features",
        {
          type: "link" as const,
          text: "Try it out now",
          url: "https://alpha-dev.archivenotes.site",
        },
        "Secure basic authentication system",
        "Note creation and editing with markdown based formatting",
        "Flexible note organization with drag-and-drop functionality (alpha)",
        "Auto save",
        "Secure cloud storage",
      ],
    },
  ];

  const toggleVersion = (version: string) => {
    if (expandedVersion === version) {
      setExpandedVersion(null);
    } else {
      setExpandedVersion(version);
    }
  };

  // Helper function to render content items (text or links)
  const renderContentItem = (item: ContentItem, index: number) => {
    if (typeof item === "string") {
      return (
        <li key={index} className="mb-1">
          {item}
        </li>
      );
    } else if (item.type === "link") {
      return (
        <div key={index} className="mb-1 ml-5">
          <a
            href={item.url}
            className="text-yellow-400 hover:text-yellow-300 underline"
            target={item.url.startsWith("http") ? "_blank" : "_self"}
            rel={item.url.startsWith("http") ? "noopener noreferrer" : ""}
          >
            {item.text}
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <PageWrapper loaderMessage="Loading Patch Notes">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8 max-425:max-w-[425px]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link
              href="/"
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2 max-425:text-2xl">
            Patch Notes
          </h1>
          <p className="text-gray-300 mb-8 max-425:text-sm">
            Track the latest updates and improvements to our ArcHive Notes.
          </p>

          <div className="space-y-6">
            {patchNotes.map((patch) => (
              <div
                key={patch.version}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700"
              >
                <div
                  className="px-6 py-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleVersion(patch.version)}
                >
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-xl font-semibold text-white">
                        v{patch.version}
                      </h2>
                      <span className="ml-3 bg-yellow-400 text-black text-sm px-3 py-1 rounded-full">
                        {patch.title}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{patch.date}</p>
                  </div>
                  <div className="text-yellow-400 text-xl">
                    {expandedVersion === patch.version ? "−" : "+"}
                  </div>
                </div>

                <div
                  className={`px-6 ${
                    expandedVersion === patch.version
                      ? "py-4 border-t border-gray-700"
                      : "hidden"
                  }`}
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-yellow-400 uppercase tracking-wider mb-2">
                      Highlights
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300">
                      {patch.highlights.map((highlight, index) =>
                        renderContentItem(highlight, index)
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-yellow-400 uppercase tracking-wider mb-2">
                      Details
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300">
                      {patch.details.map((detail, index) =>
                        renderContentItem(detail, index)
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

"use client";

import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default function Donate() {
  return (
    <PageWrapper loaderMessage="Loading Donate Page">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-nunito">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400">
          Support the Developer
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="https://saweria.co/rejaka"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Donate via Saweria
          </a>
          <a
            href="https://trakteer.id/rez3x/tip"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-lg font-medium text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Donate via Trakteer
          </a>
        </div>
        <Link href="/" legacyBehavior>
          <a className="mt-8 inline-flex items-center px-6 py-3 bg-yellow-400 text-lg font-medium text-gray-900 rounded-full hover:bg-yellow-500 transition-colors duration-300">
            Back to Home
          </a>
        </Link>
      </div>
    </PageWrapper>
  );
}

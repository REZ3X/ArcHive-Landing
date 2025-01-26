"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import AnimatedBackground from "../components/home/AnimatedBackground";
import Header from "../components/home/Header";
import FeaturesSection from "../components/home/FeaturesSection";
import JoinWaitlist from "../components/home/JoinWaitlist";
import DeviceLinkButton from "../components/home/DeviceLinkButton";
import PlannedFeature from "../components/home/PlannedFeature";
import ArcHiveDescription from "../components/home/ArchiveDescription";
import Footer from "../components/home/Footer";
import NavBar from "../components/navigation/DeskNavBar"; // Import NavBar

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen text-white font-nunito" style={{ backgroundColor: "#111827" }}>
      <AnimatedBackground />
      <NavBar /> {/* Add NavBar */}
      <Header mounted={mounted} fadeIn={fadeIn} />
      <main className="container mx-auto px-4 py-12 space-y-24 relative z-10 flex flex-col items-center">
        <div id="about"></div>
        <section>
          <ArcHiveDescription mounted={mounted} fadeIn={fadeIn} />
        </section>
        <div id="features"></div>
        <section>
          <FeaturesSection mounted={mounted} fadeIn={fadeIn} />
        </section>
        <div id="future"></div>
        <section>
          <PlannedFeature />
        </section>
        <div id="create"></div>
        <section>
          <DeviceLinkButton mounted={mounted} fadeIn={fadeIn} />
        </section>
        <JoinWaitlist mounted={mounted} fadeIn={fadeIn} />
      </main>
      <Footer />
    </div>
  );
}
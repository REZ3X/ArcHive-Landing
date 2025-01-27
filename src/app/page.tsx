"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion"; // Import Variants type
import AnimatedBackground from "../components/home/AnimatedBackground";
import Header from "../components/home/Header";
import FeaturesSection from "../components/home/FeaturesSection";
import JoinWaitlist from "../components/home/JoinWaitlist";
import DeviceLinkButton from "../components/home/DeviceLinkButton";
import PlannedFeature from "../components/home/PlannedFeature";
import ArcHiveDescription from "../components/home/ArchiveDescription";
import Footer from "../components/home/Footer";
import NavBar from "../components/navigation/DeskNavBar"; // Import NavBar
import MobileNavBar from "../components/navigation/MobileNavBar"; // Import MobileNavBar

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define the fadeIn variants with the correct type
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },  // initial hidden state
    visible: { opacity: 1, y: 0 },   // final visible state
  };

  return (
    <div className="min-h-screen text-white font-nunito" style={{ backgroundColor: "#111827" }}>
      <AnimatedBackground />
      <NavBar /> {/* Add NavBar */}
      <MobileNavBar />
      <Header mounted={mounted} fadeIn={fadeIn} />
      <main className="container mx-auto px-4 py-12 space-y-24 max-425:space-y-8 relative z-10 flex flex-col items-center">
        <div id="about"></div>
        <section>
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ArcHiveDescription mounted={mounted} fadeIn={fadeIn} />
          </motion.div>
        </section>
        <div id="features"></div>
        <section>
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FeaturesSection mounted={mounted} fadeIn={fadeIn} />
          </motion.div>
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
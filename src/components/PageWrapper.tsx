"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  loaderMessage?: string;
}

export default function PageWrapper({
  children,
  title,
  loaderMessage = "Loading...",
}: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  const displayMessage = title || loaderMessage;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader message={displayMessage} />;
  }

  return <>{children}</>;
}

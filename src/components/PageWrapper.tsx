'use client';

import React, { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;        // Update: renamed from loaderMessage to title for clarity
  loaderMessage?: string; // Keep this for backward compatibility
}

export default function PageWrapper({ 
  children, 
  title, 
  loaderMessage = "Loading..." 
}: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Use title as the loader message if provided, otherwise fall back to loaderMessage
  const displayMessage = title || loaderMessage;

  useEffect(() => {
    // Simulate content loading with a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader message={displayMessage} />;
  }

  return <>{children}</>;
}
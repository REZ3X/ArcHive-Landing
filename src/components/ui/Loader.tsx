'use client';

import React from 'react';

interface LoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Loader({ message = "Loading...", size = 'md' }: LoaderProps) {
  const sizeClasses = {
    sm: {
      container: 'w-12 h-12',
      outerInset: '-inset-6',
      text: 'text-sm'
    },
    md: {
      container: 'w-16 h-16',
      outerInset: '-inset-8',
      text: 'text-base'
    },
    lg: {
      container: 'w-20 h-20',
      outerInset: '-inset-10',
      text: 'text-lg'
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-900 h-screen p-8">
      <div className="text-center">
        <div className={`${sizeClasses[size].container} relative mx-auto mb-4`}>
          <div className={`absolute ${sizeClasses[size].outerInset} bg-yellow-400/5 rounded-full blur-2xl`}></div>
          
          <div className="absolute inset-0 animate-pulse bg-yellow-400/20 rounded-lg transform rotate-45"></div>
          
          <div className="absolute inset-[3px] bg-gray-900 rounded-lg transform rotate-45"></div>
          
          <div className="absolute inset-[6px] bg-yellow-400/30 rounded-lg transform rotate-45 animate-ping opacity-70"></div>
        </div>
        <p className={`text-yellow-400/90 font-medium ${sizeClasses[size].text}`}>{message}</p>
      </div>
    </div>
  );
}
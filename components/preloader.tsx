"use client";

import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 flex-col">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"/>
      <h1 className="text-white text-center font-medium text-xl py-3">Ridescue</h1>
    </div>
  );
};

export default Preloader;

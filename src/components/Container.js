import React from "react";

export default function Container({ children }) {
  return (
    <div className="h-screen w-screen sm:w-10/12 md:w-3/4 lg:w-2/3 overflow-y-auto flex items-center justify-center px-3">
      {children}
    </div>
  );
}

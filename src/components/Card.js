import React from "react";
const bgURL = "img/car.jfif";
export default function Card({ children }) {
  return (
    <div
      className="card h-3/4 grid grid-cols-2 w-full glass shadow-lg hover:shadow-lg"
      style={{ background: "rgba(0,0,0,0.3)" }}
    >
      <div
        className="bg-cover h-full bg-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1"
        style={{ backgroundImage: `url(${bgURL})` }}
      ></div>
      <div className="card-body justify-center items-center col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
        {children}
      </div>
    </div>
  );
}

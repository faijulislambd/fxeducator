import React from "react";

const Card = ({ icon, header, desc }) => {
  return (
    <div className="group bg-white shadow-sm p-10 rounded-lg flex flex-col space-y-5 text-center border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-amber-500 hover:-translate-y-1">
      <div className="w-20 h-20 inline-flex items-center justify-center border-4 border-gray-100 rounded-full mx-auto text-4xl transition-all duration-300 group-hover:border-amber-500 group-hover:scale-105 group-hover:shadow-md">
        {icon}
      </div>
      <h4 className="text-xl font-semibold uppercase">{header}</h4>
      <p className="text-md text-gray-700">{desc}</p>
    </div>
  );
};

export default Card;

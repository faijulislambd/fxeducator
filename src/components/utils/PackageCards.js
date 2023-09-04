"use client";

import { BiCheckDouble } from "react-icons/bi";
import Button from "./Button";

const PackageCards = ({
  price,
  heading,
  featureList,
  href,
  featured = false,
}) => {
  return (
    <div
      className={`group shadow-lg p-10 rounded-lg flex flex-col space-y-5 text-center border-2 ${
        featured
          ? "shadow-xl border-amber-500 scale-105"
          : "border-transparent transition-all duration-300 hover:shadow-xl hover:border-amber-500 hover:scale-[1.015]"
      }`}
    >
      <h5 className="text-xl font-bold uppercase">{heading}</h5>
      <div
        className={`px-4 py-2 inline-flex items-center justify-center border-2 rounded-full mx-auto text-2xl transition-all duration-300 ${
          featured
            ? "border-amber-500 scale-105"
            : "border-gray-100 group-hover:border-amber-500 group-hover:scale-105 "
        }`}
      >
        ৳{price}/Month
      </div>
      <ul className="text-start">
        {featureList.map((list, i) => (
          <li
            key={i}
            className="ps-7 py-3 border-b border-b-slate-100 relative"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-amber-500 text-2xl">
              <BiCheckDouble />
            </div>
            {list}
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default PackageCards;

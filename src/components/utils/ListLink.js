import Link from "next/link";
import React from "react";

const ListLink = ({ children, href = "/", className = [] }) => {
  return (
    <li>
      <Link
        href={href}
        className={`block relative flex-wrap mb-4 py-[3px] px-3 before:inline-block before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:-z-[1] z-0 before:bg-amber-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full hover:text-slate-700 ${className}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default ListLink;

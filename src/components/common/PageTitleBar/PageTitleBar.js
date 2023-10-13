"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTitleBar = () => {
  const currentRoute = usePathname();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    setPageTitle(document.title.split("|")[0]);
  }, [currentRoute]);

  return (
    <div className=" bg-amber-500">
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 py-16 flex items-center justify-start text-3xl font-bold uppercase">
        {pageTitle}
      </div>
    </div>
  );
};

export default PageTitleBar;

"use client";

import PageTitleBar from "@/components/common/PageTitleBar/PageTitleBar";
import { usePathname } from "next/navigation";

const { default: Footer } = require("@/components/common/Footer/Footer");
const { default: Header } = require("@/components/common/Header/Header");

const PublicLayout = ({ children }) => {
  const currentRoute = usePathname();

  return (
    <>
      <Header></Header>
      {currentRoute !== "/" && <PageTitleBar></PageTitleBar>}
      {children}
      <Footer></Footer>
    </>
  );
};

export default PublicLayout;

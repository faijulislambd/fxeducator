import Header from "@/components/common/Header/Header";
import "./globals.css";
import { Raleway } from "next/font/google";
import Footer from "@/components/common/Footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "FX Educator",
  description: "Learning about the various aspects of Forex from experts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
};

export default RootLayout;

import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: { default: "FX Educator", template: "%s | FX Educator" },
  description: "Learning about the various aspects of Forex from experts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

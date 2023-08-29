import Container from "@/components/utils/Container";
import logoWhite from "@/assets/images/logo-white.png";
import Image from "next/image";
import Title from "@/components/utils/Title";
import SocialShare from "../SocialShare/SocialShare";
import ListLink from "@/components/utils/ListLink";

const Footer = () => {
  return (
    <div className="bg-slate-700 pt-8 text-white">
      <Container className="flex items-center flex-wrap">
        <div className="lg:w-6/12 w-full lg:pe-8 pe-0">
          <div className="mb-4">
            <Image
              src={logoWhite}
              alt="FX Educator Logo White"
              placeholder="blur"
              width={300}
            />
          </div>
          <p className="text-lg mb-5">
            Welcome to our forex education site! We offer the best, most
            affordable lessons and services around. Join us now and start
            Trading!
          </p>
          <Title className="text-xl">Follow Us</Title>
          <SocialShare></SocialShare>
        </div>
        <div className="lg:w-2/12 w-6/12 lg:pe-3">
          <Title className="text-xl">Quick links</Title>
          <ul>
            <ListLink>About Us</ListLink>
            <ListLink>Article</ListLink>
            <ListLink>Educators</ListLink>
            <ListLink>Topics</ListLink>
          </ul>
        </div>
        <div className="lg:w-2/12 w-6/12 lg:pe-3">
          <Title className="text-xl">Support</Title>
          <ul>
            <ListLink>Terms & Conditions</ListLink>
            <ListLink>Privacy Policy</ListLink>
            <ListLink>FAQs</ListLink>
            <ListLink>Contact Us</ListLink>
          </ul>
        </div>
        <div className="lg:w-2/12 w-6/12">
          <Title className="text-xl">Company</Title>
          <ul>
            <ListLink>Career</ListLink>
            <ListLink>Announcements</ListLink>
            <ListLink>Courses</ListLink>
            <ListLink>Brokers</ListLink>
          </ul>
        </div>
      </Container>
      <div className="border-t-2 border-t-slate-600 py-4 text-center text-xl font-medium mt-8">
        All Rights Reserved || &copy;2023
      </div>
    </div>
  );
};

export default Footer;

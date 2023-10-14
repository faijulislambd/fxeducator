import CTA from "@/components/HomeSections/CTA";
import HeroSection from "@/components/HomeSections/HeroSection";
import HowToTrade from "@/components/HomeSections/HowToTrade";
import NewCourses from "@/components/HomeSections/NewCourses";
import PackageSection from "@/components/HomeSections/PackageSection";
import PopularCourses from "@/components/HomeSections/PopularCourses";
import ServicesSection from "@/components/HomeSections/ServicesSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <PackageSection></PackageSection>
      <PopularCourses></PopularCourses>
      <HowToTrade></HowToTrade>
      <NewCourses></NewCourses>
      <CTA></CTA>
    </div>
  );
};

export default HomePage;

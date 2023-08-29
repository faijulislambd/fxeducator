import Container from "@/components/utils/Container";
import Title from "@/components/utils/Title";

const HeroSection = () => {
  return (
    <Container className="py-52 relative">
      <div className="w-full md:w-5/12 pe-5">
        <Title className="text-6xl capitalize leading-snug before:h-2 before:-bottom-5 before:w-36">
          Learn the right way of Forex Trading
        </Title>
      </div>
      <div className="w-full md:w-4/12"></div>
      <div className="w-full md:w-3/12"></div>
    </Container>
  );
};

export default HeroSection;

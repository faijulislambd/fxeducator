import Button from "@/components/utils/Button";
import Container from "@/components/utils/Container";
import Title from "@/components/utils/Title";
import chart from "@/assets/images/chart.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-52 relative">
      <Container>
        <div className="flex flex-wrap">
          <div className="md:w-5/12 w-full pe-5">
            <Title className="lg:text-6xl md:text-4xl text-3xl capitalize leading-snug before:h-2 before:-bottom-5 before:w-36">
              Learn the right way of Forex Trading
            </Title>
            <Button className="text-lg mt-4">Let Us Get Started</Button>
          </div>
          <div className="md:w-3/12 w-full">
            <div className="md:before:h-full lg:before:w-[210px] md:before:w-[160px] md:before:top-0 md:before:absolute lg:before:left-[46%] md:before:left-[44%] md:before:-z-1 md:before:bg-gradient-to-t md:before:from-amber-300 md:before:to-transparent">
              <Image
                src={chart}
                alt="Chart Image"
                className="md:animate-floating"
              />
            </div>
          </div>
          <div className="md:w-4/12 w-full">
            <div className="flex-col space-y-9 md:ps-9 space-x-0 mt-10 md:mt-0">
              <div className="bg-white rounded-md shadow-xl p-4">
                <div className="text-black font-bold text-3xl">10+</div>
                <p className="text-xl text-gray-500 font-semibold capitalize">
                  Years of Teaching Experience
                </p>
              </div>
              <div className="bg-white rounded-md shadow-xl p-4">
                <div className="text-black font-bold text-3xl">100+</div>
                <p className="text-xl text-gray-500 font-semibold capitalize">
                  Experienced Traders
                </p>
              </div>
              <div className="bg-white rounded-md shadow-xl p-4">
                <div className="text-black font-bold text-3xl">24/7</div>
                <p className="text-xl text-gray-500 font-semibold capitalize">
                  Around The Clock Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

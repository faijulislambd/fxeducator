import Card from "../utils/Card";
import Container from "../utils/Container";
import Title from "../utils/Title";
import { FaBookReader } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { HiSignal } from "react-icons/hi2";

const ServicesSection = () => {
  return (
    <section className="py-32 bg-slate-50">
      <Container>
        <Title className="text-center text-3xl before:left-1/2 before:-translate-x-1/2 before:w-2/12 mb-24">
          Services We Provide{" "}
        </Title>
        <div className="flex flex-wrap items-center justify-center -mx-5">
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <Card
              icon={<FaBookReader></FaBookReader>}
              header="Learning Resources"
              desc="Get high quality resources that will enable you to learn the required knowledge."
            ></Card>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <Card
              icon={<BsNewspaper></BsNewspaper>}
              header="Current Market News"
              desc="Get the news on the latest market state to plan out your future investments."
            ></Card>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <Card
              icon={<HiSignal></HiSignal>}
              header="Daily Signal Provider"
              desc="Get access to our discord server to get signals on a daily basis."
            ></Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;

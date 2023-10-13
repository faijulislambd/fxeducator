import Container from "../utils/Container";
import ImageCard from "../utils/ImageCard";
import Title from "../utils/Title";
import image1 from "@/assets/images/c-1.jpg";
import image2 from "@/assets/images/c-2.jpg";
import image3 from "@/assets/images/c-3.jpg";

const NewCourses = () => {
  return (
    <section className="py-32">
      <Container>
        <Title className="text-center text-3xl before:left-1/2 before:-translate-x-1/2 before:w-2/12 mb-24">
          Our Newly Added Courses
        </Title>
        <div className="flex flex-wrap items-center justify-center -mx-5">
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <ImageCard
              src={image1}
              title="Learn About Trade"
              desc="Learn the basics of forex trading from our expert traders."
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <ImageCard
              src={image2}
              title="Learn About Crypto"
              desc="Learn the basics of cryptocurrency trading from our expert traders."
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <ImageCard
              src={image3}
              title="Signal Trade"
              desc="Learn the basics of signal trading from our expert traders."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewCourses;

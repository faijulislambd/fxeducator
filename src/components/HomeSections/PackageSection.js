import Container from "../utils/Container";
import PackageCards from "../utils/PackageCards";
import Title from "../utils/Title";

const PackageSection = () => {
  return (
    <section className="py-32">
      <Container>
        <Title className="text-center text-4xl before:left-1/2 before:-translate-x-1/2 before:w-2/12 mb-[2.8rem]">
          FX Combo Packages
        </Title>
        <div className="flex flex-wrap items-center justify-center -mx-5">
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <PackageCards
              heading="Basic"
              price="5,000"
              featureList={[
                "Access To Course Videos",
                "Chat With Educators",
                "24/7 Support",
                "No Market Analysis",
                "No Access To Discord Group",
                "No Signal",
              ]}
            ></PackageCards>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <PackageCards
              heading="Standard"
              price="10,000"
              featureList={[
                "Access To Course Videos",
                "Chat With Educators",
                "24/7 Support",
                "Realtime US/UK Market Analysis",
                "Access To Private Discord Group",
                "Free/Premium Signal",
              ]}
              featured={true}
            ></PackageCards>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-10">
            <PackageCards
              heading="Advanced"
              price="15,000"
              featureList={[
                "Access To Course Videos",
                "Chat With Educators",
                "24/7 Support",
                "Realtime US Market Analysis",
                "Access To Private Discord Group",
                "Free Signals",
              ]}
            ></PackageCards>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PackageSection;

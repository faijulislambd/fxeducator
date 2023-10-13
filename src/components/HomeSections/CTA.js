import Link from "next/link";
import Button from "../utils/Button";

const CTA = () => {
  return (
    <section className="bg-amber-300 py-28 px-10">
      <div className="flex flex-col justify-center space-y-10 text-center">
        <div className="text-4xl font-bold uppercase">
          So what are you waiting for? Join us!!!
        </div>
        <Link href="#">
          <Button className="text-xl">Sign Up & Start Trading!</Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;

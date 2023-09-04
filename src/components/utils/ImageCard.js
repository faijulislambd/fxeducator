import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ImageCard = ({ title, desc, src = "#", rating, link = "#" }) => {
  return (
    <div className="group bg-white shadow-sm rounded-lg flex flex-col space-y-5 border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-amber-500 hover:-translate-y-1 overflow-hidden">
      <div className="relative w-full overflow-hidden inline-flex items-center transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-md">
        <Image
          src={src}
          alt={title}
          className="transition-transform group-hover:scale-105 w-full h-[280px]"
        />
        {rating && (
          <div className="absolute right-3 top-3 h-12 w-12 font-semibold rounded-full flex items-center justify-center text-lg text-white bg-amber-500">
            {rating}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col space-y-5">
        <h4 className="text-xl font-semibold uppercase">{title}</h4>
        <p className="text-md text-gray-700">{desc}</p>
        <Link href={link}>
          <Button>Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;

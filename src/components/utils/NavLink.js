import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href = "#", children, className = "" }) => {
  const currentRoute = usePathname();
  return (
    <Link
      href={href}
      className={`lg:w-auto w-full inline-block after:hidden lg:after:inline-block border-b-amber-500 lg:py-2 lg:px-4 text-md font-semibold relative overflow-hidden after:transition-all after:duration-300 after:visible after:absolute after:w-full after:h-full after:-z-[1] after:bg-amber-500 after:left-0 after:top-0 ${
        currentRoute === href
          ? "after:scale-100 after:opacity-1"
          : "after:scale-0 after:opacity-0"
      } after:rounded-full hover:after:scale-100 hover:after:opacity-100 hover:after:visible ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

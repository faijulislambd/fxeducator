const ShareIcon = ({ children, href = "#", className = [] }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`inline-flex text-2xl items-center justify-center h-10 w-10 bg-white text-slate-700 rounded-full relative after:absolute after:top-0 after:left-0 after:z-0 after:inline-block after:w-full after:rounded-full after:h-full after:bg-amber-500 after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100 ${className}`}
    >
      <span className="z-10">{children}</span>
    </a>
  );
};

export default ShareIcon;

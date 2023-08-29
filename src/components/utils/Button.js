const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-semibold uppercase bg-neutral-100 border-[1px] border-amber-500 transition-all rounded-full shadow-xl hover:bg-amber-500 hover:translate-y-[2px] hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

const Title = ({ children, className = [] }) => {
  return (
    <h3
      className={`font-semibold mb-8 relative before:absolute before:-bottom-2 before:left-0 before:h-[3px] before:w-14 before:bg-amber-500 before:rounded-full ${className}`}
    >
      {children}
    </h3>
  );
};

export default Title;

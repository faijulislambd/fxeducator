const Container = ({ children, className = [] }) => {
  return (
    <div className={`max-w-screen-xl mx-auto xl:px-0 px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

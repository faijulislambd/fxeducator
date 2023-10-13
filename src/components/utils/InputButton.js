const InputButton = ({ className = "", value = "Submit" }) => {
  return (
    <input
      type="submit"
      className={`px-4 py-2 cursor-pointer font-semibold uppercase bg-neutral-100 border-[1px] border-amber-500 transition-all rounded-full shadow-xl hover:bg-amber-500 hover:translate-y-[2px] hover:shadow-xl ${className}`}
      value={value}
    />
  );
};

export default InputButton;

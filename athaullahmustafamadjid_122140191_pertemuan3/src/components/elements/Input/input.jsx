const InputElement = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  variant,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`font-poppins bg-white p-4 shadow-sm  focus:outline-[#234258] ${variant}`}
      required
    />
  );
};

export default InputElement;

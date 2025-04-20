// import { useState } from "react";
import PropTypes from "prop-types";

const InputRadio = ({ data, label, name, onChange, variant }) => {
  //   const [selected, setSelected] = useState("");

  return (
    <>
      <select
        name={name}
        // value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="font-poppins w-1/4 text-white p-3 cursor-pointer  border rounded-[40px] bg-[#234258]  focus:border-2 focus:border-[#d76e5e] focus:outline-none"
        required
      >
        <option value="">{label}</option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );

  InputRadio.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
  };
};

export default InputRadio;

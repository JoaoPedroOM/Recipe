import React from "react";

const Input = ({label, typeValue, name, valor}) => {
  return (
    <div className="mb-4">
      <label className="block text-[1rem] leading-4 pb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="border border-[#eee] w-full lg:w-1/2 text-base p-[0.8rem] rounded-[0.4rem] bg-[#eee] input-details"
        id={name}
        name={name}
        type={typeValue}
        value={valor}
      />
      {/* {error && <p className="text-[#f31] text-[0.875rem] mt-1">{error}</p>} */}
    </div>
  );
};

export default Input;

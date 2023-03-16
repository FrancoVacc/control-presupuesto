import React from "react";

const Validation = ({ validation }) => {
  return (
    <div className=" w-[80%] md:w-1/2 bg-red-600 text-white text-3xl py-2 text-center rounded-md mb-5">
      {validation}
    </div>
  );
};

export default Validation;

"use client";

const Button = ({ buttonName = "" }) => {
  return (
    <>
      <div className="absolute bottom-0 w-full flex justify-center mb-5">
        <button>{buttonName}</button>
        {/* <button className="p-7 bg-slate-500 rounded-xl mx-2 my-2">{buttonName}</button> */}
      </div>
    </>
  );
};

export default Button;

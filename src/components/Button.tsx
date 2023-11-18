"use client";

export function Button({ buttonName = "" }) {
  return (
    <>
      <button className="p-4 text-white bg-slate-500 tex rounded-xl mx-2 my-2">{buttonName}</button>
    </>
  );
}

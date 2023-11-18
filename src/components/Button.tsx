"use client";

export function Button({ buttonName = "" }) {
  return (
    <>
      <button className="px-6 py-2 text-white text-xs bg-slate-500 tex rounded-3xl mx-2 my-2">
        {buttonName}
      </button>
    </>
  );
}

import React from "react";

const Finance = () => {
  return (
    <article className="flex flex-col ">

    <header className="text-center backdrop bg-softwhite rounded-xl p-4">
      <h1 className="text-xl uppercase">Ingresos</h1>
    </header>

    <div className="mt-4 flex">
        <p className="mx-2">Name:</p>
        <input type="text" />
        <p className="mx-2">Age:</p>
        <input type="text" />
        <p className="mx-2">Id:</p>
        <input type="text" />
    </div>
  
    <div className="flex flex-1 mt-3">
      <section className="flex w-[50%] justify-center">
        <div>
          <h2>Ingresos Mensuales</h2>
        </div>
      </section>
  
      <section className="flex w-[50%] justify-center">
        <div>
          <h2>Gastos mensuales</h2>
        </div>
      </section>
    </div>
  
  </article>

  );
};

export default Finance;

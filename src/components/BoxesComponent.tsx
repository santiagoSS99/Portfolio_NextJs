

const BoxesContainer = ({ titlebox, briefdesc, children }: BoxexInterfaceComponent) => {
  return (
    <>
      <article className="w-full border-2 border-slate-400 shadow-xl p-2 rounded-2xl">
        <section>
          <h1 className="">{titlebox}</h1>
        </section>
        <section>
          <span>{briefdesc}</span>
        </section>
        <section>
            {children}
        </section>
      </article>
    </>
  );
};

export default BoxesContainer;

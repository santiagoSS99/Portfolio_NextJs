export function SkillComponent({ skillTitle, children }: SkillComponentProps) {
  return (
    <>
      <article className="mt-6 sm:flex">
        <section className='flex items-center justify-center'>
          <h1 className="text-2xl max-sm:text-sm uppercase font-bold flex mx-10 items-center">
            {skillTitle}
          </h1>
        </section>
        <section className="flex justify-center items-center max-sm:flex-wrap">
          <article className="sm:flex">{children}</article>
        </section>
      </article>
    </>
  );
}

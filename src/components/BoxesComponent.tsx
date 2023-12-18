import Image from "next/image";
import { SeeMoreLink } from "./Popover";

const BoxesContainer = ({
  titlebox,
  briefdesc,
  children,
  imagepath,
}: BoxexInterfaceComponent) => {
  return (
    <>
      <article className="w-full border-2 border-slate-400 shadow-xl p-2 rounded-2xl max-[540px]:mb-3">
        <div className="flex justify-center w-full h-8">
          <Image src={imagepath} alt="Project Image" className="w-full" />
        </div>
        <section className="flex justify-center my-2 ">
          <h1 className="text-2xl font-semibold montserrat-font">{titlebox}</h1>
        </section>
        <section className="p-3">
          <span>{briefdesc}</span>
        </section>
        <section className="p-3">{children}</section>
        <section>
          <div className="flex mb-0">
            <SeeMoreLink />
          </div>
        </section>
      </article>
    </>
  );
};

export default BoxesContainer;

import BoxesContainer from "./BoxesComponent";

const ProjectsComponent = () => {
  return (
    <>
      <h1 className="flex justify-center font-medium mb-8">Projects</h1>
      <article className="w-full grid grid-cols-4 gap-4 max-[900px]:gap-2 max-[900px]:grid-cols-2">
        <BoxesContainer titlebox="CRM VGACI" briefdesc="blue content">
        </BoxesContainer>
        <BoxesContainer titlebox="Black Jack Game" briefdesc="blue content">
        </BoxesContainer>
        <BoxesContainer titlebox="lorem" briefdesc="lorem*10">
        </BoxesContainer>
        <BoxesContainer titlebox="Product 1" briefdesc="blue content">
        </BoxesContainer>
        
      </article>
    </>
  );
};

export default ProjectsComponent;

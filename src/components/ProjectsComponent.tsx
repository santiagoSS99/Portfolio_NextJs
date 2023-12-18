'use client'

import { SeeMoreLink } from ".";
import BoxesContainer from "./BoxesComponent";

const logo = require("../../public/ssclogo.svg");

const ProjectsComponent = () => {
  return (
    <>
    <div>
      <h1 className="flex justify-center mb-8 font-semibold montserrat-font text-2xl uppercase">Projects</h1>

    </div>
      <article className="w-full grid grid-cols-4 gap-4 max-[900px]:gap-2 max-[900px]:grid-cols-2 max-[540px]:gap-1 max-[540px]:grid-cols-1">
        <BoxesContainer imagepath="" titlebox="CRM VGACI" briefdesc="Projecto de grado">
          Proyecto construido usando NestJs y Angular, donde se busca que a traves del comportamiento del cliente se puedan sacar estadisticas y generar propuestas personalizadas para cada cliente
        </BoxesContainer>
        <BoxesContainer imagepath="" titlebox="Black Jack Game" briefdesc="Game using Vanilla Js">
          This game was builded using vanilla JS, where i build to learn the JS bases and flow
        </BoxesContainer>
        <BoxesContainer imagepath="" titlebox="lorem" briefdesc="lorem*10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam soluta eligendi aspernatur voluptas quia dolorem. Voluptates, accusamus. Similique placeat fuga ratione dicta animi tempore veniam, aut corrupti consequuntur earum.
        </BoxesContainer>
        <BoxesContainer imagepath="" titlebox="Product 1" briefdesc="blue content" >
          product data
        </BoxesContainer>
        
      </article>
    </>
  );
};

export default ProjectsComponent;

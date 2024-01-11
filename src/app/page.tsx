import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import React from "react";

import ProjectsComponent from "@/app/components/ProjectsComponent";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <section className="m-6">
          <ProjectsComponent />
        </section>
        <Footer />
      </section>
    </>
  );
}

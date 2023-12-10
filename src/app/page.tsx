import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

import ProjectsComponent from "@/components/ProjectsComponent";

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

import Navbar from "@/components/Navbar";
import { Button } from "@/components/Button";
import Hero from "@/components/Hero";
import React from "react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <section>
      <Hero/>
      </section>
      <section>
      <Footer/>
      </section>

    </React.Fragment>
  );
}

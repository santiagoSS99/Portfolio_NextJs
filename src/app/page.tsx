import Hero from "@/components/Hero";
import React from "react";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <React.Fragment>
      <section>
      <Hero/>
      {/* <Button buttonName={'santi'}/> */}
      </section>
      <section>
      <Footer/>
      </section>

    </React.Fragment>
  );
}

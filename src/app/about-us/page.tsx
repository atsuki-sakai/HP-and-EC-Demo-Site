import React from "react";
import type { Metadata } from "next";

import { Footer, Header, SimpleButton } from "@/components/common";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <h1>About Us</h1>
        <SimpleButton href={"/"} text={"Go to Home."} />
      </main>
      <Footer />
    </>
  );
};

export default page;

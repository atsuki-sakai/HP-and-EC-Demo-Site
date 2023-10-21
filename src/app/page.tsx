"use client";

import React from "react";
import Link from "next/link";
import { Footer, Header, Drawer, ModalDialog } from "@/components/common";
import { useSetRecoilState } from "recoil";
import { modalAtom } from "@/recoil/atom/modalAtom";

const Home = () => {
  const setModalState = useSetRecoilState(modalAtom);

  return (
    <>
      <ModalDialog>hello modal dialog.</ModalDialog>
      <Header />
      <main>
        <h1>Home Page</h1>
        <Link href={"/about-us"}>Go to About Us.</Link>
        <button onClick={() => setModalState(true)}>show modal</button>
      </main>
      <Drawer />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Layout from "../components/Layout";
import {Title} from "../components/Home/Title";
import {Carousel} from "../components/Home/Carousel";

function Home() {
  return (
    <>
      <Layout>
        <Title/>
        <Carousel/>
      </Layout>
    </>
  );
}

export {Home};
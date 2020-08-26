import React from "react";
import Layout from "../components/Layout";
import {Title} from "../components/Home/Title";
import {Carousel} from "../components/Home/Carousel";
import {Main} from "../components/Home/Main";

function Home() {
  return (
    <>
      <Layout>
        <Title/>
        <Carousel/>
        <Main/>
      </Layout>
    </>
  );
}

export {Home};
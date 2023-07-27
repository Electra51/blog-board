import RootLayouts from "@/components/Layouts/RootLayouts";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Blog-Board home page</title>
      </Head>
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

import RootLayouts from "@/components/Layouts/RootLayouts";
import React from "react";

const AboutPage = () => {
  return <div>about</div>;
};

export default AboutPage;
AboutPage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};

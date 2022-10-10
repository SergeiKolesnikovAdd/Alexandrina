import {
  AboutSlide,
  AdvantageSlide,
  FaqSlide,
  FocusSlide,
  Footer,
  Header,
  MainFirstSlide,
  OfferSlide,
  PlatformSlide,
} from "components";

import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <MainFirstSlide pt="xxxlg" />
      <AboutSlide pt="xxxlg"/>
      <FocusSlide></FocusSlide>
      {/* <PlatformSlide mt="xxxlg"></PlatformSlide> */}
      <OfferSlide pt="xxxlg"></OfferSlide>
      <AdvantageSlide></AdvantageSlide>
      <FaqSlide pt="xxxlg"></FaqSlide>
      <Footer />
    </>
  );
};

export default Home;

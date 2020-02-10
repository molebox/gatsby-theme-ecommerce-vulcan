/** @jsx jsx */
import { jsx } from "theme-ui";
import GenericLayout from "../components/layouts/GenericLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";

export default () => {
  return (
    <GenericLayout>
      <Header />
      <Main>
        <AboutSection />
      </Main>
      <Footer />
    </GenericLayout>
  );
};

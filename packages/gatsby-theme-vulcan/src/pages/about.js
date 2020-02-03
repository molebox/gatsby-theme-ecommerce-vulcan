/** @jsx jsx */
import { jsx } from "theme-ui";
import AboutLayout from "../components/layouts/AboutLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";

export default () => {
  return (
    <AboutLayout>
      <Header />
      <Main>
        <AboutSection />
      </Main>
      <Footer />
    </AboutLayout>
  );
};

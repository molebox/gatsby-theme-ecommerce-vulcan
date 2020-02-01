/** @jsx jsx */
import { jsx } from "theme-ui";
import AboutLayout from "../components/layouts/AboutLayout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";

export default () => {
  return (
    <AboutLayout>
      <Header />
      <Navbar />
      <Main>
        <AboutSection />
      </Main>
      <Footer />
    </AboutLayout>
  );
};

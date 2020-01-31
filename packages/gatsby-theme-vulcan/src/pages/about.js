/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";

export default () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Sidebar />
      <Main>
        <AboutSection />
      </Main>
      <Footer />
    </Layout>
  );
};

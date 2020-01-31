/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import MainSection from "../components/MainSection";

export default () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Sidebar />
      <Main>
        <MainSection />
      </Main>
      <Footer />
    </Layout>
  );
};
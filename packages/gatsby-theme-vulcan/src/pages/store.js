/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import StoreSection from "../components/StoreSection";

export default () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Sidebar />
      <Main>
        <StoreSection />
      </Main>
      <Footer />
    </Layout>
  );
};

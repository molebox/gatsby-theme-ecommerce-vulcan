/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layouts/Layout";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import MainSection from "../components/MainSection";

export default () => {
  return (
    <Layout>
      <NavbarHeader />
      <Sidebar />
      <Main>
        <MainSection />
      </Main>
      <Footer />
    </Layout>
  );
};

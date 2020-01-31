/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import ContactSection from "../components/ContactSection";

export default () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Sidebar />
      <Main>
        <ContactSection />
      </Main>
      <Footer />
    </Layout>
  );
};

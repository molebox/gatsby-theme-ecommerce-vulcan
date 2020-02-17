/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layouts/Layout";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ContactSection from "../components/ContactSection";

export default () => {
  return (
    <Layout>
      <NavbarHeader />
      <Main>
        <ContactSection />
      </Main>
      <Footer />
    </Layout>
  );
};

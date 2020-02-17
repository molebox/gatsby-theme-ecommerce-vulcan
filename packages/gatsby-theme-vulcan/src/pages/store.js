/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layouts/Layout";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import StoreSection from "../components/store/StoreSection";
import StoreSidebar from "../components/store/StoreSidebar";

export default () => {
  return (
    <Layout>
      <NavbarHeader />
      <StoreSidebar />
      <Main>
        <StoreSection />
      </Main>
      <Footer />
    </Layout>
  );
};

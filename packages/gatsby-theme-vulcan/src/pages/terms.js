/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layouts/Layout";
import NavbarHeader from "../components/NavbarHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import StoreCategories from "../components/store/StoreCategories";

export default () => {
  return (
    <Layout>
      <NavbarHeader />
      <Main>
        <StoreCategories />
      </Main>
      <Footer />
    </Layout>
  );
};

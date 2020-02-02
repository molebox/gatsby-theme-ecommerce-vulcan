/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import StoreSection from "../components/store/StoreSection";

export default () => {
  return (
    <Layout>
      <Header />
      <Main>
        <StoreSection />
      </Main>
      <Footer />
    </Layout>
  );
};

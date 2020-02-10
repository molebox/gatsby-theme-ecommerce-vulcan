/** @jsx jsx */
import { jsx } from "theme-ui";
import GenericLayout from "../components/layouts/GenericLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import DeliveryAndReturnsSection from "../components/DeliveryAndReturnsSection";

export default () => {
  return (
    <GenericLayout>
      <Header />
      <Main>
        <DeliveryAndReturnsSection />
      </Main>
      <Footer />
    </GenericLayout>
  );
};

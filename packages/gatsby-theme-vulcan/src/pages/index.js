/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/Main";
import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import { useBreakpoints } from "react-breakpoints-hook";
import { breakpoints } from "../components/common-page-elements";

export default () => {
  let { xs, sm } = useBreakpoints(breakpoints);

  const mainContent = typeof window !== 'undefined' && xs || sm ? <Hero /> : <MainSection />;
  return <Main>{mainContent}</Main>;
};


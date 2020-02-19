/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

const Container = styled.section`
  grid-area: main;
  display: flex;
  position: relative;
  align-items: center;
  height: 100vh;
`;

const Image = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;

  & > img {
    object-fit: contain;
    object-position: 50% 50%;
  }
`;

const Overlay = styled.div`
  width: 100%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
`;

const OverlayText = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 6px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin: 1rem;
    letter-spacing: 6px;
  }
`;

export default () => {
  const home = useStaticQuery(query);
  const { images, title } = home.sanityHomePage;
  return (
    <Container>
      <Image fluid={images[0].asset.fluid} alt="Home page" />
      <Overlay>
        <OverlayText
          sx={{
            fontFamily: "heading"
          }}
        >
          {title}
        </OverlayText>
      </Overlay>
    </Container>
  );
};

export const query = graphql`
  query HeroQuery {
    sanityHomePage {
      title
      images {
        asset {
          fluid(maxHeight: 865) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

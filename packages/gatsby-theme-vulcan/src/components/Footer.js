/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";

const Container = styled.footer`
  grid-area: footer;
  height: 20em;
  width: auto;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
  grid-template-areas:
    " customerCare "
    " info "
    " social "
    "."
    "author ";

  font-size: 1.2em;

  justify-items: center;
  align-content: center;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "customerCare info info"
      "customerCare info info"
      "customerCare info info"
      "social social social"
      "author author author";
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "customerCare info social"
      "customerCare info social"
      "customerCare info social"
      "customerCare info social"
      "author author author";
    justify-items: center;
    width: 100%;
    align-content: space-around;
  }
`;

const Author = styled.div`
  grid-area: author;
  font-size: 0.6em;
`;

const CustomerCare = styled.div`
  grid-area: customerCare;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.6em;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Info = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.6em;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Social = styled.div`
  grid-area: social;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.6em;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default () => {
  const info = useStaticQuery(query);
  const { facebook, instagram } = info.sanityCompany;
  return (
    <Container
      sx={{
        backgroundColor: "primary",
        color: "white",
        marginTop: "2em",
        borderTop: "2px solid",
        borderColor: "accent"
      }}
    >
      <CustomerCare>
        <Link
          to="/contact"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1.5em",
            fontWeight: "heading",
            fontFamily: "heading",
            letterSpacing: "body",
            textTransform: "uppercase",
            width: "min-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
        >
          contact
        </Link>
        <Link
          to="/deliveryAndReturns"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1.5em",
            fontWeight: "heading",
            fontFamily: "heading",
            letterSpacing: "body",
            textTransform: "uppercase",
            width: "max-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
        >
          delivery + returns
        </Link>
      </CustomerCare>
      <Info>
        <Link
          to="/sizeGuide"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1.5em",
            fontWeight: "heading",
            fontFamily: "heading",
            letterSpacing: "body",
            textTransform: "uppercase",
            width: "max-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
        >
          size guide
        </Link>
        <Link
          to="/privacy"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1.5em",
            fontWeight: "heading",
            fontFamily: "heading",
            letterSpacing: "body",
            textTransform: "uppercase",
            width: "max-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
        >
          privacy policy
        </Link>
      </Info>
      <Social>
        <a
          href={facebook}
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1.5em",
            fontWeight: "heading",
            fontFamily: "heading",
            letterSpacing: "body",
            textTransform: "uppercase",
            width: "min-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
        >
          facebook
        </a>
        <a
          href={instagram}
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1.5em",
            fontWeight: "heading",
            fontFamily: "heading",
            letterSpacing: "body",
            textTransform: "uppercase",
            width: "min-content",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
        >
          instagram
        </a>
      </Social>
      <Author
        sx={{
          fontWeight: "heading",
          fontFamily: "heading",
          letterSpacing: "body",
          textTransform: "uppercase",
          width: "max-content",
          fontSize: "0.5em"
        }}
      >
        Created by{" "}
        <a
          sx={{
            color: "white"
          }}
          href="https://twitter.com/studio_hungry"
        >
          Hungry Bear Studio
        </a>
      </Author>
    </Container>
  );
};

export const query = graphql`
  query FooterInfoQuery {
    sanityCompany {
      facebook
      companyName
      instagram
    }
  }
`;

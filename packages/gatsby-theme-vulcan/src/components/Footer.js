/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";

const Container = styled.footer`
  grid-area: footer;
  height: 20em;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  grid-template-areas:
    "social"
    "customerCare"
    "info";

  justify-items: center;
  align-content: center;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "customerCare info info"
      "customerCare info info"
      "customerCare info info"
      "social social social";
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "customerCare info social"
      "customerCare info social"
      "customerCare info social"
      "customerCare info social";
    justify-items: center;
    width: 100%;
    align-content: space-around;
  }
`;

const CustomerCare = styled.div`
  grid-area: customerCare;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

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
  align-items: flex-start;
  justify-content: space-evenly;

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
            fontSize: "1em",
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
            fontSize: "1em",
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
        <Link
          to="/faq"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
          faq
        </Link>
      </CustomerCare>
      <Info>
        <Link
          to="/sizeGuide"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
            fontSize: "1em",
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
        <Link
          to="/terms"
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
          terms + conditions
        </Link>
      </Info>
      <Social>
        <a
          href={facebook}
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
            fontSize: "1em",
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
        <a
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
          pinterest
        </a>
      </Social>
      {/* <Other>
        <a
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
          {email}
        </a>
        <p
          sx={{
            color: "white",
            cursor: "crosshair",
            textDecoration: "none",
            fontSize: "1em",
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
          {phone}
        </p>
      </Other> */}
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

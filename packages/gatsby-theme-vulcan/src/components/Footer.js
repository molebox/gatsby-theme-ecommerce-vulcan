/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";

const Container = styled.div`
  grid-area: footer;
  height: 20em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  grid-template-areas:
    "social customerCare"
    "info other";

  justify-items: start;
  align-content: space-evenly;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "customerCare info info"
      "customerCare info info"
      "customerCare info info"
      "social social other";
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "customerCare info social other"
      "customerCare info social other"
      "customerCare info social other"
      "customerCare info social other";
    justify-items: center;
  }
`;

const CustomerCare = styled.div`
  grid-area: customerCare;
  margin-left: 2em;
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
  margin-left: 2em;
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
  margin-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Other = styled.div`
  grid-area: other;
  margin-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default () => {
  const info = useStaticQuery(query);
  const { phone, email } = info.sanityCompany;
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
          to="/payment"
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
          payment options
        </Link>
        <Link
          to="/shipping"
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
          shipping + delivary
        </Link>
        <Link
          to="/returns"
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
          returns
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
      <Other>
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
      </Other>
    </Container>
  );
};

export const query = graphql`
  query FooterInfoQuery {
    sanityCompany {
      email
      companyName
      phone
    }
  }
`;

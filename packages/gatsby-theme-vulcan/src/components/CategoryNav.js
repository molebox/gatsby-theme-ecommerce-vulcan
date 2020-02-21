/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width. 100%;
`;

export default ({ catNodes }) => {
  console.log({ catNodes });
  return (
    <Container>
      {catNodes.map(node => (
        <Link
          sx={{
            fontFamily: "heading",
            letterSpacing: "text",
            fontWeight: "bold",
            color: "primary",
            marginBottom: "1em",
            cursor: "crosshair",
            textDecoration: "none",
            "&:hover": {
              color: "primary",
              backgroundColor: "accent"
            }
          }}
          to={`category/${node.slug.current}`}
        >
          {node.title}
        </Link>
      ))}
    </Container>
  );
};

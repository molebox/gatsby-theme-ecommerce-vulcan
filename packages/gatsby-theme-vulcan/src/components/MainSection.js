/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { useSiteMetadata } from "./useSiteMetadata";
import { Grid } from "@horacioh/gatsby-theme-instagram";
import ProductCard from "./store/ProductCard";

const Heading = styled.h4`
  font-size: 1.4em;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;

  @media (min-width: 500px) {
    font-size: 2.6em;
  }

  @media (min-width: 700px) {
    font-size: 2.8em;
  }

  @media (min-width: 1280px) {
    font-size: 2.8em;
  }
`;

const Container = styled.section`
  height: 100%;
  margin-top: 2em auto;

  @media (min-width: 1280px) {
    margin: 5em auto;
  }
`;

const Image = styled(GatsbyImage)`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 90%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    width: auto;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    margin: 0 auto;
  }
`;

const Text = styled.h2`
  display: none;

  @media (min-width: 500px) {
    display: block;
    margin: 2em 1em;
    align-self: center;
    top: 65%;
    left: 45%;
    font-size: 2em;
    line-height: 80px;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  @media (min-width: 700px) {
    display: block;
    margin: 2em 1em;
    align-self: center;
    top: 60%;
    left: 38%;
    font-size: 2em;
    line-height: 90px;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  @media (min-width: 1280px) {
    display: block;
    margin: 2em 1em;
    align-self: center;
    font-size: 3.5em;
    line-height: 130px;
    align-self: baseline;
    top: 65%;
    left: 20%;
    right: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 100;
  }
`;

const Showcase = styled.section`
  margin: 2em;
  display: grid;
  grid-gap: 2em;
  width: auto;
  grid-template-columns: 1fr;
  margin: 0 auto;

  grid-auto-rows: auto;
  justify-self: center;
  justify-items: center;

  @media (min-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    margin. 2em;
  }
`;

const IntroSection = styled.section`
  display: grid;
  grid-row-gap: 7em;
  justify-content: center;
  width: auto;
  margin: 5em 0;

  @media (min-width: 1280px) {
    margin: 15em 0;
  }
`;

const FirstIntroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 2em;
  max-width: 1200px;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 2em;
    max-width: 1200px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;

  @media (max-width: 499px) {
    grid-row: 1;
  }

  & > h3 {
    font-size: 1.4em;
    margin-bottom: 1em;
  }

  & > p {
    font-size: 1em;
  }

  @media (min-width: 500px) {
    & > h3 {
      font-size: 1.8em;
    }

    & > p {
      font-size: 1.5em;
    }
  }

  @media (min-width: 700px) {
    & > h3 {
      font-size: 2em;
    }

    & > p {
      font-size: 1.3em;
    }
  }

  @media (min-width: 1280px) {
    justify-content: space-evenly;

    & > h3 {
      font-size: 1.2em;
    }

    & > p {
      font-size: 1.3em;
    }
  }
`;

const SecondIntroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 2em;
  max-width: 1200px;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 2em;
    max-width: 1200px;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;

  @media (min-width: 1280px) {
    width: 100%;
    max-width: 1000px;
    height: auto;
    justify-self: center;
    align-self: center;
  }
`;

export default () => {
  const home = useStaticQuery(query);
  const showcaseImages = home.sanityShowcase.products;

  const { tagline } = useSiteMetadata();
  const { images } = home.sanityHomePage;
  return (
    <Container>
      <Image fluid={images[0].asset.fluid} key="get a key" alt="add alt here">
        <Text
          sx={{
            fontFamily: "heading",
            letterSpacing: "text",
            fontWeight: "heading",
            color: "primary",
            textTransform: "uppercase"
          }}
        >
          {tagline}
        </Text>
      </Image>
      <IntroSection>
        <FirstIntroContainer>
          <ImageContainer>
            <GatsbyImage
              fluid={images[1].asset.fluid}
              key="get another key"
              alt="add alt here"
            />
          </ImageContainer>
          <TextContainer>
            <h3
              sx={{
                fontFamily: "heading",
                borderBottom: "solid 2px",
                borderWidth: "100%",
                padding: "0.5em"
              }}
            >
              First Intro
            </h3>
            <p
              sx={{
                fontFamily: "body",
                letterSpacing: "body"
              }}
            >
              Lorem ipsum dolor amet wayfarers narwhal slow-carb lomo la croix
              paleo, migas tumblr plaid portland selvage vice cloud bread.
              Biodiesel tumeric fanny pack, sriracha +1 tbh everyday carry pork
              belly retro etsy fixie shoreditch. Butcher succulents before they
              sold out, shaman poke fam fingerstache. Whatever venmo gentrify,
              waistcoat dreamcatcher shabby chic vegan.
            </p>
          </TextContainer>
        </FirstIntroContainer>
        <SecondIntroContainer>
          <TextContainer>
            <h3
              sx={{
                fontFamily: "heading",
                borderBottom: "solid 2px",
                borderWidth: "100%",
                padding: "0.5em"
              }}
            >
              Second Intro
            </h3>
            <p
              sx={{
                fontFamily: "body",
                letterSpacing: "body"
              }}
            >
              Lorem ipsum dolor amet wayfarers narwhal slow-carb lomo la croix
              paleo, migas tumblr plaid portland selvage vice cloud bread.
              Biodiesel tumeric fanny pack, sriracha +1 tbh everyday carry pork
              belly retro etsy fixie shoreditch. Butcher succulents before they
              sold out, shaman poke fam fingerstache. Whatever venmo gentrify,
              waistcoat dreamcatcher shabby chic vegan.
            </p>
          </TextContainer>
          <ImageContainer>
            <GatsbyImage
              fluid={images[2].asset.fluid}
              key="get another another key"
              alt="add alt here"
            />
          </ImageContainer>
        </SecondIntroContainer>
      </IntroSection>
      {/* <Heading
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "heading",
          textTransform: "uppercase",
          borderBottom: "solid 2px",
          borderColor: "primary",
          padding: "0.5em"
        }}
      >
        Showcase
      </Heading> */}
      {/* <Showcase>
        {showcaseImages.map((node, index) => (
          <ProductCard
            itemId={node.id}
            key={index + node.id}
            title={node.defaultProductVariant.title}
            // category={node.categories[0].title}
            description={node._rawBody.en}
            thumbnails={node.defaultProductVariant.thumbnails}
            price={node.defaultProductVariant.price}
            blurb={node.blurb.en}
            size={node.defaultProductVariant.size}
            onSalePrice={node.defaultProductVariant.onSalePrice}
          />
        ))}
      </Showcase> */}
      <Heading
        sx={{
          fontFamily: "heading",
          letterSpacing: "text",
          fontWeight: "heading",
          textTransform: "uppercase"
        }}
      >
        Instagram
      </Heading>
      <div
        sx={{
          padding: "1em"
        }}
      >
        <Grid />
      </div>
    </Container>
  );
};

export const query = graphql`
  query HomePageImageQuery {
    sanityHomePage {
      title
      images {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    sanityShowcase {
      title
      products {
        _rawBody(resolveReferences: { maxDepth: 10 })
        blurb {
          en
        }
        id
        defaultProductVariant {
          title
          price
          onSalePrice
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          thumbnails {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          size {
            title
          }
        }
      }
    }
  }
`;

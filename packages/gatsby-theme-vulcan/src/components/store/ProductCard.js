/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import BuyButton from '../snipcart/BuyButton';
import Card from "../Card";
import GatsbyImage from 'gatsby-image';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const MainImageContainer = styled.div`
    grid-area: mainImage;
`;

const ThumbnailConatiner = styled.div`
    grid-area: thumbnail;
`;

const Thumbnail = styled.div`
    max-width: 150px;
    max-height: 150px;
    width: 150px;
    height: auto;

    cursor: crosshair;
`;

const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
    "mainImage mainImage mainImage mainImage "
    "thumbnail thumbnail thumbnail thumbnail"
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;

`;

const Category = styled.div``;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Title = styled.h2`

`;

const Price = styled.div``;

const Description = styled.p``;

export default ({title, category, description, price, mainImage, thumbOne, thumbTwo, thumbThree, thumbFour}) => {

    return (
        <Container>
            <Images>
                <MainImageContainer>

                </MainImageContainer>
                <ThumbnailConatiner>

                </ThumbnailConatiner>
            </Images>
            <Info>
                <Header>
                    <Title>{title}</Title>
                    <Category>{category}</Category>
                </Header>
                    <Description>{description}</Description>
                    <Price>{price}</Price>
                <BuyButton />
            </Info>

        </Container>
    )
}
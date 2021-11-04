import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import LandingLayout, {
  LandingBackground,
  LandingForeground,
  LandingPadding,
} from "../components/layouts/LandingLayout";

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentRight = styled.div``;

const Title = styled.h1`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 3.875rem;
  margin: 0;
  padding: 0;
  letter-spacing: 0;
  color: #1473e6;
`;

const Subtitle = styled.h2`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 2.156rem;
  margin: 0;
  padding: 0;
  letter-spacing: 0;
  color: #5ead65;
`;

const Content = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 0.85rem;
  color: #797d81;
  margin: 2.78vh 0;
  padding: 0;
  max-width: 30vw;
  word-wrap: break-word;
`;

const CTAButton = styled.button`
  background-color: #5a8bea;
  text-transform: uppercase;
  padding: 25px 30px;
  border-radius: 64px;
  border: none;
  width: fit-content;
  height: 7.4vh;

  font-family: "Open Sans";
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.46px;
  line-height: 0;
  color: #ffffff;
`;

const ForeImg = styled.div`
  width: 68vw;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "Background" }, extension: { eq: "png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            quality: 100
          )
        }
      }
      fg: file(name: { eq: "Foreground" }, extension: { eq: "png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            quality: 100
          )
        }
      }
    }
  `);

  return (
    <>
      <LandingBackground>
        <GatsbyImage
          image={data.bg.childImageSharp.gatsbyImageData}
          objectFit="cover"
        />
      </LandingBackground>
      <LandingLayout>
        <LandingPadding>
          {/* TODO: Add Navbar Here (Probably) */}
          <ContentLeft>
            <Title>Sheridan</Title>
            <Subtitle>Developer Student Club</Subtitle>
            <Content>
              Developer Student Clubs (DSC) is a program presented by Google
              developers. Students from all Sheridan programs with an interest
              in growing as a developer are welcome!
            </Content>
            <CTAButton>General Member Application</CTAButton>
          </ContentLeft>
          <ContentRight></ContentRight>
        </LandingPadding>
      </LandingLayout>
      <LandingForeground>
        <ForeImg>
          <GatsbyImage
            image={data.fg.childImageSharp.gatsbyImageData}
            objectFit="cover"
          />
        </ForeImg>
      </LandingForeground>
    </>
  );
};

export default IndexPage;

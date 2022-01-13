import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import LandingLayout, {
  LandingBackground,
  LandingForeground,
  LandingPadding,
} from "../components/layouts/LandingLayout";
import Calendar from "../components/common/Calendar";
import HStack from "../components/common/layout/HStack";
import VStack from "../components/common/layout/VStack";
import SmallEventCard from "../components/common/SmallEventCard";
import EventCard from "../components/common/EventCard";

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    position: absolute;
    height: 100vh;
    width: 100%;
    text-align: center;
    align-items: center;
    overflow: hidden;
  }
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 3vh 17vw;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 5rem;
  margin: 0;
  padding: 0;
  letter-spacing: 0;
  color: #1473e6;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 3rem;
  margin: -2vh 0 0 0;
  padding: 0;
  letter-spacing: 0;
  color: #5ead65;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Content = styled.p`
  font-family: "Poppins";
  font-weight: 200;
  font-size: 1.15rem;
  color: #797d81;
  margin: 2.78vh 0;
  padding: 0;
  max-width: 30vw;
  word-wrap: break-word;

  @media (max-width: 768px) {
    max-width: 75vw;
    font-size: 0.95rem;
  }
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
  width: 63vw;
  max-height: 558px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ForeImgMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100vw;
    overflow: hidden;
  }
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
      fgm: file(name: { eq: "ForegroundMobile" }, extension: { eq: "png" }) {
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
          // objectFit="cover"
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
          <ContentRight>
            <VStack>
              <HStack>
                <Calendar month="October" activeDate={4} startingDay={4} />
                <VStack>
                  <SmallEventCard
                    title="Tech Interview 101"
                    date="Oct 7, 2021"
                    color="#5EAD65"
                  />
                  <SmallEventCard
                    title="Android Study Jam"
                    date="Oct 17, 2021"
                  />
                </VStack>
              </HStack>
              <EventCard
                title="Create Series - Introduction to GoLang & APIs"
                date="Oct 21, 2021"
              />
            </VStack>
          </ContentRight>
        </LandingPadding>
      </LandingLayout>
      <LandingForeground>
        <ForeImg>
          <GatsbyImage
            image={data.fg.childImageSharp.gatsbyImageData}
            objectFit="fit"
          />
        </ForeImg>
        <ForeImgMobile>
          <GatsbyImage
            image={data.fgm.childImageSharp.gatsbyImageData}
            objectFit="fit"
          />
        </ForeImgMobile>
      </LandingForeground>
    </>
  );
};

export default IndexPage;

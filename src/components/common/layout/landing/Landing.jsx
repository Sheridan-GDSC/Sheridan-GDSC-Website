import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import LandingLayout, {
  LandingBackground,
  LandingForeground,
  LandingPadding,
  ContentLeft,
  ContentRight,
  Title,
  Subtitle,
  Content,
  CTAButton,
  ForeImg,
  ForeImgMobile,
} from "./LandingStyles";
import Calendar from "../../Calendar";
import HStack from "../HStack";
import VStack from "../VStack";
import SmallEventCard from "../../SmallEventCard";
import EventCard from "../../EventCard";
import { content } from "../../../../services/content";

const Landing = () => {

  const { landing } = content

  const date = new Date();
  const activeDate = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });;
  const startingDay =
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const monthLength =
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

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
    <div id="landing">

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
              { landing.main }
            </Content>
            <CTAButton>General Member Application</CTAButton>
          </ContentLeft>
          <ContentRight>
            <VStack>
              <HStack>
                <Calendar month={month} activeDate={activeDate} startingDay={startingDay} monthLength={monthLength} />
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
    </div>
  )
}

export default Landing;
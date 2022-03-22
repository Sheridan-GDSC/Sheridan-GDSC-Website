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

const Landing = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              url
            }
          }
        }
      }
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
  console.log(data.events);
  const { edges } = data.events;
  return (
    <div>
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
          <ContentRight>
            <VStack>
              <HStack>
                <Calendar month="October" activeDate={4} startingDay={4} />
                <VStack>
                  <SmallEventCard event={edges[2]} color="#5EAD65" />
                  <SmallEventCard event={edges[1]} color="#5a8bea" />
                </VStack>
              </HStack>
              <EventCard event={edges[0]} />
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
  );
};

export default Landing;

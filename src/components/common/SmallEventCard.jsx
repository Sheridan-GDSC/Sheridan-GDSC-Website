import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Open Sans";
  padding: 32px 48px;
  background-color: ${(props) => props.color};
  color: #ffffff;
  border-radius: 60px;
  box-shadow: -5px 5px 10px #00000029;
  max-height: 112px;
`;

const Date = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 0.85vw;
  overflow: hidden;
  white-space: nowrap;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 1.25vw;
  overflow: hidden;
  white-space: nowrap;
`;

const Button = styled.button`
  background-color: #fff;
  text-transform: uppercase;
  padding: 13px 36px;
  border-radius: 64px;
  border: none;
  width: fit-content;
  font-size: 0.75rem;
  color: ${(props) => props.color};
  justify-self: flex-end;
  margin-top: 10px;
`;

const Link = styled.a``;

const SmallEventCard = ({ event, color }) => {
  return (
    <Card color={color}>
      <Date>{event.frontmatter.date}</Date>
      <Title>{event.frontmatter.title}</Title>
      <Button color={color} onClick={event.frontmatter.slug}>
        <Link target="_blank">DETAILS</Link>
      </Button>
    </Card>
  );
};

export default SmallEventCard;

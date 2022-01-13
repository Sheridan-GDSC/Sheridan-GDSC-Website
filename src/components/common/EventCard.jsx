import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans";
  padding: 32px 48px;
  background-color: #fff;
  color: #797d81;
  border-radius: 60px;
  box-shadow: -5px 5px 10px #00000029;
  width: 79%;
  margin: -3vh 0 0 0;
`;

const Date = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 0.85vw;
  color: #5a8bea;
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
  background-color: #5ead65;
  text-transform: uppercase;
  padding: 13px 36px;
  border-radius: 64px;
  border: none;
  width: fit-content;
  font-size: 0.75rem;
  color: #fff;
  justify-self: flex-end;
  margin-top: 10px;
`;

const EventCard = ({ title = "", date = "", url = "" }) => {
  return (
    <Card>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Button onClick={url}>DETAILS</Button>
    </Card>
  );
};

export default EventCard;

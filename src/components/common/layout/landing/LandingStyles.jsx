import styled from "styled-components";

const LandingLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LandingPadding = styled.div`
  display: inherit;
  flex-direction: inherit;
  z-index: inherit;
  padding: 6.5vh 5vw;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const LandingBackground = styled.div`
  position: relative; //Was absolute
  left: 0;
  top: 0;

  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  width: 100vw;
  z-index: 0;

  pointer-events: none;

  // @media (max-width: 768px) {
  //   display: none;
  // }
`;

export const LandingForeground = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  align-items: flex-end;

  pointer-events: none;
`;

export const ContentLeft = styled.div`
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

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 3vh 17vw;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
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

export const Subtitle = styled.h2`
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

export const Content = styled.p`
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

export const CTAButton = styled.button`
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

export const ForeImg = styled.div`
  width: 63vw;
  max-height: 558px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ForeImgMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100vw;
    overflow: hidden;
  }
`;

export default LandingLayout
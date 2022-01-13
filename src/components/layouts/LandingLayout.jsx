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
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  width: 100vw;
  z-index: 0;

  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
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

export default LandingLayout;

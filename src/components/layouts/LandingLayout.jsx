import styled from "styled-components";

const LandingLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  padding: 6.5vh 5vw;
  z-index: 1;
`;

export const LandingBackground = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`;

export const LandingForeground = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  width: 100vw;
  z-index: 2;
`;

export default LandingLayout;

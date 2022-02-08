import * as React from "react";
import styled from "styled-components";

const HStacker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  div {
    margin-right: ${(props) => props.margin};
  }
`;

const HStack = ({
  children,
  margin = "20px",
  justify = "flex-start",
  align = "flex-start",
}) => {
  return (
    <HStacker justify={justify} align={align} margin={margin}>
      {children}
    </HStacker>
  );
};

export default HStack;

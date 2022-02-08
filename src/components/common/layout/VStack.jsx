import * as React from "react";
import styled from "styled-components";

const VStacker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  div {
    margin-bottom: ${(props) => props.margin};
  }
`;

const VStack = ({
  children,
  margin = "20px",
  justify = "flex-start",
  align = "flex-start",
}) => {
  return (
    <VStacker justify={justify} align={align} margin={margin}>
      {children}
    </VStacker>
  );
};

export default VStack;

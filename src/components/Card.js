import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #D8D8D8;
  border-radius: 4px;
  height: 100%;
`;

const Card = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
);

export default Card;

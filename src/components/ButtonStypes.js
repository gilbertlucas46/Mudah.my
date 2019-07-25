import React from 'react';
import styled from 'styled-components';

const ButtonHollow = styled.div`
  color: #E01A1A;
`;

const ButtonSolid = styled.div`
  background-color: #E01A1A;
  color: white;
  margin:auto;
  max-width: 100%;
  height: 34px;
  line-height: 34px;
`;

const Button = styled.button`
  border: 1px solid #E01A1A;
  height: 36px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  text-align: left;
  text-indent: 32px;
  padding: 0;
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  span {
    width: 100%;
    padding-left: 15px;
  }
  img {
    position: absolute;
    left: 10px;
    margin: auto;
    top: 0;
    bottom: 0;
  }
`;

export const BtnHollow = ({ children }) => (
  <Button><ButtonHollow>{children}</ButtonHollow></Button>
);
export const BtnSolid = ({ children }) => (
  <Button><ButtonSolid>{children}</ButtonSolid></Button>
);

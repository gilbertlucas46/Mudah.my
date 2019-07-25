import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  article {
    @media (min-width: 1200px) {
      padding: 48px 0;
      .gridview {
        grid-template-columns: repeat(6, 142px);
        grid-gap: 12.5px;
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      .gridview {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 12.5px;
      }
    }
    @media (max-width: 1199px) {
      padding: 57px 13px;
    }
    @media (max-width: 991px) {
      .gridview {
        grid-template-columns: 1fr 1fr;
        grid-gap: 12.5px;
      }
    }
  }
`;

const Container = ({ children }) => (
  <Main>
    <article>
      {children}
    </article>
  </Main>
);

export default Container;

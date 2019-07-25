import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Breadcrumb = styled.ol`
  padding: 0;
  margin-left: 0;
  li {
    list-style-type: none;
    display: inline-block;
    &:after {
      content: '>';
      padding: 0 5px;
    }
    &:last-of-type{
      &:after {
        display: none;
      }
      a {
        text-decoration: underline;
      }
    }
    a {
      color: #333333;
      text-decoration:none;
      font-size:.7rem;
    }
  }
`;

const Breadcrumbs = ({ links }) => {
  const breadcrumbs = [
    { title: 'Home', link: '/' },
    { title: 'Games & Console', link: '?games-console' },
    { title: 'Electronics', link: '?electronics' },
    { title: `${links.title}`, link: '#' },
  ];
  return (
    <Breadcrumb role="navigation" aria-label="breadcrumbs" className="breadCrumbs">
      {breadcrumbs.map(item => (
        <li key={item.title}>
          <Link to={`${item.link}`}>{item.title}</Link>
        </li>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from './Card';
// import Overdrive from 'react-overdrive';

const IMAGE_DUMMY_PATH = 'https://picsum.photos/id/';
// I cound have used https://cloudinary.com or https://unsplash.com to store
// the photos and use their API's but that's too much work for just displaying dummy images

const Product = styled.div`
  a {
    text-decoration: none;
    color: #4D4D4D;
  }
  .desc{
    padding: 0.4rem 0.7rem;
    h2 {
      font-size: .8rem;
      margin-bottom: 0.5rem;
      font-family: 'Roboto', sans-serif;
    }
    .price {
      font-family: 'Roboto', sans-serif;
      color: #E01A1A;
      font-weight: 500;
    }
  }
  .img {
    height: 78px;
    overflow: hidden;
    position: relative;
    img {
      margin-bottom:0;position: absolute;top:0;bottom:0;left: 0;right: 0;margin: auto;
    }
  }
  
`;
const MAX_LENGTH = 28;

const Products = ({ products }) => (
  <>
    {products.map(detail => (
      <Product key={detail.id}>
        <Link to={`/${detail.id}`}>
          <Card>
            <div className="img">
              <img src={`${IMAGE_DUMMY_PATH}${detail.id}/242/180/`} alt={`${detail.attributes.title.substring(0, MAX_LENGTH)}`}/>
            </div>
            <div className="desc">
              <h2>
                {`${detail.attributes.title.substring(0, MAX_LENGTH)}...`}
              </h2>
              <div className="price">{detail.attributes.price}</div>
            </div>
          </Card>
        </Link>
      </Product>
    ))}
  </>
);

export default Products;

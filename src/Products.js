import React from 'react';
import PropTypes from 'prop-types';

const IMAGE_PATH = 'https://via.placeholder.com/150/?text=';

// I cound have used https://cloudinary.com or https://unsplash.com to store
// the photos and use their API's but that's too much work for just displaying dummy images

const Products = ({ products }) => (
  <div>
    <h3>{products.title}</h3>
    <img src={`${IMAGE_PATH}${products.links.image.split('/image/').join('')}`} alt={products.title} />
  </div>
);

export default Products;

Products.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

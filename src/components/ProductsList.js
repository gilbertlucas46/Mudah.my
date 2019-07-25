import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Products from './Products';
import Container from './Container';
import LoadingSpinner from './LoadingSpinner';

const Contents = styled.div`
  max-width: 914px;
  margin:auto;
  h3 {
      margin-bottom: 18px;
      font-size:1.2rem;
      font-weight:700;
    }
`;
// used PureComponent for shallow checking, good for performance
class ProductsList extends PureComponent {
  state = {
    products: [],
    loading: true,
  }

  async componentDidMount() {
    // try catch just to make sure we had no errors
    try {
      const res = await fetch('http://5b35ede16005b00014c5dc86.mockapi.io/list');
      // wait for json to be ready
      const product = await res.json();
      // setting our state to the data result which is just a property on that object
      this.setState({
        loading: false,
        products: product.data,
      });
      // console.log(product.data.attributes)
    } catch (e) {
      // console.log(e);
    }
  }


  render() {
    const { products, loading } = this.state;
    return (
      <Container>
        <Contents>
          <h3>LISTING</h3>
          <div className="gridview">
            {loading ? <LoadingSpinner/> : <Products products={products} />}
          </div>
        </Contents>
      </Container>
    );
  }
}

export default ProductsList;

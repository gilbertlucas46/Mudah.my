import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumbs';

// icons
import flag from '../img/icons/flag.svg';

const IMAGE_DUMMY_PATH = 'https://picsum.photos/id/';

const ProductContainer = styled.div`
  max-width: 993px;
  margin:auto;
  .description {
    @media (min-width: 1200px){
      grid-template-columns: 664px 326px;
      grid-gap: 23px;
      display: grid;
    }
    p {
      font-family: 'Open Sans', sans-serif;
      font-size: .9rem;
      line-height: 1.2rem;
    }
    
    .tabs{
      position: relative;
      margin: 24px 0 15px;
      h4 {
        color: #E01A1A;
        position: relative;
        padding-bottom: 15px;
        font-size: 1.2rem;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 0;
        &:before {
          content: '';
          height: 2px;
          width: 100%;
          position: absolute;
          background-color: #E01A1A;
          bottom: 0;
        }
      }
      a {
        position: absolute;
        top:0;
        right: 0;
        color: #707070;
        text-decoration: none;
        font-size: 1rem;
        line-height: 36px;
        img {
          max-width:18px;
          margin: 2px 4px -4px;
        }
      }
    }
  }
  .productHeader {
    @media (min-width:1200px) {
      grid-template-columns: 664px 326px;
      grid-gap: 23px;
      display: grid;
    }
    h1 {
      font-size: 1.4rem;
      font-weight:700;
    }
  }
`;
const ProductInfo = styled.div`
  @media (min-width: 1200px){
    grid-template-columns: 664px 326px;
    grid-gap: 23px;
    display: grid;
  }
  .info, .img {
    border: 1px solid #F0F0EE;
  }
  .img {
    position: relative;
    overflow: hidden;
    @media (max-width: 1199px) {
      max-height: 240px;
      min-height: 240px;
      overflow: hidden;
    }
    img {
      margin-bottom: -5px;
      @media (max-width: 1199px) {
        width: 100%;
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        margin:auto;
      }
      @media (min-width: 1200px)  {
        max-height: 500px;
      }
    }
  }
`;


class ProductView extends Component {
  state = {
    productInfo: [],
  }

  async componentDidMount() {
    // try catch just to make sure we had no errors
    const { match } = this.props;
    try {
      const res = await fetch(`http://5b35ede16005b00014c5dc86.mockapi.io/view/${match.params.id}`);
      // wait for json to be ready
      const productInfo = await res.json();
      // setting our state to the data result which is just a property on that object
      this.setState({
        productInfo: productInfo.data,
      });
    } catch (e) {
      console.warn(e);
    }
  }

  render() {
    const { match } = this.props;
    const { productInfo } = this.state;
    let info = '';
    Object.keys(productInfo).map((key) => {
      if (key === 'attributes') {
        info = productInfo[key];
      }
      return false;
    });

    return (
      <>
        <Container page={match}>
          <ProductContainer>
            <div className="productHeader">
              <div>
                <Breadcrumb links={info}/>
                <h1 className="productName">{info.title}</h1>
              </div>
            </div>
            <ProductInfo>
              <div className="img">
                <img src={`${IMAGE_DUMMY_PATH}${match.params.id}/662/499/`} alt={`${info.title}`}/>
              </div>
              <div className="info">
                <ContactSection info={info}/>
              </div>
            </ProductInfo>
            <div className="description">
              <div>
                <div className="tabs">
                  <h4>DESCRIPTION</h4>
                  <a href="#" area-label="Report Ad">
                    <img src={flag} alt="Report Ad"/>
                      Report Ad
                  </a>
                </div>
                <p>{ info.description }</p>
              </div>
            </div>
          </ProductContainer>
        </Container>
      </>
    );
  }
}

export default ProductView;

/* I don't have enough time to finish related products below
  so I I think I'll just explain how how going to work with it.

  I also haven't finished the mobile version but I'm 100% sure I can do it.
*/
// TODO: Create new component for the similar items
// TODO: Do another fetch there based on the match.params.id /:id
// ? its almost going to be similar with this component with the use of fetch async await
// TODO: Import {similarProducts } component here

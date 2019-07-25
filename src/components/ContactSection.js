import React from 'react';
import styled from 'styled-components';

// icons
// I normaly embed the svg's, but for the sake of simpliness I just imported them
import heart from '../img/icons/heart.svg';
import share from '../img/icons/share.svg';
import profile from '../img/icons/profile.svg';
import phone from '../img/icons/phone.svg';
import mail from '../img/icons/mail.svg';
import chat from '../img/icons/chat.svg';
// buttons
import { BtnHollow, BtnSolid } from './ButtonStypes';

const Section = styled.section`
  margin-bottom: 1.2rem;
  ul {
      margin:0;
      padding-top:1.2rem;
      li {
        display: inline-block;
        list-style-type: none;
        width: 50%;
        a {
          color: #707070;
          text-decoration: none;
        }
        span {
          display: block;
          position: relative;
          padding-left: 32px;
          img {
            max-width: 25px;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 28px;
            margin: auto;
          }
        }
      }
    }
  .NavSection {
    padding : 1rem 1.9rem .4rem;
    margin-bottom: 1.4rem;
    border-bottom: 1px solid #F0F0EE;
    > .itemName {
      div {
        line-height: 1rem;
        margin-bottom: .5rem;
      }
    }
    .itemName {
      color: #707070;
      font-size: .8rem;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: .8rem;
      .userInfo {
        display: grid;
        grid-template-columns: 48px 1fr;
        grid-gap: 10px;
        img {
          margin: 0;
        }
        .userName {
          color: #333333;
          font-size: .9rem;
        }
      }
      .price {
        color: #E01A1A;
        font-size: 20px;
        font-weight: 700;
      }
      .itemDesc {
        font-size: .9rem;
        color: #333333;
      }
    }
  }
  .contactSection {
    font-family: 'Open Sans', sans-serif;
    padding : 0 1.9rem;
    h6 {
      color: #333333;
      font-size: .8rem;
      margin-bottom: .6rem;
    }
    img {
      max-width: 25px;
    }
  }
`;


const ContactSection = ({ info }) => (
  <Section>
    <ul>
      <li>
        <a href="#">
          <span>
            <img src={heart} alt="wishlist"/>
            <span>Wishlist</span>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>
            <img src={share} alt="wishlist"/>
            <span>Share</span>
          </span>
        </a>
      </li>
    </ul>
    <div className="NavSection">
      <div className="itemName">
        <div>Price</div>
        <div className="price">{info.price}</div>
      </div>
      <div className="itemName">
        <div>Item condition</div>
        <div className="itemDesc">{info.condition}</div>
      </div>
      <div className="itemName">
        <div>Item location</div>
        <div className="itemDesc">{info.location}</div>
      </div>
      <div className="itemName">
        <div>Seller info</div>
        <div className="userInfo">
          <img src={profile} alt="wishlist"/>
          <div>
            <div className="userName">{info.seller_name}</div>
            <div className="sellerType">{info.seller_type}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="contactSection">
      <h6>Interested with the ad? Contact the seller</h6>
      <BtnHollow>
        <div>
          <img src={phone} alt="wishlist"/>
          <span>{info.phone}</span>
        </div>
      </BtnHollow>
      <BtnHollow>
        <div>
          <img src={mail} alt="wishlist"/>
          <span>Email</span>
        </div>
      </BtnHollow>
      <BtnSolid>
        <div>
          <img src={chat} alt="wishlist"/>
          <span>Chat</span>
        </div>
      </BtnSolid>
    </div>
  </Section>
);

export default ContactSection;

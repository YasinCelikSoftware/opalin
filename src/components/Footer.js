import React from 'react';
import '../assets/css/Footer.css';
import {Button, Col, Container, Row} from 'reactstrap';
import CreateAccount from './CreateAccount';
import FeaturedIcons from './FeaturedIcons';
import FooterLists from './FooterLists';

function Footer () {
  return (
    <div className="footer">
      <Container>
        <Row>
          <div className="footer__heading">
            <h3>Grow your startup the right way.</h3>
            <p>
              Our tools are packed with epic features. So you can focus on your most important work.
            </p>
          </div>
        </Row>
        <FeaturedIcons />
        <CreateAccount />
        <FooterLists />
      </Container>
    </div>
  );
}

export default Footer;

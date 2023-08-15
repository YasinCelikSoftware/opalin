import React from 'react';
import {Col, Row} from 'reactstrap';

function FooterLists () {
  return (
    <Row className="footer__lists">
      <Col md="5">
        <h6>
          Opalin ®
        </h6>
        <p>
          We're a completely remote company, working across twenty countries with over 20,000 customers.
        </p>
      </Col>
      <Col md="2" className="footer__list">
        <h6>Info</h6>
        <ul>
          <li>Gettin Started</li>
          <li>Resources</li>
          <li>Design</li>
          <li>Tutorials</li>
          <li>Pricing</li>
        </ul>
      </Col>
      <Col md="2" className="footer__list">
        <h6>Support</h6>
        <ul>
          <li>Documentation</li>
          <li>Requirements</li>
          <li>License</li>
          <li>Updates</li>
          <li>Contact</li>
        </ul>
      </Col>
      <Col md="2" className="footer__list">
        <h6>Connect</h6>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Medium</li>
          <li>GitHub</li>
        </ul>
      </Col>
    </Row>
  );
}

export default FooterLists;

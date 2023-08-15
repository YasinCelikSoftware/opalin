import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import '../assets/css/Partners.css';

function Partners () {
  return (
    <div className="partners">
      <Container>
        <Row>
          <div className="partners__heading">
            <h2>Over 20,000 Paying Customers</h2>
            <p>
              Thousands of the most succesful companies rely on our service.
            </p>
          </div>
          <Col md="3" sm="6">
            <img
              className="partner__image"
              src="https://preview.uiuxassets.com/opalin/media/content/trusted-company-dark.png"
              alt="partner"
            />
          </Col>
          <Col md="3" sm="6">
            <img
              className="partner__image"
              src="https://preview.uiuxassets.com/opalin/media/content/trusted-company-dark.png"
              alt="partner"
            />
          </Col>
          <Col md="3" sm="6">
            <img
              className="partner__image"
              src="https://preview.uiuxassets.com/opalin/media/content/trusted-company-dark.png"
              alt="partner"
            />
          </Col>
          <Col md="3" sm="6">
            <img
              className="partner__image"
              src="https://preview.uiuxassets.com/opalin/media/content/trusted-company-dark.png"
              alt="partner"
            />
          </Col>
          <Col md="12" className="partners__wideImage">
            <img
              alt="partner img"
              className="partners__image"
              src="https://preview.uiuxassets.com/opalin/media/content/customers.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners;

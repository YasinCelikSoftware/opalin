import React from 'react';
import '../assets/css/Present.css';
import {Col, Container, Row} from 'reactstrap';

function Present () {
  return (
    <div className="present">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md="6">
            <div className="present__heading">
              <h2>Present Your Product</h2>
              <p>
                Opalin helps you present your business in a wide variety of ways. Display full-width images, divide content in a single or multiple columns, anything to make your product or service stand out!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://preview.uiuxassets.com/opalin/media/content/opalin-dashboard.png"
              className="present__image"
              alt="present image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Present;

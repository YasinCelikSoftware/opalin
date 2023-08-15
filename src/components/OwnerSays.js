import React from 'react';
import '../assets/css/OwnerSays.css';
import {Col, Container, Row} from 'reactstrap';

function OwnerSays () {
  return (
    <div className="ownerSays">
      <Container fluid>
        <Row>
          <Col md="6" className="ownerSays__info">
            <div className="ownerSays__innerInfo">
              <h3>Danielle Mayer, business owner, says:</h3>
              <h2 className="ownerSays__sentence">
                "Support is fantastic. Nothing but great results!"
              </h2>
            </div>
          </Col>
          <Col md="6">
            <img
              className="ownerSays__image"
              src="https://preview.uiuxassets.com/opalin/media/bg/image-03@2x.jpg"
              alt="owner"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OwnerSays;

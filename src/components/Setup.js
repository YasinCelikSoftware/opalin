import React from 'react';
import '../assets/css/Setup.css';
import {Col, Container, Row} from 'reactstrap';
import SetupCard from './SetupCard';

function Setup () {
  return (
    <div className="setup">
      <Container>
        <Row>
          <div className="setup__heading">
            <h2>5-Minutes Setup</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
          </div>
          <Col md="3">
            <SetupCard
              title="Step 1"
              heading="Download"
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Col>
          <Col md="3">
            <SetupCard
              title="Step 2"
              heading="Customize"
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Col>
          <Col md="3">
            <SetupCard
              title="Step 3"
              heading="Upload"
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Col>
          <Col md="3">
            <SetupCard
              className={'active'}
              title="Step 4"
              heading="Done!"
              text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Setup;

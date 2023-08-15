import React from 'react';
import {Col, Row} from 'reactstrap';

function CreateAccount () {
  return (
    <Row className="mt-5">
      <Col className="footer__createAccount px-5">
        <div className="footer__createAccountInfo">
          <h2>Ready to get started?</h2>
          <p>Start your free 15-days trial today.</p>
        </div>
        <button className="footer__createAccountButton">
          Create An Account
        </button>
      </Col>
    </Row>
  );
}

export default CreateAccount;

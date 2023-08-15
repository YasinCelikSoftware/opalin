import React from 'react';
import '../assets/css/Timeline.css';
import {Col, Container, Row} from 'reactstrap';

function Timeline () {
  return (
    <div className="timeline">
      <Container>
        <Row>
          <div className="timeline__heading">
            <h2>Timeline</h2>
            <h6>
              The best stories are told from start to finish, that's why we keep track of history.
            </h6>
          </div>

          <div className="timeline__cols d-flex">
            <Col md="3" className="timeline__oneFourthCol">
              <h5 className="timeline__colHeading">
                Research
              </h5>
              <p className="timeline__colParagraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </Col>
            <Col md="3" className="timeline__oneFourthCol">
              <h5 className="timeline__colHeading">
                Ideation
              </h5>
              <p className="timeline__colParagraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur mollit.
              </p>
            </Col>
            <Col md="3" className="timeline__oneFourthCol">
              <h5 className="timeline__colHeading">
                Development
              </h5>
              <p className="timeline__colParagraph">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col md="3" className="timeline__oneFourthCol">
              <h5 className="timeline__colHeading">
                Launch
              </h5>
              <p className="timeline__colParagraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </Col>

          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Timeline;

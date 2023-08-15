import React from 'react';
import '../assets/css/Hero.css';
import {Button, Col, Container, Row} from 'reactstrap';

function Hero () {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col md="6" className="hero__info">
            <div className="hero__innerInfo">
              <h2>Opalin HTML Template</h2>
              <h4>
                A minimal and responsive HTML5 landing page built on lightweight, clean and customizable code.
              </h4>
              <Button className="hero__button">Get Started</Button>
            </div>
          </Col>
          <Col md="6">
            <img
              className="hero__image"
              src="https://preview.uiuxassets.com/opalin/media/content/hero-illustration.png"
              alt="coding"
            />
          </Col>
        </Row>
        <div className="hero__padding">
          <Row>
            <Col md="6" className="hero__info">
              <div className="hero__innerInfo">
                <h2>Custom Framework</h2>
                <h4>
                  {' '}
                  Everything is neatly organized in Sass and has been heeavily focused on performances.
                </h4>
              </div>
            </Col>
            <Col md="6">
              <img
                className="hero__image"
                alt="code2"
                src="https://preview.uiuxassets.com/opalin/media/content/editor.png"
              />
            </Col>
          </Row>
          <Row className="pt-5">
            <Col md="6">
              <img
                className="hero__image"
                alt="code2"
                src="https://preview.uiuxassets.com/opalin/media/content/sketch.png"
              />
            </Col>
            <Col md="6" className="hero__info">
              <div className="hero__innerInfo">
                <h2>Designed In Sketch</h2>
                <h4>
                  {' '}
                  100% of this HTML template, including all modules and components have been designed in Sketch.
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

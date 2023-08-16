import React from 'react';
import '../assets/css/Hero.css';
import {Button, Col, Container, Row} from 'reactstrap';
import {useTranslation} from 'react-i18next';

function Hero () {
  const {t} = useTranslation ();
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col md="6" className="hero__info">
            <div className="hero__innerInfo">
              <h2>{t ('opalin')}</h2>
              <h4>
                {t ('minimal')}
              </h4>
              <Button className="hero__button">{t ('started')}</Button>
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
                <h2>{t ('customFramework')}</h2>
                <h4>
                  {t ('everything')}
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
                <h2>{t ('sketch')}</h2>
                <h4>
                  {t ('100')}
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

import React from 'react';
import {Col, Row} from 'reactstrap';
import FormatShapesIcon from '@mui/icons-material/FormatShapesRounded';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import DoneIcon from '@mui/icons-material/Done';

function FeaturedIcons () {
  return (
    <Row>
      <Col md="3" sm="6" className="footer__featureIcon">
        <div className="footer__innerFeatureIcon">
          <FormatShapesIcon />
        </div>
        <span>Minimal Design</span>
      </Col>
      <Col md="3" sm="6" className="footer__featureIcon">
        <div className="footer__innerFeatureIcon">
          <NetworkCheckIcon />
        </div>
        <span>Rocket Fast</span>
      </Col>
      <Col md="3" sm="6" className="footer__featureIcon">
        <div className="footer__innerFeatureIcon">
          <LineStyleIcon />
        </div>
        <span>Framework</span>
      </Col>
      <Col md="3" sm="6" className="footer__featureIcon">
        <div className="footer__innerFeatureIcon">
          <DoneIcon />
        </div>
        <span>Full Validated</span>
      </Col>
    </Row>
  );
}

export default FeaturedIcons;

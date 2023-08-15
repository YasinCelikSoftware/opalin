import React from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

function SetupCard({title, heading, text, className}) {
  return (
    <Card className={'my2 ' + className}>
      <CardBody>
        <CardTitle tag="p">{title}</CardTitle>
        <CardTitle tag="h5">
          {heading}
        </CardTitle>
        <CardText>
          {text}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default SetupCard;

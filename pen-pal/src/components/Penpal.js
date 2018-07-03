import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Friend = props => {
  return (
    <Card>
      <CardImg top width="100%" src={props.picture} alt="broken image" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.address}</CardText>
      </CardBody>
    </Card>
  );
};

export default Friend;

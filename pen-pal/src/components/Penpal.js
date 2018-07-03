import React, { Component } from "react";
import "./PenpalList.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Friend = props => {
  return (
    <Card className="col-3">
      <CardImg top width="100%" src={props.picture} alt="broken image" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.address}</CardText>
      </CardBody>
    </Card>
  );
};

export default Friend;

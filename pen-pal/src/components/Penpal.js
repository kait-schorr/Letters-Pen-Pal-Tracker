import React, { Component } from "react";
import "./PenpalList.css";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

const Friend = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.picture} alt="broken image" />
        <CardBody>PenPal</CardBody>
      </Card>
    </div>
  );
};

export default Friend;

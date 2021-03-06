import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const GetMovies = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">props.title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.rating}
          </CardSubtitle>
          <CardText>{props.date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default GetMovies;

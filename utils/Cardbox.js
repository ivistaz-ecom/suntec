import React from "react";
import { BiArrowRightCircle } from 'react-icons/bi'; // Assuming you're using React Icons for Bootstrap icons
import {
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Card,
  Button,
  Offcanvas,
} from "react-bootstrap";
import Link from "next/link";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Cardbox({ title, desc, url, img }) {
  return (
    <Card className="c_shadow" style={{ height: 33 + "em" }}>
      <Card.Img className="card-icon-left" src={img} />
      <Card.Body className="c_body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Body  className="d-flex flex-row justify-content-center gap-2 align-items-end">
        <Row>
          <Col className="text-center g-2">
            <div className="d-flex align-items-center gap-1">
            <Link href={url} className="text-black arrow-icon justify-content-center">
              Explore
            </Link>
            
            <i class="bi bi-arrow-right-circle"></i>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Cardbox;

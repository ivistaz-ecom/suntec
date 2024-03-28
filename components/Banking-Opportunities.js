import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

function LinksExample() {
  return (
    <Container className="b_content p-3 mt-4">
      <Row className="d-flex flex-column flex-lg-row">
        <Col className="wbg-main">
          <div className="left-opp">
            <h3 className="m-head">Banking is full of opportunities.</h3>
            <h2 className="t-head">
              How can SunTec Xelerate help you make the most of them?
            </h2>
          </div>
        </Col>
        <Col sm={2}>
          <div className="right-opp">
            <iframe
              className="i-frame"
              src={`https://www.youtube.com/embed/ngHqPQsV0Cc`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LinksExample

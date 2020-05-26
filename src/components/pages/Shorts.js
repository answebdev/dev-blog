import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Shorts = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Shorts</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <Row>
          <Col md={12}>
            <h3>
              <strong>Notes</strong>
            </h3>
            <hr />
            <p>This is the Shorts page.</p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shorts;

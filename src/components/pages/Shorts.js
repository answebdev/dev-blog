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
        <Row>
          <Col md={12}>
            <h3>Shorts Page</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shorts;

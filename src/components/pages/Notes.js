import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Notes = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Notes</title>
      </Helmet>
      <Container className='container' fluid>
        <Row>
          <Col md={12}>
            <h3>Notes Page</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Notes;

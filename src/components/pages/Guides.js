import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Guides = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Guides</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <Row>
          <Col md={12}>
            <h3>
              <strong>Guides</strong>
            </h3>
            <hr />
            <p>This is the Guides page.</p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Guides;

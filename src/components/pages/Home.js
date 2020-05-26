import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog</title>
      </Helmet>
      <Container className='container' fluid>
        <Row>
          <Col md={12}>
            <h3>Home Page</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const WhitespaceReact = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Removing Unwanted Whitespace in React</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <Row>
          <Col md={12}>
            <h3>
              <strong>Removing Unwanted Whitespace in React</strong>
            </h3>
            <hr />
            <br />
            <p>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhitespaceReact;

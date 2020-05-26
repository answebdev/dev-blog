import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const NetlifyFormReact = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Blog | Setting up a Netlify Form in React</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Setting up a Netlify Form in React</strong>
              </h3>
              <hr />
              <br />
              <p>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NetlifyFormReact;

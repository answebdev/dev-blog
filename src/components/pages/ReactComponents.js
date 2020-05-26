import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';

const ReactComponents = () => {
  return (
    <div>
      <Helmet>
        <title>
          Dev Blog | How to Not Render a Component on a Particular Page in React
        </title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  How to Not Render a Component on a Particular Page in React
                </strong>
              </h3>
              <hr />
              <br />
              <p>
                <strong>The problem: </strong>Layout components rendering on
                pages you don't want them to.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>

          <div>
            <ScrollUpButton
              style={{
                marginBottom: '33px',
                marginRight: '-15px',
                background: '#ff6347',
                borderRadius: '5px',
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactComponents;

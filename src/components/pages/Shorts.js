import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import whitespace from '../../img/whitespace.png';
import reactComponents from '../../img/react-components.png';

const Shorts = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Shorts</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Shorts</strong>
              </h3>
              <p>Quick tips, tricks, and hacks.</p>
              <hr />
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={whitespace}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>Removing Unwanted Whitespace in React</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      I came across this issue when I was working on a project
                      in React. The problem was that I kept getting unwanted
                      whitespace in my content in the browser, even when I
                      didn't seem to have any whitespace in my content in the
                      text editor.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='shorts-btn'
                    variant='success'
                    href='/shorts/removing-unwanted-whitespace-in-react'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={reactComponents}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>
                      How to Not Render a Component on a Particular Page in
                      React
                    </strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      When I was working on a project in React, I had separate
                      Navbar and Footer components that I wanted to appear on my
                      pages. However, I wanted the layout of my landing page to
                      look different, and I did not want the Navbar or the
                      Footer to render on my landing page. Here, I explain how I
                      used React Helmet to get around this issue.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='shorts-btn'
                    variant='success'
                    href='/shorts/how-to-not-render-a-component-on-a-paricular-page-in-react'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Shorts;

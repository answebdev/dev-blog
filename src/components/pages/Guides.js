import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import nextGen from '../../img/next-gen.webp';
import openGraph from '../../img/open-graph.webp';
import alert from '../../img/alert.webp';
import customizedTitlesReact from '../../img/customized-titles.webp';
import favicon from '../../img/favicon.webp';
import currentTime from '../../img/current-time.webp';
import reactRoutes from '../../img/react-routes.webp';

const Guides = () => {
  return (
    <div>
      <Helmet>
        <title>CoderGuides | Guides</title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>Guides</strong>
              </h3>
              <p>Mini-guides on a variety of topics.</p>
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
                      src={reactRoutes}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>Creating Routes in React</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      This guide explains how to create routes in React. We'll
                      create a simple React app and go through the process of
                      setting up working routes, as well as go over how to
                      create an error page. Finally, we will create some simple
                      links so that we can see our created routes in action.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/creating-routes-in-react'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>July 18, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={currentTime}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>
                      How to Display the Current Time and Date and Have it
                      Update Dynamically
                    </strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      This guide goes through how to display the current time
                      and date in the browser of your HTML page. After using
                      Moment.js to get the current time and date, you'll see how
                      to display the current time in the browser so that it
                      updates dynamically every second in real time.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/how-to-display-the-current-time-and-date-and-have-it-update-dynamically'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>June 27, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={favicon}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>Adding a Favicon to Your HTML Site</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      After finishing your web application, you'll want to add
                      your own image or icon that appears in your browser's tab
                      to distinguish your site from others. In this guide, you
                      will learn how to add a favicon to your HTML site so that
                      it appears in the browser in the tab section next to the
                      page title. Read to learn how.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/adding-a-favicon-to-your-html-site'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>June 22, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={customizedTitlesReact}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>
                      How to Customize the Title of Any Page in React
                    </strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Add a title for your app in your index.html file so that
                      it is shown in a browser's title bar or a page's tab. This
                      title will appear on all of your pages of your app. What
                      do you do if you want to have a different title for each
                      of the different pages of your app? Continue reading to
                      learn how to do this using React Helmet.
                    </p>
                    <p>
                      To view this article on Medium, click on the button below.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/how-to-customize-the-title-of-any-page-in-react'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='https://medium.com/@adolf.schmuck/how-to-customize-the-title-of-any-page-in-react-45ef14d2a695'
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{ marginRight: '5px' }}
                  >
                    Medium <i class='fab fa-medium'></i>
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>June 12, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={alert}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>How to Beautify Your Alert Messages</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      If you don't like the way the default JavaScript alert
                      message looks, learn how to replace it here with a more
                      attractive alternative. Using SweetAlert, we can replace
                      the default alert message with something that looks more
                      attractive. And it's easy to do. Read to learn how.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/how-to-beautify-your-alert-messages'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>June 11, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={openGraph}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>
                      Adding Open Graph Meta Tags to Your App or Website
                    </strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Have you ever wondered how to control the content that is
                      displayed when you post a link to your app or website on
                      social media, like Facebook? Or for that matter, how to
                      even display any content? This is done through the use of
                      Open Graph meta tags. Click to learn how to add these to
                      your projects.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/adding-open-graph-meta-tags-to-your-app-or-website'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>June 6, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={nextGen}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>
                      Using Next-gen Image Formats to Enhance Your App's
                      Performance (React)
                    </strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      There are a number of possible reasons why the pages on
                      your application may load slowly. This guide focuses on
                      using WebP versions of your images to help your
                      applications load faster.
                    </p>
                    <p>
                      This guide was created alongside a React application, but
                      the ideas in this guide can apply to other applications
                      and websites besides React.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/using-next-gen-image-formats-to-enhance-your-apps-performance'
                    style={{ marginRight: '5px' }}
                  >
                    Read More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>June 5, 2020</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Guides;

import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import nextGen from '../../img/next-gen.webp';
import openGraph from '../../img/open-graph.webp';
import alert from '../../img/alert.webp';
import customizedTitlesReact from '../../img/customized-titles.webp';
import favicon from '../../img/favicon.webp';
// import netlifyForms from '../../img/netlify-forms.webp';

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
                      Add a favicon to your HTML site so that it will appear in
                      the browser in the tab section next to the page title.
                      Continue reading to see how to do this.
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

          {/* <Row>
            <Col md={12}>
              <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={netlifyForms}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <strong>Setting up a Netlify Form in React</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                  </Card.Text>
                  <Button
                    className='button'
                    id='guides-btn'
                    variant='success'
                    href='/guides/setting-up-a-netlify-form-in-react'
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
          </Row> */}
        </div>
      </Container>
    </div>
  );
};

export default Guides;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import ng1 from '../../img/ng01.webp';
import ng2 from '../../img/ng02.webp';
import ng3 from '../../img/ng03.webp';
import ng4 from '../../img/ng04.webp';
import ng5 from '../../img/ng05.png';
import ng6 from '../../img/ng06.png';
import rp5 from '../../img/rp05.webp';
import ng7 from '../../img/ng07.webp';
import ng8 from '../../img/ng08.webp';
import nextGen from '../../img/next-gen.pdf';

const NextGen = () => {
  return (
    <div>
      <Helmet>
        <title>
          Dev Blog | Using Next-gen Image Formats to Enhance Your App's
          Performance (React)
        </title>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  Using Next-gen Image Formats to Enhance Your App's Performance
                  (React)
                </strong>
              </h3>
              <hr />
              <br />
              <p>
                <strong>The problem: </strong>Slow loading time on an
                application's pages.
              </p>

              <p>
                <a
                  src={nextGen}
                  href={nextGen}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{ padding: '0' }}
                >
                  <i
                    className='fas fa-file-download'
                    style={{ color: '#3e63bd' }}
                  >
                    &nbsp;&nbsp;
                    <span
                      style={{
                        fontFamily: 'Oxygen',
                        fontSize: '16px',
                        color: '#3e63bd',
                      }}
                    >
                      Download The Notes Here
                    </span>
                  </i>
                </a>
              </p>
              <p>
                <strong>Introduction</strong>
              </p>
              <p>
                There are a number of possible reasons why the pages on your
                application may load slowly. This guide focuses on using WebP
                versions of your images to help your applications load faster.
                This guide was created alongside a React application, but the
                ideas in this guide can apply to other applications and websites
                besides React. According to a web.dev article
                <a
                  className='click'
                  href='https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=devtools'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>,</span> "JPEG 2000, JPEG
                XR, and WebP are image formats that have superior compression
                and quality characteristics compared to their older JPEG and PNG
                counterparts. Encoding your images in these formats rather than
                JPEG or PNG means that they will load faster and consume less
                cellular data."
              </p>
              <p>
                <strong>Lighthouse</strong>
              </p>
              <p>
                Before continuing, let's take a look at how Lighthouse (an
                open-source, automated tool for improving the performance,
                quality, and correctness of your web apps) can help us here. For
                best results, run Lighthouse in incognito mode. While in Chrome,
                run Control + Shift + N to open incognito mode. Then, go to your
                URL, open the developer tools, and select Audits.
              </p>
              <p>
                <img
                  src={ng1}
                  className='img-fluid mb-3'
                  title='Landing Page and Web Developer Tools'
                  alt='Landing Page and Web Developer Tools'
                />
              </p>
              <br />
              <p>Click on "Generate report":</p>
              <p>
                <img
                  src={ng2}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
              </p>
              <br />
              <p>
                <strong>The Problem</strong>
              </p>
              <p>
                If you have a large image in either <strong>.jpg</strong> or{' '}
                <strong>.png</strong> format (the image in the screenshot is
                2246 x 1473 pixels in size), it will take a long time to load.
                As you can see, Performance in Lighthouse is 78%, and it took
                36.91 s to load. Lighthouse suggests serving images in next-gen
                formats.
              </p>
              <p>
                <img
                  src={ng3}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
              </p>
              <br />
              <p>
                <strong>What To Do</strong>
              </p>
              <p>
                1. First, convert your image from <strong>.jpg/.png</strong> to
                a next-gen format using an online converter like
                <a
                  className='click'
                  href='https://image.online-convert.com/convert-to-webp'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> this one</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span> In this example,
                we’re using this converter to convert from <strong>.png</strong>{' '}
                to
                <strong>.webp.</strong>
              </p>
              <p>
                <img
                  src={ng4}
                  className='img-fluid mb-3'
                  title='Online Converter'
                  alt='Online Converter'
                />
              </p>
              <br />
              <p>
                2. After converting the image into a <strong>.webp</strong>{' '}
                format, put the image into the appropriate folder. In this case,
                it has been placed in the <strong>img </strong>
                folder.
              </p>
              <p>
                <img
                  src={ng5}
                  className='img-fluid mb-3'
                  title='Detail of Image Folder'
                  alt='Detail of Folder'
                />
              </p>
              <br />
              <p>
                3. Import the image with the new <strong>.webp</strong>{' '}
                extension (line 5).
              </p>
              <p>
                <img
                  src={ng6}
                  className='img-fluid mb-3'
                  title='Code Detail'
                  alt='Code Detail'
                />
              </p>
              <br />
              <p>4. And that’s it. Now it should work.</p>
              <p>
                <img
                  src={rp5}
                  className='img-fluid mb-3'
                  title='Landing Page'
                  alt='Landing Page'
                />
              </p>
              <br />
              <p>
                5. The load time should now be faster. And when checking on
                Lighthouse, the Performance score has improved and is now at
                90%. And we no longer get the message that suggests serving
                images in next-gen formats. And now when the pages on your app
                load, they should load faster.
              </p>
              <p>
                <img
                  src={ng7}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
              </p>
              <p>
                <img
                  src={ng8}
                  className='img-fluid mb-3'
                  title='Landing Page and Lighthouse'
                  alt='Landing Page and Lighthouse'
                />
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

export default NextGen;

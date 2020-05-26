import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ws1 from '../../img/ws01.png';
import ws2 from '../../img/ws02.png';
import ws3 from '../../img/ws03.png';
import ws4 from '../../img/ws04.png';
import ws5 from '../../img/ws05.png';
import ws6 from '../../img/ws06.png';
import ws7 from '../../img/ws07.png';
import ws8 from '../../img/ws08.png';

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
              <strong>The problem: </strong>Unwanted whitespace in the browser
              in a React app.
            </p>
            <p>
              I came across this issue when I was working on a project in React.
              You can see here that there is an extra space added between the
              words "click" and "here", and between "here" and the period.
            </p>
            <p>
              <img src={ws1} class='img-fluid mb-3' alt='Whitespace 1' />
            </p>
            <br />
            <p>
              This is what the code looks like. The indentation is from the text
              editor.
            </p>
            <p>
              <img src={ws2} class='img-fluid mb-3' alt='Whitespace 2' />
            </p>
            <br />
            <p>
              And even if you remove the whitespace manually in the text editor,
              the result is the same and you still get the extra spaces in the
              browser.
            </p>
            <p>
              <img src={ws3} class='img-fluid mb-3' alt='Whitespace 3' />
            </p>
            <br />
            <p>
              1. Here is a hack you can try. Put the text that has the extra
              whitespace in the browser inside a <strong>span</strong> tag. In
              this example, the word “here” (line 26) and the final period (line
              28) have been put inside a <strong>span</strong> tag.
            </p>
            <p>
              <img src={ws4} class='img-fluid mb-3' alt='Whitespace 4' />
            </p>
            <br />
            <p>
              2. Next, add inline styling for each of these and do a{' '}
              <strong>marginLeft</strong>
              of "-10px" (lines 26 and 28):
            </p>
            <p>
              <img src={ws5} class='img-fluid mb-3' alt='Whitespace 5' />
            </p>
            <br />
            <p>
              And now the unwanted whitespace has been removed from between the
              word "click" and the period. But now there is no space between the
              words "click" and "here":
            </p>
            <p>
              <img src={ws6} class='img-fluid mb-3' alt='Whitespace 6' />
            </p>
            <br />
            <p>
              3. The only thing left to do is to manually add a space in the
              text editor before the word here (line 26):
            </p>
            <p>
              <img src={ws7} class='img-fluid mb-3' alt='Whitespace 7' />
            </p>
            <br />
            <p>
              And now the problem is solved. Now there is just one space between
              the words "click" and "here".
            </p>
            <p>And that's it! We no longer have unwanted whitespace:</p>
            <p>
              <img src={ws8} class='img-fluid mb-3' alt='Whitespace 8' />
            </p>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhitespaceReact;

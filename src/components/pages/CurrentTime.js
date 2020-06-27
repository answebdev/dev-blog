import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import moment01 from '../../img/moment01.webp';
import moment02 from '../../img/moment02.webp';
import moment03 from '../../img/moment03.webp';
import moment04 from '../../img/moment04.webp';
import moment05 from '../../img/moment05.webp';
import moment06 from '../../img/moment06.webp';
import moment07 from '../../img/moment07.webp';
import moment08 from '../../img/moment08.webp';
import moment09 from '../../img/moment09.webp';
import moment10 from '../../img/moment10.webp';
import moment11 from '../../img/moment11.webp';
import moment12 from '../../img/moment12.webp';
import moment13 from '../../img/moment13.webp';
import favicon from '../../pdf/current-time.pdf';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

Prism.highlightAll();

// Prism Line Number Plugin
// Source: https://davidwalsh.name/prism-line-number-plugin
/*
	This plugins was created based on the Prism line-numbering plugin.
	This plugin aims to number all lines and is independent of highlighting.
*/
(function () {
  if (!window.Prism || !document.querySelectorAll) {
    return;
  }

  function $$(expr, con) {
    return Array.prototype.slice.call((con || document).querySelectorAll(expr));
  }

  function numberLines(pre) {
    var offset = +pre.getAttribute('data-line-offset') || 0;
    var lineHeight = parseFloat(getComputedStyle(pre).lineHeight);
    var code = pre.querySelector('code');
    var numLines = code.innerHTML.split('\n').length;
    pre.setAttribute('data-number', '');

    for (var i = 1; i <= numLines; i++) {
      var line = document.createElement('div');
      line.className = 'line-number';
      line.setAttribute('data-start', i);
      line.style.top = (i - offset - 1) * lineHeight + 'px';

      (code || pre).appendChild(line);
    }
  }

  Prism.hooks.add('after-highlight', function (env) {
    var pre = env.element.parentNode;

    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    $$('.line-number', pre).forEach(function (line) {
      line.parentNode.removeChild(line);
    });

    numberLines(pre);
  });
})();

const CurrentTime = () => {
  return (
    <div>
      <Helmet>
        <title>
          CoderGuides | How to Display the Current Time and Date and Have it
          Update Dynamically
        </title>

        <script src='/path/to/date-and-time.min.js'></script>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  How to Display the Current Time and Date and Have it Update
                  Dynamically
                </strong>
              </h3>
              <hr />
              <InlineShareButtons
                config={{
                  alignment: 'left', // alignment of buttons (left, center, right)
                  color: 'social', // set the color of buttons (social, white)
                  enabled: true, // show/hide buttons (true, false)
                  font_size: 16, // font size for the buttons
                  labels: 'cta', // button labels (cta, counts, null)
                  language: 'en', // which language to use (see LANGUAGES)
                  networks: [
                    // which networks to include (see SHARING NETWORKS)
                    'facebook',
                    'twitter',
                    'linkedin',
                    'pinterest',
                    'email',
                    'sharethis',
                  ],
                  padding: 12, // padding within buttons (INTEGER)
                  radius: 4, // the corner radius on each button (INTEGER)
                  show_total: true,
                  size: 40, // the size of each button (INTEGER)

                  // OPTIONAL PARAMETERS
                  url:
                    'https://coderguides.com/guides/how-to-display-the-current-time-and-date-and-have-it-update-dynamically', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/how-to-display-the-current-time-and-date-and-have-it-update-dynamically', // (only for email sharing)
                  subject:
                    'CoderGuides: How to Display the Current Time and Date and Have it Update Dynamically', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Objective: </strong>To get and display the current time
                and date in the browser of your HTML page, and have the time
                update dynamically every second.
              </p>

              <p>
                <a
                  src={favicon}
                  href={favicon}
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{ padding: '0' }}
                >
                  <i
                    className='fas fa-file-download'
                    style={{ color: '#3e63bd' }}
                  >
                    &nbsp;
                    <span
                      style={{
                        fontFamily: 'Quicksand',
                        fontSize: '16px',
                        color: '#3e63bd',
                      }}
                    >
                      Download The Notes Here
                    </span>
                  </i>
                </a>
              </p>

              <br />
              <p>
                This guide will explain how to get the current time and date,
                and display it in the browser of your HTML page. The first part
                will go over how to get the current time and date using
                <a
                  className='click'
                  href='https://momentjs.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> Moment.js</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span> The second part
                will explain how to display the current time and date in the
                browser, and have it update dynamically every second in real
                time, like this:
              </p>
              <p id='date-and-time'></p>
              <br />
              <p>
                <strong>Getting the Current Time and Date</strong>
              </p>
              <p>
                1. The first thing we need to do is to get the CDN, so that we
                will be able to use Moment.js in our file. If we look at the{' '}
                <a
                  className='click'
                  href='https://momentjs.com/docs/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> docs</span>
                </a>
                <span style={{ marginLeft: '-10px' }}> for</span> Moment.js, we
                see a number of ways to bring Moment.js into our application.
                We're going to be using the CDN. In the docs, scroll down to the
                Browser section. You'll see that Moment.js is available on CDNJS
                and on jsDelivr. This is where we can find the CDN.
              </p>
              <p>
                <img
                  src={moment01}
                  className='img-fluid mb-3'
                  title='Moment.js Docs'
                  alt='Moment.js Doc'
                />
              </p>
              <br />
              <p>
                You can choose either. Let's click on{' '}
                <a
                  className='click'
                  href='https://www.jsdelivr.com/package/npm/moment'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> jsDelivr</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span> This will bring
                us to jsDelivr, where we can find the CDN for Moment.js. Scroll
                down to the first one and click on where it says "Copy to
                Clipboard".
              </p>
              <p>
                <img
                  src={moment02}
                  className='img-fluid mb-3'
                  title='jsDelivr'
                  alt='jsDelivr'
                />
              </p>
              <br />
              <p>
                You can either copy the URL or the HTML. Let's go ahead and copy
                the HTML. We're going to be pasting this CDN into our HTML code.
              </p>
              <p>
                <img
                  src={moment03}
                  className='img-fluid mb-3'
                  title='jsDelivr'
                  alt='jsDelivr'
                />
              </p>
              <br />
              <p>
                2. Let's go to our text editor now, to our HTML page. And we
                just have a very simple HTML page. And to keep it simple, we
                just have the {`<head>`} section with a {`<title>`}. And in the{' '}
                {`<body>`} we just have an {`<h1>`} with the text, "Current
                Time".
              </p>

              <p>
                <pre>
                  <code className='language-html'>
                    {`<!DOCTYPE html>
<html lang="en-us">

<head>
  <title>Current Time HTML Page</title>
</head>

<body>
  <h1>Current Time</h1>
</body>

</html>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>And this is what it looks like in the browser:</p>
              <p>
                <img
                  src={moment04}
                  className='img-fluid mb-3'
                  title='Current Time HTML Page'
                  alt='Current Time HTML Page'
                />
              </p>
              <br />
              <p>
                So, now let's bring in the CDN that we copied from jsDelivr up
                above and paste it into our code in the {`<head>`} section of
                our code (line 7).
              </p>

              <p>
                <pre>
                  <code className='language-html'>
                    {`<!DOCTYPE html>
<html lang="en-us">

<head>
  <title>Current Time HTML Page</title>
  <!-- Link to Moment.js -->
  <script src="https://cdn.jsdelivr.net/npm/moment@2.27.0/moment.min.js"></script>
</head>

<body>
  <h1>Current Time</h1>
</body>

</html>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                3. Next, we're going to create a separate JavaScript file for
                the JavaScript code that we'll be adding. And this is going to
                go in a separate folder. So, let's create a folder called{' '}
                <strong>assets.</strong> And inside this folder, let's create
                another folder and call it <strong>javascript.</strong> And
                inside the <strong>javascript</strong> folder, let's create a
                file and call it app.js. This is where we'll be putting our
                JavaScript code.
              </p>
              <p>
                Next, we need to connect our HTML file to our app.js file. So,
                we need to add the following line to our HTML file. And we'll
                add it down at the bottom before the closing {`<body>`} tag
                (line 5). So, we have an <strong>assets</strong> folder, and
                inside that is the <strong>javascript</strong> folder, and
                inside that is our app.js file, and so we get:{' '}
                <strong>src="assets/javascript/app.js".</strong>
              </p>

              <p>
                <pre>
                  <code className='language-html'>
                    {`<body>
  <h1>Current Time</h1>

  <!-- Link to JavaScript file -->
  <script src="assets/javascript/app.js" type="text/javascript"></script>
</body>

</html>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And just to make sure our connection is working properly, let's
                got to our app.js file and add a quick alert to test and see if
                we correctly linked our two files. So, let's go ahead and add a
                quick alert, and then save it:
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`alert('Hello from app.js');`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And if we refresh the browser, we see our alert message, which
                means that we have our HTML and app.js correctly hooked up. So,
                we're good to go.
              </p>
              <p>
                <img
                  src={moment05}
                  className='img-fluid mb-3'
                  title='Alert Message'
                  alt='Alert Message'
                />
              </p>
              <br />
              <p>
                Alternatively, rather than creating a separate file for your
                JavaScript, you can put your JavaScript code in your HTML code
                using the {`<script>`} tags down at the bottom before the
                closing {`<body>`} tag (lines 4-6), and it will work the same.
                As we go forward, we will continue to use a separate app.js
                file.
              </p>
              <p>
                <pre>
                  <code className='language-html'>
                    {`<body>
    <h1>Current Time</h1>

  <script>
    alert("Hello from app.js");
  </script>
</body>

</html>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                4. We are now ready to use Moment.js. If we go to
                <a
                  className='click'
                  href='https://momentjs.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> Moment.js</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>,</span> and scroll down a
                bit, we'll see a number of different formats that we can use for
                time and date.
              </p>
              <p>
                <img
                  src={moment06}
                  className='img-fluid mb-3'
                  title='Moment.js'
                  alt='Moment.js'
                />
              </p>
              <br />
              <p>
                Let's take the most basic example below: file:{' '}
                <strong>moment().format();</strong>
              </p>
              <p>
                <img
                  src={moment07}
                  className='img-fluid mb-3'
                  title='Moment.js'
                  alt='Moment.js'
                />
              </p>
              <br />
              <p>
                And let's grab this line of code and put it in our app.js file.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`moment().format();`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And we can't really do anything with this yet, because we won't
                be able to see the time and date with just this. So for now,
                let's <strong>console.log</strong> this to make sure it's
                working.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`console.log(moment().format());`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And now if we refresh the browser and check the Console in the
                DevTools (using the keyboard shortcut Control + Shift + J on
                Windows, then clicking in the Console tab), we get the current
                time and date, so we know it's working.
              </p>
              <p>
                <img
                  src={moment08}
                  className='img-fluid mb-3'
                  title='Current Time and Date in the Console'
                  alt='Current Time and Date in the Console'
                />
              </p>
              <br />
              <p>
                Let's go back to the docs and choose a different format, for
                example, the first one.
              </p>
              <p>
                <img
                  src={moment09}
                  className='img-fluid mb-3'
                  title='Moment.js'
                  alt='Moment.js'
                />
              </p>
              <br />
              <p>
                And let's <strong>console.log</strong> this in app.js. And let's
                add some text too.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`console.log(
  'The current time and date is ' + moment().format('MMMM Do YYYY, h:mm:ss a')
);`}
                  </code>
                </pre>
              </p>
              <br />

              <p>
                And if we refresh the browser and check the Console, we get our
                new format with the text we added.
              </p>
              <p>
                <img
                  src={moment10}
                  className='img-fluid mb-3'
                  title='Current Time and Date in the Console'
                  alt='Current Time and Date in the Console'
                />
              </p>
              <br />
              <p>
                And that’s all there is to it. So, now we know how to get the
                current time and date using Moment.js. But right now, we can
                only access it in the Console. The next step is to display it in
                the browser.
              </p>

              <br />
              <p>
                <strong>Displaying the Time and Date in the Browser</strong>
              </p>
              <p>
                1. We're going to be using some jQuery, so the first thing we
                need to do is to grab the CDN so that we'll be able to use it in
                our code. So, let's grab the CDN
                <a
                  className='click'
                  href='https://cdnjs.com/libraries/jquery/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span> And we're going
                to use the minified version, so let's copy the second one.
              </p>
              <p>
                <img
                  src={moment11}
                  className='img-fluid mb-3'
                  title='CDNJS'
                  alt='CDNJS'
                />
              </p>
              <br />
              <p>
                And we're going to put this in our HTML in {`<script>`} tags,
                down below before the closing {`<body>`} tag (lines 5-7).
              </p>
              <p>
                <pre>
                  <code className='language-html'>
                    {`<body>
  <h1>Current Time</h1>

  <!-- jQuery Link -->
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
  </script>
  <!-- Link to JavaScript file -->
  <script src="assets/javascript/app.js" type="text/javascript"></script>

</body>

</html>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                2. Next, in our app.js file, we're going to create a function so
                that we'll be able to grab the current time and date from
                Moment.js, and display it in the browser. We're going to call it{' '}
                <strong>update</strong> (line 1), and we'll be using it in the
                next step to have the time update dynamically every second.
                We'll use the variable, <strong>date</strong> (line 2), to get
                the current time and date from Moment.js; and{' '}
                <strong>dateAndTime</strong> (line 3) is what we'll be using to
                display the time and date in the browser. Finally, we'll use the
                format we used above from the Moment.js docs for the time and
                date (line 3).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`var update = function () {
  date = moment();
  dateAndTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                3. The next step is to write the logic so that we can display
                the time and date in the browser. And we're going to add these
                lines of code after the function we wrote above. This is where
                call the <strong>update()</strong> function (line 3) we created
                above, and which gets the current time from Moment.js. We use
                the <strong>setInterval()</strong> method to call this{' '}
                <strong>update()</strong> function and update it (i.e. the
                current time) every 1000 milliseconds (every second) (lines
                3-4). In line 2, we're using jQuery to select an element with
                the ID of "date-and-time", which we haven't created yet, and
                setting it to a variable, <strong>dateAndTime.</strong>
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`$(document).ready(function () {
  dateAndTime = $('#date-and-time');
  update();
  setInterval(update, 1000);
});`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                4. So, let's go to our HTML now and create an element with an ID
                of "date-and-time". And we'll just create an empty {`<div>`}{' '}
                with the ID (line 3).
              </p>
              <p>
                <pre>
                  <code className='language-html'>
                    {`<body>
    <h1>Current Time</h1>
    <div id='date-and-time'></div>

    <!-- jQuery Link -->
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <!-- Link to JavaScript file -->
    <script src="assets/javascript/app.js" type="text/javascript"></script>

</body>

</html>`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And that's it. We should be all set now. If we go back to app.js
                and review our entire code, we can see that the empty {`<div>`}{' '}
                that we just created is selected and set to the variable,{' '}
                <strong>dateAndTime</strong> (line 7). And this variable is used
                to display the time and date in the browser using the{' '}
                <strong>html()</strong> method (line 3), with the time and date
                format that we specified (line 3).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`var update = function () {
  date = moment();
  dateAndTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function () {
  dateAndTime = $('#date-and-time');
  update();
  setInterval(update, 1000);
});`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And if we go to the browser and refresh the page, we get our
                current time and date in the browser. And you can't see it here
                in this still image, but the time is actually being updated
                every second.
              </p>
              <p>
                <img
                  src={moment12}
                  className='img-fluid mb-3'
                  title='Current Time and Date in the Browser'
                  alt='Current Time and Date in the Browser'
                />
              </p>
              <br />
              <p>
                5. Lastly, let's add a little bit of our own text to show in the
                browser (lines 4-6).
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`var update = function () {
  date = moment();
  dateAndTime.html(
    '<p>The current time and date is ' +
      date.format('dddd, MMMM Do YYYY, h:mm:ss a') +
      '</p>'
  );
};

$(document).ready(function () {
  dateAndTime = $('#date-and-time');
  update();
  setInterval(update, 1000);
});`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                And there we go. We now have the current time and date in the
                browser, and the time updates dynamically every second in real
                time. And we also get our own text that we added: "The current
                time and date is".
              </p>
              <p>
                <img
                  src={moment13}
                  className='img-fluid mb-3'
                  title='Current Time and Date in the Browser'
                  alt='Current Time and Date in the Browser'
                />
              </p>
            </Col>
          </Row>

          <div>
            <ScrollUpButton
              style={{
                marginBottom: '35px',
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

export default CurrentTime;

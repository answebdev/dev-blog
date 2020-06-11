import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';
import { InlineShareButtons } from 'sharethis-reactjs';
import og1 from '../../img/og01.webp';
import og2 from '../../img/og02.webp';
import og3 from '../../img/og03.webp';
import og4 from '../../img/og04.webp';
import og5 from '../../img/og05.webp';
import og6 from '../../img/og06.webp';
import og7 from '../../img/og07.webp';
import og8 from '../../img/og08.webp';
import openGraph from '../../pdf/open-graph.pdf';

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

const OpenGraphMetaTags = () => {
  return (
    <div>
      <Helmet>
        <title>
          CoderGuides | Adding Open Graph Meta Tags to Your App or Website
        </title>
        <style type='text/css'>{`
    
        .footer {
          bottom: -5px;
        }

    `}</style>
      </Helmet>
      <Container className='container' fluid>
        <br />
        <div className='content-div'>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  Adding Open Graph Meta Tags to Your App or Website
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
                    'https://coderguides.com/guides/adding-open-graph-meta-tags-to-your-app-or-website', // (defaults to current url)
                  image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                  description:
                    'Guides and notes on various topics related to web development', // (defaults to og:description or twitter:description)
                  title: 'CoderGuides', // (defaults to og:title or twitter:title)
                  message:
                    'https://coderguides.com/guides/adding-open-graph-meta-tags-to-your-app-or-website', // (only for email sharing)
                  subject:
                    'CoderGuides: Adding Open Graph Meta Tags to Your App or Website', // (only for email sharing)
                  username: '', // (only for twitter sharing)
                }}
              />
              <br />
              <p>
                <strong>Objective: </strong>To add Open Graph meta tags to your
                web application to control what is displayed when shared on
                social media.
              </p>

              <p>
                <a
                  src={openGraph}
                  href={openGraph}
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
                Have you ever wondered how to control the content that is
                displayed when you post a link to your app or website on social
                media, like Facebook? Or for that matter, how to even display
                any content?
              </p>
              <p>
                You may have shared a link to your web application on social
                media before, only to have it look like this:
              </p>
              <p>
                <img
                  src={og1}
                  className='img-fluid mb-3'
                  title='Link Shared without Open Graph Meta Tags'
                  alt='Link Shared without Open Graph Meta Tags'
                />
              </p>
              <br />
              <p>
                This is where Open Graph media tags come in. As described
                <a
                  className='click'
                  href='https://ahrefs.com/blog/open-graph-meta-tags/#:~:text=What%20are%20Open%20Graph%20meta,if%20Twitter%20Cards%20are%20absent).'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>,</span> Open Graph meta
                tags are "part of Facebook’s Open Graph protocol and are also
                used by other social media sites, including LinkedIn and
                Twitter."
              </p>

              <p>
                The goal here then, is to have it look something like this when
                sharing a link to your app or website on social media:
              </p>
              <p>
                <img
                  src={og2}
                  className='img-fluid mb-3'
                  title='Link Shared with Open Graph Meta Tags'
                  alt='Link Shared with Open Graph Meta Tags'
                />
              </p>
              <br />
              <p>
                There are a number of Open Graph meta tags that provide
                different information. I will go through what I use and how I do
                it, so that you will be able to do the same.
              </p>
              <br />
              <p>
                <strong>What To Do</strong>
              </p>
              <p>
                1. The first thing to do is to add the Open Graph tags to your
                code. These are added up above in the {`<head>`} of each page
                that you want this information in. In the example below, the
                Open Graph tags are in lines 13-21. This is where you add the
                information that will appear when you share your link. There are
                particular ones that I usually change, for example, line 13.
                This is where you choose the image that you want displayed (see
                the example in the previous image). Make sure to use the correct
                file path for your image here. I find that the dimensions that
                work best for my images are 1920 x 1080 pixels, although other
                dimensions may work better for your needs. I like to use
                <a
                  className='click'
                  href='https://www.canva.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> Canva</span>
                </a>
                <span style={{ marginLeft: '-10px' }}> and</span> create a
                custom template with a width of 1920 pixels and a height of 1080
                pixels for my images. Again, you may use whatever works for you.
                This is what works for me, though.
              </p>
              <p>
                I also change line 18. This is where you put in the URL of the
                page. You can see the URL displayed in the example in the
                previous image. In our example here, we are adding these Open
                Graph tags to the index.html, file (the home page of this
                website), so the link that I put here is simply
                "https://esl-toolbox.com/". I usually like to add Open Graph
                tags to each page of my app or website, changing the information
                accordingly. For example, if this were the About Page, then the
                URL that I would add here would be
                "https://esl-toolbox.com/about.html".
              </p>
              <p>
                The next Open Graph tag that I customize is the title in line
                19. In the previous image, the title is displayed under the URL:{' '}
                "ESL Toolbox". On my About Page (so, in my about.html file), my
                title would be "ESL Toolbox | About". It's up to you and how you
                want to customize what is displayed.
              </p>
              <p>
                Finally, I like to add a description (lines 20-21). In the
                previous image, you can see that the description reads, "ESL
                Toolbox is a resource hub for students and teachers of ESL." The
                description that I have on my About Page is simply, "About ESL
                Toolbox."
              </p>
              <p>
                These are the Open Graph tags that I usually like to add. For
                more detailed information on Open Graph types and markup, go to
                this document
                <a
                  className='click'
                  href='https://developers.facebook.com/docs/sharing/webmasters/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p>
              <p>
                <pre>
                  <code className='language-html'>
                    {`<!DOCTYPE html>
<html lang="en">

<head>
    <title>ESL Toolbox</title>
    <link rel="icon" href="assets/images/tools.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,
      shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-8">
    <!-- Open Graph Tags -->
    <meta property="og:image" content="assets/images/preview-image.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1024">
    <meta property="og:image:height" content="1024">
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://esl-toolbox.com/" />
    <meta property="og:title" content="ESL Toolbox" />
    <meta property="og:description" content="ESL Toolbox is a resource hub
      for students and teachers of ESL." />
</head>

<body>
-- REST OF CODE --`}
                  </code>
                </pre>
              </p>
              <br />
              <p>
                2. Now that we've added the Open Graph tags to our code, the
                next thing we need to do is to scrape our page, so that the
                information for our page can be fetched, and so that we can
                preview how our content will look when it's shared on Facebook,
                Messenger and other places. This is done for each page that Open
                Graph tags are added to.
              </p>
              <p>
                To do this, go to the Facebook Sharing Debugger tool{' '}
                <a
                  className='click'
                  href='https://developers.facebook.com/tools/debug/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span style={{ marginLeft: '-10px' }}> here</span>
                </a>
                <span style={{ marginLeft: '-10px' }}>.</span>
              </p>
              <p>
                <img
                  src={og3}
                  className='img-fluid mb-3'
                  title='Facebook Sharing Debugger Tool'
                  alt='Facebook Sharing Debugger Tool'
                />
              </p>
              <br />
              <p>
                Type in the URL of the page and click on the Debug button.
                Following along with our example, our URL here is
                "https://esl-toolbox.com/". When you scrape a URL for the first
                time, you will get a message that says, "This URL hasn't been
                shared on Facebook before." Just click on the "Fetch new
                information" button.
              </p>
              <p>
                <img
                  src={og4}
                  className='img-fluid mb-3'
                  title='Facebook Sharing Debugger Tool'
                  alt='Facebook Sharing Debugger Tool'
                />
              </p>
              <br />
              <p>
                Next, you will be directed to this page. This page provides
                information on the scraped URL, any warnings, and a preview of
                the content that is displayed when you share the link.
              </p>
              <p>
                <img
                  src={og5}
                  className='img-fluid mb-3'
                  title='Facebook Sharing Debugger Tool'
                  alt='Facebook Sharing Debugger Tool'
                />
              </p>
              <br />
              <p>
                Scroll down a little to see a preview. This is what it will look
                like when you share the link to this page. If this is the first
                time that this URL is being scraped, you might not see anything
                in the preview at first. If this is the case, just click on the
                "Scrape Again" again. It might take a couple minutes. Just keep
                clicking this button until you see your preview. Once you are
                able to see your Link Preview, as in this picture, you are done.
                Remember, that this has to be done for each page that Open Graph
                tags have been added to. So, once you are able to see your
                preview, you can move on to your other page(s) and do the same.
                So, if I also added Open Graph tags to my About Page, then I
                would go back to the Facebook Sharing Debugger tool link from
                above, and repeat the process.
              </p>
              <p>
                <img
                  src={og6}
                  className='img-fluid mb-3'
                  title='Facebook Sharing Debugger Tool'
                  alt='Facebook Sharing Debugger Tool'
                />
              </p>
              <br />
              <p>
                And that's it. When we share our link, the information that we
                added will now be displayed.
              </p>
              <p>
                <img
                  src={og7}
                  className='img-fluid mb-3'
                  title='Facebook Post'
                  alt='Facebook Post'
                />
              </p>
              <br />
              <p>
                And this is what it looks like when we share the link to the
                About Page.
              </p>
              <p>
                <img
                  src={og8}
                  className='img-fluid mb-3'
                  title='Facebook Post'
                  alt='Facebook Post'
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

export default OpenGraphMetaTags;

const React = require('react');

// Loading the font stylesheet from the head, rather than through
// JavaScript, lets the browser fetch the fonts while it parses the HTML.
// The preconnects cover the stylesheet host and the font host.
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="typenetwork-preconnect"
      rel="preconnect"
      href="https://cloud.typenetwork.com"
    />,
    <link
      key="typenetwork-fonts-preconnect"
      rel="preconnect"
      href="https://fastly-cloud.typenetwork.com"
      crossOrigin="anonymous"
    />,
    <link
      key="typenetwork-fontface"
      rel="stylesheet"
      href="https://cloud.typenetwork.com/projects/5808/fontface.css"
    />,
  ]);
};

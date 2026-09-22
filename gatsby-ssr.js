const React = require('react');

// The Benton faces come from Type Network. Loading their stylesheet from the
// head, rather than through JavaScript, lets the browser start fetching the
// fonts while it parses the HTML, so text is drawn in Benton the first time
// rather than swapping out of Helvetica a moment later. The preconnects open
// the connections to both hosts before the requests are made: the stylesheet
// comes from cloud, the woff2 files from fastly-cloud.
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

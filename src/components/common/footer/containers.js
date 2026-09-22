import withClasses from '../../withClasses';

const FooterContainer = withClasses(
  'footer',
  `
grid
justify-start tb:justify-evenly
grid-cols-1 tb:grid-cols-12
font-sans-reg
mx-auto
px-4
pb-9 md:pb-27 lg:pb-40
pt-15 md:pt-27 lg:pt-40 xl:pt-40.5
text-footer-lg lg:text-footer-lg2 xl:text-footer-xl
text-white
`
);

export const FooterContainerWrapper = withClasses(
  'div',
  `
bg-blue-dark
clear-both
`
);

export default FooterContainer;

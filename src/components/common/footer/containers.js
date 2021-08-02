import tw from 'twin.macro';

const FooterContainer = tw.footer`
gap-16
grid
grid-cols-1 lg:grid-cols-12
font-sans-reg
mx-auto
pb-9 lg:pb-16
pt-15 lg:pt-16
text-footer-lg lg:text-footer-xl
text-white
w-sm md:w-md lg:w-lg xl:w-xl
`;

export const FooterContainerWrapper = tw.div`
bg-blue-dark
clear-both
`;

export default FooterContainer;

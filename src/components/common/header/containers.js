import withClasses from '../../withClasses';

const HeaderContainer = withClasses(
  'header',
  `
font-sans-reg text-base
gap-2 md:gap-16
grid
grid-cols-2 md:grid-cols-12
mx-auto
pt-5 md:pt-14 lg:pt-6
w-sm tb:w-tb md:w-md lg:w-lg xl:w-xl
`
);

export default HeaderContainer;

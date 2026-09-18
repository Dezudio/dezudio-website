import withClasses from '../../withClasses';

const Section = withClasses('section', `
col-span-2
w-sm
`);

export const WordmarkSection = withClasses('section', `
col-start-1 lg:col-start-2
row-start-1
tb:col-span-4 md:col-span-3
mb-15 md:mb-0
md:pt-10
xl:w-md
`);

export const HelloSection = withClasses('section', `
col-start-1
tb:row-start-2 md:row-start-1
tb:col-span-4 md:col-span-3 lg:col-span-2
mb-16 md:mb-0
`);


export const AddressSection = withClasses('section', `
col-start-1
tb:row-start-2 md:row-start-1
tb:col-span-4 md:col-span-3
mb-16 md:mb-0
`);

export const SocialSection = withClasses('section', `
col-start-1
tb:row-start-2 md:row-start-1
tb:col-span-4 md:col-span-3
mb-16 md:mb-0
pb-4 lg:pb-0
`);

export const SocialImagesWrapper = withClasses('div', `
flex
space-x-7 lg:space-x-12
`);

export const CopyrightSection = withClasses('section', `
col-span-12
col-start-1 lg:col-start-2
tb:row-start-3
pb-0
text-footer-sm lg:text-footer-base
`);

export default Section;

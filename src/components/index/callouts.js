import withClasses from '../withClasses';

const Callout = withClasses('div', `
bg-white bg-opacity-50
tb:col-start-1 lg:col-start-2
tb:col-end-5
font-condensed
p-2 md:p-2.5 lg:p-4 xl:p-6
md:row-start-4
w-sm tb:w-auto
`);

export const CalloutHeading = withClasses('h3', `
font-condensed-bold
pb-1.5 tb:pb-1 md:pb-1.5 lg:pb-2 xl:pb-3
text-dezudiorange
text-heading-sm-tight md:text-heading-sm-tighter lg:text-heading-caption-lg xl:text-heading-2xl-tighter
`);

export const CalloutP = withClasses('p', `
font-condensed-bk
text-4xs-tight md:text-5xs-tight lg:text-xs-callout xl:text-sm
`);

export const CalloutDark = withClasses('div', `
tb:col-start-1 lg:col-start-2
tb:col-end-5
font-condensed
p-2 md:p-2.5 lg:p-4 xl:p-6
md:row-start-4
w-sm tb:w-auto
bg-black-dark bg-opacity-30
text-white
`);

export default Callout;

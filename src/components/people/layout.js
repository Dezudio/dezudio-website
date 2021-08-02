import * as React from 'react';
import Container from './containers';
import Section from '../common/sections';
import {BlockLink} from '../common/links';
import tw, { styled } from 'twin.macro';

const Layout = ({ pageTitle, fromPerson, toPerson, children }) => {
  const fullTitle = pageTitle + " - Dezudio";
 const SectionBody = tw.div`
row-start-1
col-start-1 md:col-start-4
col-end-3 md:col-end-11
text-3xs lg:text-xs
text-blue-dark
font-serif-reg
`;
  const PrevBlockLink=styled(BlockLink)([tw`
row-start-2 md:row-start-1
col-start-1
pt-0 md:pt-48
`]);
  const NextBlockLink=styled(BlockLink)([tw`
row-start-2 md:row-start-1
col-start-1 md:col-start-12
pt-0 md:pt-48
text-right
`]);
  const CloseLink=styled(BlockLink)([tw`
float-right
relative
mr-10
clear-both
`]);
  const ShowWhenSmall = tw.span`
visible md:invisible
`
    const PeopleSection = styled(Section)([tw`
grid-rows-2
grid-cols-2
gap-x-0
-mr-10
`])
  return (
    <main>
      <title>{fullTitle}</title>
      <CloseLink to="..">x</CloseLink>
      <Container>
      <PeopleSection>
      <PrevBlockLink to={fromPerson}>&larr;<ShowWhenSmall> Previous</ShowWhenSmall></PrevBlockLink>
      <SectionBody>
      {children}
    </SectionBody>
      <NextBlockLink to={toPerson}><ShowWhenSmall>Next </ShowWhenSmall>&rarr;</NextBlockLink>
    </PeopleSection>
      </Container>
    </main>
  );
};

export default Layout;

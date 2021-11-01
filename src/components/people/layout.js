import * as React from 'react';
import Container from './containers';
import Section from '../common/sections';
import {BlockLink} from '../common/links';
import tw, { styled } from 'twin.macro';

const Layout = ({ pageTitle, fromPerson, toPerson, children }) => {
  
  const fullTitle = pageTitle + " - Dezudio";
  
  const SectionBody = tw.div`
    grid
    grid-cols-10
    gap-0
    row-start-1
    col-start-1 md:col-start-2
    col-end-3 md:col-end-12
    text-3xs lg:text-xs xl:text-base-tight
    text-blue-dark
    font-serif-reg
    `;

  const PrevBlockLink=styled(BlockLink)([tw`
    row-start-2 md:row-start-1
    col-start-1
    pt-0 md:pt-48
    xl:justify-self-center
    `]);

  const NextBlockLink=styled(BlockLink)([tw`
    row-start-2 md:row-start-1
    col-start-1 md:col-start-12
    pt-0 md:pt-48
    text-right
    xl:justify-self-center
    `]);

  const CloseLink=styled(BlockLink)([tw`
    float-right
    relative
    mt-15
    mr-10
    clear-both
    `]);

  const ShowWhenSmall = tw.span`
    visible md:invisible
    `
  const PeopleSection = styled(Section)([tw`
    grid-cols-2
    gap-x-0
    md:pt-37 lg:pt-49
    md:pb-49 lg:pb-60.6 xl:pb-bg-sm
    xl:w-96p
    `])

  return (
    <main>
      <title>{fullTitle}</title>
      <CloseLink to="..">
        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><g stroke="#F45D48" stroke-width="4" fill="none" fill-rule="evenodd"><path d="M2 23.397 23.213 2.183"/><path d="m2.187 2 20.839 21.58"/></g></svg>
      </CloseLink>
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

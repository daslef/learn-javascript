import { Slide, FlexBox } from 'spectacle';

export const Slide01 = () => (
  <Slide backgroundImage='url(https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png)'>
    <FlexBox
      height="calc(100% - 120px)"
      overflowY="hidden"
      overflowX="hidden"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
    >
      <h1>Списки. Форматирование списков</h1>
      <svg fill="none" stroke="rgba(0,0,0,0.9)" strokeWidth={1.2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    </FlexBox>
  </Slide>
);

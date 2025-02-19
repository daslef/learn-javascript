import { FullScreen, Progress, FlexBox } from '@repo/spectacle';

export const theme = {
  fonts: {
    header: '"Poiret One", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Poiret One", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    li: '"Poiret One", "Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

export const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <FlexBox padding="0 1.25em" justifyContent="space-between" width={1}>
      <FullScreen />
      <Progress />
    </FlexBox>
  </FlexBox>
);

import { FlexBox, Heading } from 'spectacle';

export const SlideHeader = ({
  heading = '',
  heading_en = '',
  subheading = ''
}) => (
  <>
    <FlexBox
      justifyContent="space-between"
      alignItems="start"
      marginBottom={24}
    >
      <div>
        <Heading margin="auto auto 0px" fontSize="24px" textAlign="left">
          {heading}
        </Heading>
        <Heading
          margin="-14px 0px 30px"
          fontSize="14px"
          textAlign="left"
          color="primary"
        >
          {heading_en}
        </Heading>
      </div>
      <Heading
        textAlign="left"
        fontSize={60}
        style={{ marginTop: 10, paddingTop: 0 }}
      >
        {subheading}
      </Heading>
    </FlexBox>
  </>
);

import { Box, Text, FlexBox } from 'spectacle';

const StyledText = ({ children, important, active, setCurrent }) => (
  <Text
    fontSize={24}
    fontWeight="bold"
    backgroundColor={
      active
        ? '#fc6986'
        : important
        ? 'rgba(252, 105, 134, 0.5)'
        : 'rgba(50,50,50,0.5)'
    }
    style={{ cursor: 'pointer' }}
    onClick={() => setCurrent(children)}
  >
    {children}
  </Text>
);

const StyledHeading = ({ children }) => (
  <Text fontSize={24} fontWeight="bold" style={{ margin: 0, paddingBottom: 0 }}>
    {children}
  </Text>
);

const StyledBox = ({ children }) => (
  <Box
    style={{
      display: 'flex',
      alignItems: 'flex-end',
      overflowX: 'auto',
      height: 'auto',
      maxWidth: '1300px',
      backgroundColor: 'rgba(0,0,0,0.2)'
    }}
  >
    {children}
  </Box>
);

const StyledCategory = ({ children }) => (
  <FlexBox
    flexDirection="column"
    borderRight="2px solid rgba(0,0,0,0.2)"
    mr="-1px"
  >
    {children}
  </FlexBox>
);

export { StyledBox, StyledCategory, StyledHeading, StyledText };

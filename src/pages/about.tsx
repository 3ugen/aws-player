import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '@components/ProTip';
import MuiNextLink from '@components/MuiNextLink';
import Copyright from '@components/Copyright';

const About = () => <Container maxWidth="sm">
  <Box sx={{my: 4}}>
    <Typography variant="h4" component="h1" gutterBottom>
      Next.js v5-beta with TypeScript example
    </Typography>
    <Button variant="contained" component={MuiNextLink} noLinkStyle href="/">
      Go to the main page
    </Button>
    <ProTip/>
    <Copyright/>
  </Box>
</Container>
export default About
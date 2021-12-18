import { Box, Container, Typography } from '@mui/material';

export default function Portfolio(props) {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Container maxWidth='md'>
        <Typography variant='h2' component={'div'} sx={{ mt: 5 }}>
          Portfolio
        </Typography>
      </Container>
    </Box>
  );
}

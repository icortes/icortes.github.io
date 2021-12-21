import { Box, Container, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio(props) {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          component={'div'}
          sx={{ mt: 5 }}
          style={{ textSizeAdjust: 'auto' }}>
          Portfolio
        </Typography>
        <ProjectCard />
      </Container>
    </Box>
  );
}

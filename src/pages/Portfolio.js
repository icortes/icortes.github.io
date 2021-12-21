import { Box, Container, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import projects from '../db/projects.json';

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
        {projects.forEach((project) => {
          <ProjectCard key={project.title} project={project} />;
        })}
      </Container>
    </Box>
  );
}

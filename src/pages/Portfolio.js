import { Box, Container, Grid, Typography } from '@mui/material';
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
        <Grid container spacing={2} direction='row' justifyContent='space-between'>
          <Grid item xs={5}>
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

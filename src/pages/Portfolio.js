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
        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='space-between'
          sx={{ mt: 1 }}>
          {projects.map((project, index) => {
            return (
              <Grid item sx={12} sm={6} md={6} lg={6}>
                <ProjectCard key={index} project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

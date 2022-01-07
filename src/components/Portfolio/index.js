import { Container, Grid, Typography } from '@mui/material';

export default function Portfolio({projects, ProjectCard}) {
  return (
    <Container className='portfolio'>
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
  );
}

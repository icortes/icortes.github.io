import { Box, Container } from '@mui/material';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import ProjectCard from '../components/ProjectCard';
import projects from '../db/projects.json';
import proficiencies from '../db/proficiencies.json';
import resume from '../assets/doc/IsaacCortesHernResume.pdf';
import Resume from '../components/Resume';

export default function HomePage(props) {
  return (
    <Box sx={{ mt: 8,width: '100%', height: 'auto' }}>
      <Container maxWidth='md'>
        <AboutMe />
        <Portfolio projects={projects} ProjectCard={ProjectCard} />
        <Contact />
        <Resume proficiencies={proficiencies} resume={resume} />
      </Container>
    </Box>
  );
}

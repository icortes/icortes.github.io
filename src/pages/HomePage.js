import { Box, Container } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import ProjectCard from '../components/ProjectCard';
import projects from '../db/projects.json';

export default function HomePage(props) {
  return <Box sx={{ width: '100%', height: 'auto' }}>
    <Container maxWidth='md'>
      <AboutMe />
      <Portfolio projects={projects} ProjectCard={ProjectCard} />
      <Contact />
    </Container>
  </Box>;
}
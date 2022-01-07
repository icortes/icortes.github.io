import { Box, Container } from "@mui/material";
import AboutMe from "../components/AboutMe";

export default function HomePage(props) {
  return <Box sx={{ width: '100%', height: 'auto' }}>
    <Container maxWidth='md'>
      <AboutMe />
    </Container>
  </Box>;
}
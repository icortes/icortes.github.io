import { Avatar, Container, Paper, Box, Typography } from '@mui/material';
import avatar from '../assets/img/avatar.jpg';

export default function AboutMe(props) {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Container maxWidth='md'>
        <Avatar
          alt='Isaac Cortes Hernandez'
          src={avatar}
          component={Paper}
          elevation={5}
          sx={{ width: 200, height: 200, my: 2 }}
        />
        <Typography variant='h2' component={'div'}>
          About Me
        </Typography>
        <Paper elevation={4}>
          <Typography
            variant='body1'
            gutterBottom
            sx={{ mt: 3, py: 2, px: 2, fontSize: 20 }}>
            Full stack web developer leveraging customer service and computer
            science background to build a more intuitive user experience on the
            web. Recently earned a certificate in full stack development at UC
            Berkeley Extension, with newly developed skills in JavaScript, CSS,
            React.js, and responsive web design. Known as an innovative problem
            solver passionate about developing apps, with a focus on writing
            quality and professional code. With each project, my aim is to best
            engage my audience for an impactful user experience. I applied
            aspects of UX and agile development in a recent project. I worked on
            a team of four to develop a single-page MERN app that helps
            communities organize, plan, and create events for community building
            rather than concerts. I'm excited to leverage my skills as part of a
            fast-paced, quality-driven team to build better experiences on the
            web.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

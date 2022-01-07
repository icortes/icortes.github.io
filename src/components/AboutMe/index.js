import { Avatar, Container, Paper, Typography } from '@mui/material';
import avatar from '../../assets/img/avatar.jpg';

export default function AboutMe(props) {
  return (
    <Container className='about-me'>
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
          sx={{
            mt: 3,
            py: 2,
            px: 2,
            fontSize: 20,
          }}>
          Full stack web developer leveraging a customer service background to
          build a more intuitive user experience on the web. Holds a certificate
          in full stack development at UC Berkeley Extension, with newly
          developed skills in JavaScript, CSS, Node.js, React.js, and responsive
          web design. Known as an innovative problem solver, mentor, and great
          communicator who is passionate about developing apps, with a focus on
          writing quality and professional code. With each project, my aim is to
          best engage my audience for an impactful user experience. I applied
          aspects of UX and agile development in a recent project. I worked on a
          team of three to develop a single-page MERN app called Happening that
          helps communities organize, plan, and create events for community
          building. In a different project, Nostalgia Generator, with a team of
          four, I created all the javascript logic with comments to help my team
          understand the code I had written. I’m excited to leverage my skills
          as part of a fast-paced, quality-driven team to build better
          experiences on the web.
        </Typography>
      </Paper>
    </Container>
  );
}

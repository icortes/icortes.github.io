import { GitHub, Web } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{ maxWidth: 425, minWidth: 220 }}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <CardActionArea
        href={project.deployed ? project.deployed : project.github}
        target='_blank'>
        <CardMedia
          component='img'
          height='200'
          image={project.image_path}
          alt={project.alt}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {project.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {project.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {project.deployed ? (
          <Button
            size='small'
            color='primary'
            href={project.deployed}
            target='_blank'>
            <Web /> <div style={{ marginLeft: '5px' }}>See Deployed Site</div>
          </Button>
        ) : null}
        <Button
          size='small'
          color='primary'
          href={project.github}
          target='_blank'>
          <GitHub /> <div style={{ marginLeft: '5px' }}>Github</div>
        </Button>
      </CardActions>
    </Card>
  );
}

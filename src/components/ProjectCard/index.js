import GitHub from '@mui/icons-material/GitHub';
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
  console.log(project);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={project.deployed} target='_blank'>
        <CardMedia
          component='img'
          height='140'
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
        <Button
          size='small'
          color='primary'
          href={project.deployed}
          target='_blank'>
          See Deployed Site
        </Button>
        <Button
          size='small'
          color='primary'
          href={project.github}
          target='_blank'>
          <GitHub /> <text style={{ marginLeft: '5px' }}>Github</text>
        </Button>
      </CardActions>
    </Card>
  );
}

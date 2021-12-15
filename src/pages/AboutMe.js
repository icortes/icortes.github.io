import { Avatar, Grid } from '@mui/material';
import avatar  from '../assets/img/avatar.jpg';

export default function AboutMe(props) {
  return (
    <Grid container spacing={{xs: 0}} columns={{xs: 4}}>
      <Avatar
        alt='Isaac Cortes Hernandez'
        src={avatar}
        sx={{ width: 200, height: 200 }}
      />
    </Grid>
  );
}

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import proficiencies from '../db/proficiencies.json';

export default function Resume(props) {
  return (
    <Box sx={{ width: '100%', height: 'auto', overflow: 'auto' }}>
      <Container maxWidth='md'>
        <Typography component={'div'} variant='h2' sx={{ mt: 5 }}>
          Resume
        </Typography>
        <Typography component={'div'} variant='h5' sx={{ mt: 3 }}>
          Download my
          <a
            href='https://docs.google.com/document/d/1L1-RzLbLqajKSWQK1C3RIttFFxXrM2WESSy0VPRIIBY/edit?usp=sharing'
            style={{ textDecoration: 'none', color: 'black' }}>
            resume
          </a>
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          direction={'row'}
          justifyContent={'space-evenly'}>
          <Grid item xs={12} sm={6} md={6}>
            <List
              sx={{
                mt: 3,
                width: '100%',
                bgcolor: 'background.paper',
              }}
              subheader={
                <ListSubheader>Front-end Proficiencies</ListSubheader>
              }>
              {proficiencies[0]['front-end'].map((proficiency, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText primary={proficiency} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <List
              sx={{
                mt: 3,
                width: '100%',
                bgcolor: 'background.paper',
              }}
              subheader={<ListSubheader>Back-end Proficiencies</ListSubheader>}>
              {proficiencies[0]['back-end'].map((proficiency, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText primary={proficiency} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

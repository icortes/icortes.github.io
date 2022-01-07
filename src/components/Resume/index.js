import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';

export default function Resume({ proficiencies, resume }) {
  return (
    <Container id='resume'>
      <Typography component={'div'} variant='h2' sx={{ mt: 5 }}>
        Resume
      </Typography>
      <Typography component={'div'} variant='h5' sx={{ mt: 3 }}>
        Download my{' '}
        <Link href={resume} target={'_blank'}>
          resume
        </Link>
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
            subheader={<ListSubheader>Front-end Proficiencies</ListSubheader>}>
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
  );
}

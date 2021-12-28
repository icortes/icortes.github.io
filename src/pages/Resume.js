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

export default function Resume(props) {
  return (
    <Box sx={{ width: '100%', height: 'auto', overflow: 'auto' }}>
      <Container maxWidth='md'>
        <Typography component={'div'} variant='h2' sx={{ mt: 5 }}>
          Resume
        </Typography>
        <Typography component={'div'} variant='h5' sx={{ mt: 3 }}>
          Download my resume
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          direction={'row'}
          justifyContent={'space-evenly'}>
          <Grid item sx={12} sm={6} md={6}>
            <List
              sx={{
                mt: 3,
                width: '100%',
                bgcolor: 'background.paper',
              }}
              subheader={
                <ListSubheader>Front-end Proficiencies</ListSubheader>
              }>
              <ListItem>
                <ListItemText primary='HTML5' />
              </ListItem>
            </List>
          </Grid>
          <Grid item sx={12} sm={6} md={6}>
            <List
              sx={{
                mt: 3,
                width: '100%',
                bgcolor: 'background.paper',
              }}
              subheader={<ListSubheader>Back-end Proficiencies</ListSubheader>}>
              <ListItem>
                <ListItemText primary='HTML5' />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

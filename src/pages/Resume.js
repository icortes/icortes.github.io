import {
  Box,
  Container,
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
        <List
          sx={{
            mt: 3,
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
          subheader={<ListSubheader>Front-end Proficiencies</ListSubheader>}>
          <ListItem>
            <ListItemText primary='HTML5' />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}

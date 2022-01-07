import { Email, PhoneIphone } from '@mui/icons-material';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

export default function Contact(props) {
  return (
    <Container id='contact'>
      <Typography
        variant='h2'
        component={'div'}
        sx={{ mt: 5 }}
        style={{ textSizeAdjust: 'auto' }}>
        Contact
      </Typography>
      <Box
        sx={{
          mt: 3,
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}>
        <nav aria-label='ways to contact me'>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component='a'
                href='mailto:contact@isaaccortes.com'>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText primary='email me: contact@isaaccortes.com' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='tel:+1-650-296-2930'>
                <ListItemIcon>
                  <PhoneIphone />
                </ListItemIcon>
                <ListItemText primary='phone #: (650) 296-2930' />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  );
}

import { Box, Container, TextField, Typography } from '@mui/material';

export default function Contact(props) {
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          component={'div'}
          sx={{ mt: 5 }}
          style={{ textSizeAdjust: 'auto' }}>
          Contact
        </Typography>
        <Box
          component='form'
          autoComplete='off'
          flexDirection={'column'}
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
          <TextField required label='Name' variant='filled' />
          <TextField required label='Email' variant='filled' />
          <TextField
            required
            label='Message'
            variant='filled'
            multiline
            maxRows={6}
            rows={3}
          />
        </Box>
      </Container>
    </Box>
  );
}

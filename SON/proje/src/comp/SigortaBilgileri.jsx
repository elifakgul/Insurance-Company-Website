import React from 'react';
import { Box, Container, Paper, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Grid } from '@mui/material';

const SigortaBilgileri = ({ handleNext }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      
        <Paper elevation={3} sx={{ p: 4,borderRadius: '16px' }}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Teklif Bilgileri</FormLabel>
            <RadioGroup value={value} onChange={handleChange}>
              <Box sx={{width:'350%'}}>
              <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                <FormControlLabel
                  value="kendim"
                  control={<Radio />}
                  label={<Typography sx={{ fontWeight: 'bold' }}>Kendim için</Typography>}
                />
              </Paper>
              </Box>
              
              <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
                <FormControlLabel
                  value="kendim_ve_ailem"
                  control={<Radio />}
                  label={<Typography sx={{ fontWeight: 'bold' }}>Kendim+Ailem için</Typography>}
                />
              </Paper>
              <Paper variant="outlined"  sx={{ p: 2 }}>
        <FormControlLabel
          value="ailem"
          control={<Radio />}
          label={<Typography sx={{ fontWeight: 'bold' }}>Ailem için</Typography>}
        />
      </Paper>

            </RadioGroup>
          </FormControl>
        </Paper>

      <Grid container justifyContent="center" sx={{ mt: 3 }}>
        <Button 
          variant="contained" 
          
          onClick={handleNext}
          sx={{
            backgroundColor: '#E91E63', // Buton rengini pembe yapıyoruz
            color: '#fff',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#E91E63', // Üzerine gelindiğinde rengi sabit kalacak
              color: '#fff', // Yazı rengini de sabit tut
            },
          }}
        >
          Devam
        </Button>
      </Grid>
    </Container>
  );
};

export default SigortaBilgileri;


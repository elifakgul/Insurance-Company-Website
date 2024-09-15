import React,{ useRef } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';


const EkstraBilgiler = ({ handleNext }) => {

        const inputRefs = useRef([]);
      
        const handleChange = (e, index) => {
          if (e.target.value.length === 1 && index < 5) {
            inputRefs.current[index + 1].focus();
          }
        };
    return (
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            
            minHeight: '100vh',
            width: '100%', // Dıştaki Box'un genişliğini artırmak için bu satırı güncelledik
            maxWidth: '800px', // Bu özelliği ekleyerek maksimum genişliği belirtebilirsiniz (örneğin 800px)
            margin: '0 auto', // Box'u ortalamak için
          }}
        >
         
    
          <Box 
            sx={{
                backgroundColor: '#FFFFFF',
                marginTop: '-30px',
                padding: '30px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                
                height:'200px',
                width:'850px'
                 // İçteki Box'un genişliğini korumak için '100%' olarak ayarlandı
              }}
          >
            <Typography 
  variant="h6" 
  sx={{ 
    marginBottom: '50px', 
    textAlign: 'center', // Metni ortalıyoruz
    fontWeight: 'bold',  // Metni kalınlaştırıyoruz
    display: 'block',
    padding:2    // Metni tam genişlikte göstermek için
  }}
>
  5******** numaralı telefona gelen doğrulama kodunu girmenizi rica ederiz.
</Typography>
    
            
    
<Grid container spacing={2} justifyContent="center">
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid item key={index}>
          <TextField
            inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
            variant="outlined"
            sx={{ width: '80px', height: '75px' }}
            onChange={(e) => handleChange(e, index)}
            inputRef={(el) => (inputRefs.current[index] = el)}
          />
        </Grid>
      ))}
    </Grid>
    
            
          </Box>

          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Button 
              type="submit" 
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
        </Box>

        
      );
};

export default EkstraBilgiler;

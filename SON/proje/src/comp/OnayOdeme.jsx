import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Typography, Grid, Button, Container, Paper, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';



const OnayOdeme = ({ handleNext,handleBack2 }) => {

  const selectedTeklif = useSelector((state) => state.teklif.selectedTeklif);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendEmail = () => {
    // E-posta gönderme işlemini burada yapabilirsiniz
    console.log('Email:', email);
    setOpen(false);
  };
  return (
    
    <Grid container spacing={3} justifyContent="center">
      <Box sx={{ textAlign: 'center', mb: 5,mt:4 }}>
          <Typography variant="h6" color="white">
            Vade Geçerlilik Süresi Dahilinde Teklifimiz 15 gün (24.09.2024 tarihine kadar) geçerlidir.
          </Typography>
          <Button variant="contained"  sx={{ mt: 2, backgroundColor: '#977ef9', border: '2px solid white', textTransform: 'none' ,'&:hover': {
      backgroundColor: '#977ef9'}}} onClick={handleClickOpen}>
            Teklifi Gönder
          </Button>
        </Box>


       
      <Grid item xs={8}>
        {/* Sol tarafta alt alta 3 Paper */}
        

        {/* İçerik Box ile sarılıp, daha ortalı hale getirildi */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',width:'80%',ml: 'auto' }}>
          <Paper
            elevation={4}
            sx={{
              p: 1,
              height: '60px',
              width: '83%', // Genişliği ayarlayarak ortalanmasını sağlıyoruz
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              backgroundColor: 'background.paper',
              boxShadow: 3,
              mb: 3,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: 'red', textAlign: 'center' , fontWeight: 'bold'}}>
              Olası fiyat artışlarından etkilenmemek için poliçenizi hemen satın alın! 
            </Typography>
          </Paper>

          <Paper
            elevation={4}
            sx={{
              p: 3,
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: '10px',
              backgroundColor: 'background.paper',
              boxShadow: 3,
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
              Teklif Bilgileri
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>
              Teklif no: 602000002889882
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>
              Poliçe başlangıç tarihi: 09.09.2024
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>
              Poliçe bitiş tarihi: 09.09.2025
            </Typography>

            <Box
              sx={{
                mt: 3,
                width: '80%',
                p: 2,
                border: '2px solid #999',
                borderRadius: '8px',
                backgroundColor: 'background.paper',
              }}
            >
               <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>
                TC Kimlik No: 6*********4
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>
                Telefon: (506) 065 59 56
              </Typography> 
              
            </Box>
          </Paper>

          <Paper
            elevation={4}
            sx={{
              p: 3,
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderRadius: '10px',
              backgroundColor: 'background.paper',
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left' }}>
              Ürün Bilgileri
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 1, textAlign: 'left' }}>
              -Limitsiz Yatarak Tedavi
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold',mb: 1, textAlign: 'left' }}>
              -Ücretsiz Check-Up
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold',mb: 1, textAlign: 'left' }}>
              -Online Doktor
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              -Yılda 10 Defa Ayakta Tedavi
            </Typography>
          </Paper>
        </Box>
      </Grid>
      

      {/* Sağ tarafta fiyat bilgisi için Paper */}
      <Grid item xs={4} >
  <Paper
    elevation={3}
    sx={{
      p: 3,
      height: '40%',
      width:'40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      backgroundColor: 'background.paper',
      boxShadow: 3,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
    {selectedTeklif.baslik}
    </Typography>
    <Typography variant="h4" sx={{ fontWeight: 'bold',textAlign: 'center', mb: 3 }}>
    {selectedTeklif.fiyat}
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'center' }}>
      Kredi Kartlarına 6 Ay'a varan taksit imkanı
    </Typography>
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
              Satın Al
            </Button>

            <Typography
              variant="body2"
              onClick={handleBack2}
              sx={{
                padding: 1,
                color: '#5e35b1', // Buton rengi
                textDecoration: 'underline', // Altı çizgili yapar
                cursor: 'pointer', // Üzerine gelindiğinde imleci el yapar
                '&:hover': {
                  color: '#3f1d96', // Üzerine gelindiğinde renk değişimi
                }
              }}
            >
              Tüm Tekliflere Geri Dön
            </Typography>
          </Grid>
  </Paper>

  
  <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200%',
    height: '200%',
  }}
>
  <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      sx: {
        borderRadius: '16px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        width: '500px', // Genişliği ihtiyacınıza göre ayarlayın
       
        maxWidth: '90%', // Ekran boyutuna göre genişliği sınırlamak için
        padding: '20px',
      },
    }}
  >
    <DialogTitle
      sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
      }}
    >
      Teklifi e-posta ile gönder
    </DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="E-posta Adresi"
        type="email"
        fullWidth
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          marginBottom: '16px',
          '& .MuiInputBase-input': {
            color: 'black', // Yazının rengini siyah yapar
          },
          '& .MuiInput-underline:before': {
            borderBottom: 'none', // Altı çizgisiz görünüm
          },
          '& .MuiInput-underline:after': {
            borderBottom: '2px solid ##0000', // Yazma başladığında altı çizgili görünüm
          },
        }}
      />
    </DialogContent>
    <DialogActions
      sx={{
        justifyContent: 'flex-start', // Butonu sola hizalar
        paddingTop: '0', // Yukarıdaki padding'i sıfırlar
      }}
    >
      <Button
        sx={{
          textAlign: 'center',
          backgroundColor: '#E91E63',
          color: '#fff',
          fontWeight: 'bold',
          padding: '10px 20px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#E91E63',
            color: '#fff',
          },
        }}
        onClick={handleSendEmail}
      >
        Teklifi Gönder
      </Button>
    </DialogActions>
  </Dialog>
</Box>

</Grid>

    </Grid>
  );
};


export default OnayOdeme;

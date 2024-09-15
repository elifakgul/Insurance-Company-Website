import React, { useState } from 'react';
import { setTeklif } from '../store';
import { useDispatch } from 'react-redux';

import { Typography, Grid, Button, Container, Paper, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
const TeklifDetayi = ({ handleNext, handleNext2 }) => {

  const dispatch = useDispatch();
 // Teklifi seçtiğimizde çalışacak fonksiyon
  const handleTeklifIncele = (teklif) => {
    dispatch(setTeklif(teklif)); // Teklifi Redux store'a gönder
  };
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
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h6" color="white" >
          Vade Geçerlilik Süresi Dahilinde Teklifimiz 15 gün (24.09.2024 tarihine kadar) geçerlidir.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#977ef9', border: '2px solid white', textTransform: 'none' ,'&:hover': {
      backgroundColor: '#977ef9'}}}
          onClick={handleClickOpen}
        >
          Teklifi Gönder
        </Button>
      </Box>

      <Grid container spacing={5}>
        {/* İlk Kart */}
        <Grid item xs={12} md={4}>
  <Box
    sx={{
      backgroundColor: '#f9e8d7', // Arka plan rengi (daha koyusu)
      borderRadius: '8px', // Kenarların yuvarlatılması
      padding: '4px', // İç boşluk
      mb: 0, // Alt boşluk
      display: 'flex', // Yazıyı ortalamak için
      justifyContent: 'center', // Ortalar
      maxWidth: '200px',
     
      margin: '0 auto'
    }}
  >
    <Typography variant="subtitle1" sx={{ color: 'dark-purple',fontWeight: 'bold' }}>
      En Uygun Teklif
    </Typography>
  </Box>
  <Paper
    elevation={6} // Gölgelendirmeyi artırır
    sx={{
      p: 3,
      textAlign: 'center',
      width:'90%',
      height: '110%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '20px', // Kenarları ovalleştirir
      backgroundColor: 'background.paper', // Arka plan rengini belirler
      boxShadow: 3 // Gölgelendirmeyi ayarlar
    }}
  >
    <div>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, mt: 2, color: 'black', textAlign: 'left' }}>
        Hepiyi Avantajlı  
      </Typography>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: 'black', textAlign: 'left' }}>
        Tamamlayıcı Sağlık
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, mt: 2, color: 'black', textAlign: 'left' }}>
        3.772,04 TL
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, mt: 2, color: 'black', textAlign: 'left' }}>
        Kredi Kartlarına 6 Ay'a varan taksit imkanı
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Butonları dikey olarak hizalar
          gap: 2,
          padding: 7
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Butonu yatayda ortalar
            width: '90%', // Box'ın genişliği
            maxWidth: '500px', // Box'ın maksimum genişliği
            mx: 'auto' // Yatayda ortalamak için
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleTeklifIncele({ id: 1, baslik: 'Hepiyi Avantajlı Tamamlayıcı Sağlık', fiyat: '3.772,04 TL' });
              handleNext2(); // İkinci fonksiyon burada çağrılıyor
            }}
            sx={{
              backgroundColor: '#3f0071', // Koyu mor arka plan rengi
              color: 'white', // Beyaz yazı rengi
              textTransform: 'none', // Yazıyı büyük harfe dönüştürmez
              width: '150%', // Butonu box'ın genişliğine göre yapar
              borderRadius: '8px', // Kenarları yuvarlatır
              padding: '8px 16px'
            }}
          >
            Teklifi İncele
          </Button>
        </Box>

        <Box
  sx={{
    backgroundColor: 'white', // Arka plan rengini beyaz yapar
    // Kenarlarını turuncu yapar
    borderRadius: '8px', // Kenarları yuvarlatır
    padding: '4px', // İç boşluk
    display: 'flex',
    justifyContent: 'center', // Butonu yatayda ortalar
    alignItems: 'center' // Butonu dikeyde ortalar
  }}
>
  <Button
    variant="outlined"
    onClick={() => {
      handleTeklifIncele({ id: 1, baslik: 'Hepiyi Avantajlı Tamamlayıcı Sağlık', fiyat: '3.772,04 TL' });
      handleNext(); // İkinci fonksiyon burada çağrılıyor
    }}
    sx={{
      backgroundColor: 'transparent', // Butonun arka planını şeffaf yapar
      color: 'orange', // Yazı rengini turuncu yapar
      textTransform: 'none', // Yazıyı büyük harfe dönüştürmez
      border: '2px solid orange', // Butonun kenarlarını turuncu yapar
      borderRadius: '8px', // Kenarları yuvarlatır
      padding: '8px 16px' // Buton içindeki boşluk
    }}
  >
    Teklifinizi Kişiselleştirin
  </Button>
</Box>

        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Metinler arasındaki boşluk
            mt: 3, // Üstten boşluk
            textAlign: 'left' // Metinleri sola hizalar
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'black' }}>
            ÖNE ÇIKAN TEMİNATLAR
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Limitsiz Yatarak Tedavi
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Ücretsiz Check-Up
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Online Doktor
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Yılda 10 Defa Ayakta Tedavi
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Metinler arasındaki boşluk
            mt: 5, // Üstten boşluk
            textAlign: 'left' // Metinleri sola hizalar
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'black' }}>
           SİZE YAKIN ANLAŞMALI KURUMLAR
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Medicana Sağlık Grubu
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Medicalpark Hastaneler Grubu
          </Typography>
          
        </Box>
    

      </Box>
    </div>
  </Paper>
</Grid>







        {/* İkinci Kart */}
        <Grid item xs={12} md={4}>
  <Box
    sx={{
      backgroundColor: '#f9e8d7', // Arka plan rengi (daha koyusu)
      borderRadius: '8px', // Kenarların yuvarlatılması
      padding: '3px', // İç boşluk
      mb: 0, // Alt boşluk
      display: 'flex', // Yazıyı ortalamak için
      justifyContent: 'center', // Ortalar
      maxWidth: '200px',
      margin: '0 auto'
    }}
  >
    <Typography variant="subtitle1" sx={{ color: 'dark-purple',fontWeight: 'bold' }}>
      Önerilen Teklif
    </Typography>
  </Box>
  <Paper
    elevation={6} // Gölgelendirmeyi artırır
    sx={{
      p: 3,
      textAlign: 'center',
      height: '110%',
      width:'90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '20px', // Kenarları ovalleştirir
      backgroundColor: '#7b61d1', // Arka plan rengini belirler
      boxShadow: 3 // Gölgelendirmeyi ayarlar
    }}
  >
    <div>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, mt: 2, color: 'white', textAlign: 'left' }}>
      Hepiyi Tamamlayıcı 
      </Typography>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1,  color: 'white', textAlign: 'left' }}>
       Sağlık
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, mt: 2, color: 'white', textAlign: 'left' }}>
      6.978,75 TL
      
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, mt: 2, color: 'white', textAlign: 'left' }}>
        Kredi Kartlarına 6 Ay'a varan taksit imkanı
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Butonları dikey olarak hizalar
          gap: 2,
          padding: 7
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Butonu yatayda ortalar
            width: '90%', // Box'ın genişliği
            maxWidth: '500px', // Box'ın maksimum genişliği
            mx: 'auto' // Yatayda ortalamak için
          }}
        >
          <Button
            variant="contained"
           onClick={() => {
              handleTeklifIncele({ id: 2, baslik: 'Hepiyi Tamamlayıcı Sağlık', fiyat: '6.978,75 TL' });
              handleNext2(); // İkinci fonksiyon burada çağrılıyor
            }}
            sx={{
              backgroundColor: 'white', // Koyu mor arka plan rengi
              color: 'black', // Beyaz yazı rengi
              textTransform: 'none', // Yazıyı büyük harfe dönüştürmez
              width: '150%', // Butonu box'ın genişliğine göre yapar
              borderRadius: '8px', // Kenarları yuvarlatır
              padding: '8px 16px',
              '&:hover': {
      backgroundColor: 'white'}
            }}
          >
            Teklifi İncele
          </Button>
        </Box>

        <Box
  sx={{
     // Arka plan rengini beyaz yapar
    borderRadius: '8px', // Kenarları yuvarlatır
    padding: '0px', // İç boşluk
    display: 'flex',
    justifyContent: 'center', // Butonu yatayda ortalar
    alignItems: 'center' // Butonu dikeyde ortalar
  }}
>
  <Button
    variant="contained"
    onClick={() => {
      handleTeklifIncele({ id: 2, baslik: 'Hepiyi Tamamlayıcı Sağlık', fiyat: '6.978,75 TL' });
      handleNext(); // İkinci fonksiyon burada çağrılıyor
    }}
    sx={{
      backgroundColor: 'white', // Butonun arka planını şeffaf yapar
      color: 'orange', // Yazı rengini turuncu yapar
      textTransform: 'none', // Yazıyı büyük harfe dönüştürmez
      border: '2px solid orange', // Butonun kenarlarını turuncu yapar
      borderRadius: '8px', // Kenarları yuvarlatır
      padding: '8px 16px', // Buton içindeki boşluk
      boxShadow: 'none', // Gölgelendirmeyi kaldırır
      minWidth: '0', // Buton genişliğini minimuma çeker
      '&:hover': {
      backgroundColor: 'white'}
    }}
  >
    Teklifinizi Kişiselleştirin
  </Button>
</Box>

        {/* Yeni Box için metinler */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Metinler arasındaki boşluk
            mt: 3, // Üstten boşluk
            textAlign: 'left' // Metinleri sola hizalar
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'black' }}>
            ÖNE ÇIKAN TEMİNATLAR
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Limitsiz Yatarak Tedavi
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Ücretsiz Check-Up
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Online Doktor
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Yılda 10 Defa Ayakta Tedavi
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Metinler arasındaki boşluk
            mt: 5, // Üstten boşluk
            textAlign: 'left' // Metinleri sola hizalar
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'black' }}>
           SİZE YAKIN ANLAŞMALI KURUMLAR
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Medar Ataşehir Hastanesi-Ataşehir/İstanbul
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Eren Hastanesi-Ataşehir/İstanbul
          </Typography>
          
        </Box>

      </Box>
    </div>
  </Paper>
</Grid>
{/* 3. */}
<Grid item xs={12} md={4}>
  <Box
    sx={{
      backgroundColor: '#f9e8d7', // Arka plan rengi (daha koyusu)
      borderRadius: '8px', // Kenarların yuvarlatılması
      padding: '4px', // İç boşluk
      mb: 0, // Alt boşluk
      display: 'flex', // Yazıyı ortalamak için
      justifyContent: 'center', // Ortalar
      maxWidth: '200px',
      margin: '0 auto'
    }}
  >
    <Typography variant="subtitle1" sx={{ color: 'dark-purple',fontWeight: 'bold' }}>
      En Kapsamlı Teklif
    </Typography>
  </Box>
  <Paper
    elevation={6} // Gölgelendirmeyi artırır
    sx={{
      p: 3,
      textAlign: 'center',
      height: '110%',
      width:'89%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '20px', // Kenarları ovalleştirir
      backgroundColor: 'background.paper', // Arka plan rengini belirler
      boxShadow: 3 // Gölgelendirmeyi ayarlar
    }}
  >
    <div>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, mt: 2, color: 'black', textAlign: 'left' }}>
        
       Pekiyi Tamamlayıcı 
       
      </Typography>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, mt: 1, color: 'black', textAlign: 'left' }}>
        
       
       Sağlık
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, mt: 2, color: 'black', textAlign: 'left' }}>
      14.941,08 TL
      
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, mt: 2, color: 'black', textAlign: 'left' }}>
        Kredi Kartlarına 6 Ay'a varan taksit imkanı
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Butonları dikey olarak hizalar
          gap: 2,
          padding: 7
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Butonu yatayda ortalar
            width: '90%', // Box'ın genişliği
            maxWidth: '500px', // Box'ın maksimum genişliği
            mx: 'auto' // Yatayda ortalamak için
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleTeklifIncele({ id: 3, baslik: 'Pekiyi Tamamlayıcı Sağlık', fiyat: '14.941,08 TL' });
              handleNext2(); // İkinci fonksiyon burada çağrılıyor
              
            }}
            sx={{
              backgroundColor: '#3f0071', // Koyu mor arka plan rengi
              color: 'white', // Beyaz yazı rengi
              textTransform: 'none', // Yazıyı büyük harfe dönüştürmez
              width: '150%', // Butonu box'ın genişliğine göre yapar
              borderRadius: '8px', // Kenarları yuvarlatır
              padding: '8px '
            }}
          >
            Teklifi İncele
          </Button>
        </Box>

        <Box
  sx={{
    backgroundColor: 'white', // Arka plan rengini beyaz yapar
    // Kenarlarını turuncu yapar
    borderRadius: '8px', // Kenarları yuvarlatır
    padding: '4px', // İç boşluk
    display: 'flex',
    justifyContent: 'center', // Butonu yatayda ortalar
    alignItems: 'center' // Butonu dikeyde ortalar
  }}
>
  <Button
    variant="outlined"
    onClick={() => {
      handleTeklifIncele({ id: 3, baslik: 'Pekiyi Tamamlayıcı Sağlık', fiyat: '14.941,08 TL' });
      handleNext(); // İkinci fonksiyon burada çağrılıyor
    }}
    sx={{
      backgroundColor: 'transparent', // Butonun arka planını şeffaf yapar
      color: 'orange', // Yazı rengini turuncu yapar
      textTransform: 'none', // Yazıyı büyük harfe dönüştürmez
      border: '2px solid orange', // Butonun kenarlarını turuncu yapar
      borderRadius: '8px', // Kenarları yuvarlatır
      padding: '10px ' // Buton içindeki boşluk
    }}
  >
    Teklifinizi Kişiselleştirin
  </Button>
</Box>

        {/* Yeni Box için metinler */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Metinler arasındaki boşluk
            mt: 3, // Üstten boşluk
            textAlign: 'left' // Metinleri sola hizalar
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'black' }}>
            ÖNE ÇIKAN TEMİNATLAR
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Limitsiz Yatarak Tedavi
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Ücretsiz Check-Up
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Online Doktor
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Yılda 10 Defa Ayakta Tedavi
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Metinler arasındaki boşluk
            mt: 5, // Üstten boşluk
            textAlign: 'left' // Metinleri sola hizalar
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'black' }}>
           SİZE YAKIN ANLAŞMALI KURUMLAR
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Medicana Sağlık Grubu
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            -Medicalpark Hastaneler Grubu
          </Typography>
          
        </Box>

      </Box>
    </div>
  </Paper>
</Grid>
      </Grid>

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


     

    </Container>
  );
};

export default TeklifDetayi;




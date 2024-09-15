import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import InfoIcon from '@mui/icons-material/Info';
import { Grid, Button, Checkbox } from '@mui/material';
import { Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const Kisisel = ({ handleNext, handleBack,handleNext2 }) => {

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

  const [katilimPayi, setKatilimPayi] = useState('');
  const [disPaketi, setDisPaketi] = useState(false);
  const [price, setPrice] = useState(selectedTeklif.fiyat);

  // Katılım payı değişim fonksiyonu
  const handleKatilimPayiChange = (event) => {
    setKatilimPayi(event.target.value);
  
    // Fiyatı sayıya çevir
    let baseFiyat = parseFloat(selectedTeklif.fiyat.replace('.', '').replace(',', '.'));
  
    if (event.target.value === '20-katilim-payi') {
      // %20 katılım payına basıldı, fiyat hesaplanır ve formatlanır
      let yeniFiyat = (baseFiyat * 0.8).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      setPrice(disPaketi ? yeniFiyat + ' TL' : yeniFiyat + ' TL');
    } else {
      // Katılım payı istemiyorum, selectedTeklif.fiyat gösterilir
      setPrice(selectedTeklif.fiyat);
    }
  };

  // Diş paketi değişim fonksiyonu
  const handleDisPaketiChange = (event) => {
    setDisPaketi(event.target.checked);
    
    // Fiyatı sayıya çevir
    let baseFiyat = parseFloat(selectedTeklif.fiyat.replace('.', '').replace(',', '.'));
  
    if (katilimPayi === '20-katilim-payi') {
      // %20 katılım payı varsa ve diş paketi seçilmişse
      let yeniFiyat = baseFiyat * 0.8 + (event.target.checked ? 100 : 0);
      setPrice(yeniFiyat.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL');
    } else {
      // %20 katılım payı yoksa ve diş paketi seçilmişse
      let yeniFiyat = baseFiyat + (event.target.checked ? 100 : 0);
      setPrice(yeniFiyat.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' TL');
    }
  };
  

  return (
    <Grid container spacing={3} justifyContent="center">
      <Box sx={{ textAlign: 'center', mb: 5, mt: 4 }}>
        <Typography variant="h6" color="white">
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

      <Grid item xs={8}>
        {/* İçerik Box ile sarılıp, daha ortalı hale getirildi */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '68%', ml: 'auto', height: '100%' }}>
          <Paper
            elevation={5}
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <InfoIcon sx={{ color: '#5e35b1', mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                Sigortalı Katılım Payı
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
              Katılım payı sadece ayakta tedavilerde geçerli olup, yatarak tedaviler limit ve teminat dahilinde %100 geçerlidir.
            </Typography>
            <RadioGroup row aria-label="katilim-payi" name="katilim-payi" onChange={handleKatilimPayiChange}>
              <FormControlLabel
                value="katilim-payi-istemiyorum"
                control={<Radio sx={{
                  '&.Mui-checked': {
                    color: '#5e35b1',
                  }
                }} />}
                label={
                  <Box sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 2, width: '200px', textAlign: 'center' }}>
                    Katılım Payı İstemiyorum
                  </Box>
                }
              />
              <FormControlLabel
                value="20-katilim-payi"
                control={<Radio sx={{
                  '&.Mui-checked': {
                    color: '#5e35b1',
                  }
                }} />}
                label={
                  <Box sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 2, width: '200px', textAlign: 'center' }}>
                    %20 Katılım Paylı
                  </Box>
                }
              />
            </RadioGroup>
          </Paper>

          <Paper elevation={4}
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
            }}>
            <Grid container direction="column" alignItems="flex-start">
              <Grid item sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <InfoIcon sx={{ color: '#5e35b1', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Diş Paketi
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', mt: 2 }}>
                <Box sx={{ border: '1px solid #ddd', borderRadius: '10px', p: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
                    4 yaş ve üzeri sigortalılarımız yılda 1 kez diş paketi hizmetinden faydalanabilecektir.
                  </Typography>
                  <Checkbox checked={disPaketi} onChange={handleDisPaketiChange} />
                </Box>
              </Grid>
            </Grid>
          </Paper>

        </Box>
      </Grid>

      {/* Sağ tarafta fiyat bilgisi için Paper */}
      <Grid item xs={4} >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            height: '62%',
            width: '38%',
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
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
          {price}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Kredi Kartlarına 6 Ay'a varan taksit imkanı
          </Typography>
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleNext2}
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
              onClick={handleBack}
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
            borderBottom: '2px solid #0000', // Yazma başladığında altı çizgili görünüm
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
  );
};

export default Kisisel;

import React, { useState } from 'react';
import { TextField, Grid, Button, Container, Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';

// Altı çizgili buton bileşeni
const UnderlinedButton = styled(Button)(({ theme }) => ({
  textDecoration: 'underline',
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  color: theme.palette.primary.main,
}));

const sendCustomerData = async (customerData) => {
  try {
    const response = await axios.post('http://localhost:5147/api/musteri', customerData);
    console.log('Müşteri bilgileri başarıyla kaydedildi:', response.data);
  } catch (error) {
    if (error.response && error.response.status === 409) {
      // 409 Conflict hatası, müşteri zaten mevcut demektir
      
    } else {
      console.error('Müşteri bilgileri kaydedilirken bir hata oluştu:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  }
};

const KisiBilgileri = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    tcKimlikNo: '',
    dogumTarihi: '',
    telefonNumarasi: '',
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.tcKimlikNo) newErrors.tcKimlikNo = 'Bu alan boş bırakılamaz';
    if (!formData.dogumTarihi) newErrors.dogumTarihi = 'Bu alan boş bırakılamaz';
    if (!formData.telefonNumarasi) newErrors.telefonNumarasi = 'Bu alan boş bırakılamaz';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        TCNo: formData.tcKimlikNo,        // `tcKimlikNo`'yu `TCNo` olarak değiştirin
        DogumTarihi: formData.dogumTarihi, // `dogumTarihi`'yi `DogumTarihi` olarak değiştirin
        TelefonNo: formData.telefonNumarasi // `telefonNumarasi`'yi `TelefonNo` olarak değiştirin
      };
      
      // Müşteri verilerini gönder ve başarılı olursa handleNext'i çağır
      await sendCustomerData(data);
      handleNext();
    }
  };
  
  

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 5,
          width: '100%',
          boxSizing: 'border-box',
          maxWidth: '2000px',
          margin: 'auto',
          borderRadius: '10px',
          boxShadow: 'none',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="body1" 
            sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}
          >
            Teklif Bilgileri
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="TC Kimlik No" 
                variant="outlined"
                name="tcKimlikNo"
                value={formData.tcKimlikNo}
                onChange={(e) => {
                  const tcKimlikNo = e.target.value.replace(/\D/g, '').slice(0, 11);
                  handleChange({ target: { name: 'tcKimlikNo', value: tcKimlikNo } });
                }}
                error={!!errors.tcKimlikNo}
                helperText={errors.tcKimlikNo}
                inputProps={{ maxLength: 11 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="Doğum Tarihi" 
                variant="outlined" 
                type="date"
                InputLabelProps={{ shrink: true }} 
                name="dogumTarihi"
                value={formData.dogumTarihi}
                onChange={handleChange}
                error={!!errors.dogumTarihi}
                helperText={errors.dogumTarihi}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telefon Numarası"
                variant="outlined"
                name="telefonNumarasi"
                value={formData.telefonNumarasi}
                onChange={handleChange}
                error={!!errors.telefonNumarasi}
                helperText={errors.telefonNumarasi}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+90</InputAdornment>,
                  inputProps: {
                    maxLength: 10,
                    pattern: "[0-9]*",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Typography sx={{ mt: 3 }} variant="body2" color="textSecondary" align="center">
            İşlenen kişisel verilerinize ilişkin ayrıntılı bilgiye{' '}
            <Link href="https://hepiyi.com.tr/media/ypodapvu/metin_1_b11_hepiyi_sigorta_teklif_ayd%C4%B1nlatma_metni_19082022.pdf" color="primary">
              Aydınlatma Metni
            </Link>
            ’nden ulaşabilirsiniz.
          </Typography>
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Button 
              type="submit" 
              variant="contained" 
              sx={{
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
            >
              Devam
            </Button>
          </Grid>
        </form>
      </Paper>
      <Paper
        elevation={3}
        sx={{ 
          p: 7,
          width: '250%',
          boxSizing: 'border-box',
          maxWidth: '1500px',
          margin: '0 auto',
          borderRadius: '10px',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          mt: 5, 
          transform: 'translateX(-25%)'
        }}
      >
        <Typography 
          variant="h6" 
          component="h2" 
          sx={{ 
            mb: 2, 
            fontSize: '16px', 
            color: '#977ef9',
            fontWeight: 'bold'
          }}
        >
          Tamamlayıcı Sağlık Sigortası Teklif Al
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 3, 
            fontSize: '14px',
            color: '#977ef9',
          }}
        >
          Oluşabilecek sağlık problemleri giderilerini önceden güvence altına almanıza yarayan tamamlayıcı sağlık sigortası, SGK ile anlaşmalı özel sağlık kuruluşlarında kaliteli ve kalifiye sağlık hizmeti almanıza olanak sağlayan bir sigorta türüdür. Genel sağlık sigortası olan herkesin yararlanabileceği bir sigorta olan TSS, hem ayakta hem de yatarak tedavilerde pek çok avantaj sağlamakla birlikte özel hastanelerin ve özel sağlık kuruluşlarının SGK ile gerçekleştirdiği anlaşmalar doğrultusunda hizmet sunar. Hem kendinizin hem de sevdiklerinizin sağlığını korumak, sağlıkla ilgili herhangi bir durum söz konusu olduğunda gerekli hizmeti özel hastanelerden sadece 15 TL katılım payı ödeyerek alabilmek için siz de hemen tamamlayıcı sağlık sigortası tekliflerini Hepiyi Sigorta üzerinden inceleyebilir ve farklı plan seçenekleri arasından ihtiyacınıza ve bütçenize göre seçim yapabilirsiniz.
        </Typography>
        <UnderlinedButton 
          variant="text" 
          sx={{ mt: 2 }}
          onClick={() => {
            console.log('Devamını Gör butonuna tıklandı.');
          }}
        >
          Devamını Gör
        </UnderlinedButton>
      </Paper>
    </Container>
  );
};

export default KisiBilgileri;


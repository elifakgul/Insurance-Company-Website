import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const sendPaymentData = async (paymentData) => {
  try {
    const response = await axios.post('http://localhost:5147/api/odeme', paymentData);
    console.log('Ödeme bilgileri başarıyla kaydedildi:', response.data);
  } catch (error) {
    console.error('Ödeme bilgileri kaydedilirken bir hata oluştu:', error);
    alert('Bir hata oluştu. Lütfen tekrar deneyin.');
  }
};
const Odeme = ({ handleNext }) => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const selectedTeklif = useSelector((state) => state.teklif.selectedTeklif);

  const formatCardNumber = (value) => {
    const onlyNums = value.replace(/\D/g, ''); // Sadece sayıları alır
    return onlyNums.match(/.{1,4}/g)?.join('/') || onlyNums; // 4 karakterde bir '/' ekler
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!cardName) newErrors.cardName = 'Boş bırakılamaz';
    if (!cardNumber) newErrors.cardNumber = 'Boş bırakılamaz';
    else if (cardNumber.replace(/\D/g, '').length !== 16) newErrors.cardNumber = '16 rakam olmalı';
    if (!expiryMonth) newErrors.expiryMonth = 'Boş bırakılamaz';
    else if (expiryMonth.length !== 2) newErrors.expiryMonth = '2 rakam olmalı';
    if (!expiryYear) newErrors.expiryYear = 'Boş bırakılamaz';
    else if (expiryYear.length !== 2) newErrors.expiryYear = '2 rakam olmalı';
    if (!cvv) newErrors.cvv = 'Boş bırakılamaz';
    else if (cvv.length !== 3) newErrors.cvv = '3 rakam olmalı';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = async () => {
    if (handleValidation()) {
      const paymentData = {
        MusteriID: 1, // Burada gerçek müşteri ID'sini kullanmalısınız
        KartNumarasi: cardNumber.replace(/\D/g, ''),
        KartUzerindekiIsim: cardName,
        SonKullanmaAy: expiryMonth,
        SonKullanmaYil: expiryYear,
        CVV: cvv
      };

      await sendPaymentData(paymentData);

      handleNext();
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        justifyContent: 'space-between',
        width: '60%',
        height: '500px',
        margin: '0 auto',
      }}
    >
      {/* Sol taraf: Ödeme Formu */}
      <Box
        flex={2}
        bgcolor="white"
        p={3}
        borderRadius={2}
        sx={{
          borderRadius: '8px',
          backgroundColor: 'background.paper',
          boxShadow: 4,
          width: '60%',
        }}
      >
        <Box sx={{ borderRadius: '8px', width: '40' }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Ödeme Seçenekleri</FormLabel>
            <RadioGroup defaultValue="krediKarti">
              <FormControlLabel
                value="krediKarti"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>Kredi Kartı</Typography>
                  </Box>
                }
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="subtitle2" mt={3} textAlign={'left'}>
            Kredi Kartı Bilgileri
          </Typography>

          <TextField
            label="Kart Üzerindeki İsim"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            error={!!errors.cardName}
            helperText={errors.cardName}
          />
          <TextField
            label="Kredi Kartı Numarası"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardNumber}
            onChange={handleCardNumberChange}
            inputProps={{ maxLength: 19 }} // 16 rakam + 3 tane '/'
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
          />
          <Box display="flex" justifyContent="space-between">
            <TextField
              label="Ay"
              variant="outlined"
              margin="normal"
              sx={{ width: '30%' }}
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              inputProps={{ maxLength: 2 }}
              error={!!errors.expiryMonth}
              helperText={errors.expiryMonth}
            />
            <TextField
              label="Yıl"
              variant="outlined"
              margin="normal"
              sx={{ width: '30%' }}
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              inputProps={{ maxLength: 2 }}
              error={!!errors.expiryYear}
              helperText={errors.expiryYear}
            />
            <TextField
              label="CVV"
              variant="outlined"
              margin="normal"
              sx={{ width: '30%' }}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              inputProps={{ maxLength: 3 }}
              error={!!errors.cvv}
              helperText={errors.cvv}
            />
          </Box>
        </Box>
      </Box>

      {/* Sağ taraf: Özet */}
      <Box
        flex={1}
        bgcolor="white"
        p={3}
        borderRadius={2}
        ml={2}
        sx={{
          borderRadius: '8px',
          width: '35%',
          boxShadow: 1,
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
        {selectedTeklif.baslik}
        </Typography>
        <Typography variant="h4" color="black" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
        {selectedTeklif.fiyat}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Kredi Kartlarına 6 Ay'a varan taksit imkanı
        </Typography>

        <FormControlLabel
          control={<Checkbox />}
          label="Mesafeli Satış Sözleşmesini okudum, onay veriyorum."
          sx={{ marginBottom: '20px', textAlign: 'center' }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
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
          Ödemeyi Tamamla
        </Button>
      </Box>

      {/* Snackbar */}
     {/* Snackbar */}
     <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            fontSize: '1.5rem', // Daha büyük font boyutu
            minWidth: '350px',  // Minimum genişlik
            padding: '20px',   // İçerik padding
          },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            fontSize: '1.5rem', // Daha büyük font boyutu
            padding: '20px',   // İçerik padding
          }}
        >
          Ödeme işleminiz başarıyla gerçekleştirildi!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Odeme;

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import hepLogo from '../foto/hep.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Stepper'da kullanacağımız adımlar
const steps = ['Kişi Bilgileri', 'Onay Kodu', 'Sigortalı Bilgileri', 'Teklif Detayı','Ödeme Bilgileri'];

// Özelleştirilmiş StepConnector bileşeni
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: '#977ef9', // Çizgi rengi mor
    borderWidth: '3px',  // Çizgi kalınlığı
    borderRadius: 1,
  },
}));

const CustomStepIcon = styled('div')(({ theme, active, completed }) => ({
  width: '40px', // İkonun genişliği
  height: '40px', // İkonun yüksekliği
  borderRadius: '50%', // Yuvarlak ikon
  border: `2px solid ${active ? '#f57c00' : '#977ef9'}`, // Kenar rengini belirleme
  display: 'flex', // İçeriği ortalamak için
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: active ? '#f57c00' : '#fff', // Arka plan rengini belirleme
  color: active ? '#fff' : '#000', // Aktif adımda beyaz, diğer adımlarda siyah rakam
  fontSize: '16px', // Rakamların boyutu
}));

// Stepper bileşeni
const StepperComponent = ({ activeStep, handleBack, setActiveStep }) => {

  const handleStepClick = (stepIndex) => {
    if (stepIndex === 5) {
      setActiveStep(6); // 5. step'e tıklanırsa, 6. adıma geçiş
    } else {
      setActiveStep(stepIndex);
    }
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
        margin: 'auto',
        padding: '15px 0',  
        textAlign: 'center',
        backgroundColor: '#977ef9',
        position: 'relative',
      }}
    >
      <Box 
        sx={{ 
          width: '80%',
          maxWidth: '1100px',
          margin: 'auto',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          mt: '60px',
        }}
      >
        {/* Geri butonu */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center',
            backgroundColor: 'white', 
            borderRadius: '50%', 
            width: '40px', 
            height: '40px', 
            justifyContent: 'center',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          onClick={handleBack}
        >
          <ArrowBackIcon sx={{ color: '#977ef9' }} />
        </Box>
        
        <Box
          component="img"
          src={hepLogo}
          alt="Hepiyi Sigorta Logo"
          sx={{
            position: 'relative', 
            margin: '0 auto',
            marginBottom: '30px',
            width: '115px',
            height: '90px',
          }}
        />
        
        <Box sx={{ width: '65%', margin: 'auto' }}>
        <Stepper
  activeStep={
    activeStep === 6 
      ? 4 
      : (activeStep === 4 || activeStep === 5) 
      ? 3 
      : activeStep
  }
  connector={<CustomStepConnector />}
  sx={{
    width: '100%',
    '.MuiStep-root': {
      '& .MuiStepLabel-root': {
        flexDirection: 'column',
        alignItems: 'center',
      },
      '& .MuiStepLabel-label': {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        mt: 1,
      },
    },
  }}
>
  {steps.map((label, index) => (
    <Step key={label}>
      <StepLabel 
        StepIconComponent={(props) => (
          <CustomStepIcon 
            active={index === (
              activeStep === 6 
                ? 4 
                : (activeStep === 4 || activeStep === 5) 
                ? 3 
                : activeStep
            )} 
            completed={props.completed}
          >
            {index + 1}
          </CustomStepIcon>
        )}
        onClick={() => handleStepClick(index)} 
        style={{ cursor: 'pointer' }}
      >
        {label}
      </StepLabel>
    </Step>
  ))}
</Stepper>

        </Box>
      </Box>
    </Box>
  );
};

export default StepperComponent;





import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StepperComponent from './comp/StepperComponent';
import BackgroundComponent from './comp/plan';
import KisiBilgileri from './comp/KisiBilgileri';
import SigortaBilgileri from './comp/SigortaBilgileri';
import TeklifDetayi from './comp/TeklifDetayi';
import OnayOdeme from './comp/OnayOdeme';
import Odeme from './comp/Odeme';
import EkstraBilgiler from './comp/EkstraBilgiler';
import Kisisel from './comp/Kisisel';
import Stepper from '@mui/material/Stepper';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const handleNext = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevStep) => prevStep +1);
    
  };
  const handleNext2 = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevStep) => prevStep +2);
    
  };
const handleBack = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
    
  };
const handleBack2 = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 2 : 0));
   
  };
const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <KisiBilgileri handleNext={handleNext} />;
      case 1:
        return <EkstraBilgiler handleNext={handleNext} />; // Yeni adım
      case 2:
        return <SigortaBilgileri handleNext={handleNext} />;
      case 3:
        return <TeklifDetayi handleNext={handleNext} handleNext2={handleNext2} />;
      case 4:
        return <Kisisel handleNext={handleNext}  handleBack={handleBack} handleNext2={handleNext2}  />;
      case 5:
        return <OnayOdeme handleNext={handleNext}  handleBack2={handleBack2}  />;
      case 6:
        return <Odeme handleNext={handleNext} />;
      default:
        return <Odeme handleNext={handleNext} />;
    }
  };
  

  return (
    
      <ThemeProvider theme={theme}>
        <BackgroundComponent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <StepperComponent activeStep={activeStep} completed={completed} handleBack={handleBack} 
                setActiveStep={setActiveStep}/>
              </Grid>
              {activeStep === 0 && (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      mt: 0, // Stepper ve açıklama arasında boşluk
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: '#977ef9', // Arka plan rengi
                      borderRadius: '8px',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ mb: 0, fontWeight: 'bold', color: 'white' }}
                    >
                      Tamamlayıcı Sağlık Sigortası Teklifi Al!
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ color: 'white' }}
                    >
                      Size özel tss teklifi sunabilmemiz için lütfen formu doldurunuz.
                    </Typography>
                  </Box>
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      mt: 2, // Stepper ve açıklama arasında boşluk
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: '#977ef9', // Arka plan rengi
                      borderRadius: '8px',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ mb: 1, fontWeight: 'bold', color: 'white' }}
                    >
                      Sigortalı Bilgileri
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ color: 'white' }}
                    >
                      Sigorta bilgilerinizi eksiksiz bir şekilde doldurunuz.
                    </Typography>
                  </Box>
                </Grid>
              )}
              {activeStep === 6 && (           
                  <Box
                    sx={{
                      width:'60%',
                      mt: 2, // Stepper ve açıklama arasında boşluk
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: '#977ef9', // Arka plan rengi
                      borderRadius: '8px',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ mb: 1, fontWeight: 'bold', color: 'white' }}
                    >
                      Hepiyi Sigortalı olmanıza tek bir adım kaldı. Lütfen ödeme işlemini tamamlayınız.
                    </Typography>                   
                  </Box>
                
              )}
              {activeStep === 1 && (
                
                <Box 
                sx={{
                  backgroundColor: '#977ef9',
                  width: '100%',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '0 0 20px 20px',
                  color: '#FFFFFF'
                }}
              >
                <Typography variant="h4" fontWeight="bold">Lütfen cep telefonunuza gönderilen doğrulama kodunu giriniz...</Typography>
              </Box>
              
            )}
              <Grid item xs={12}>
                {renderForm()}
              </Grid>
              
            </Grid>
          </Box>
        </BackgroundComponent>
      </ThemeProvider>
   
  );
}

export default App;















  



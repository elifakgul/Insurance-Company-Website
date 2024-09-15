import React from 'react';
import { Box } from '@mui/material';

const BackgroundComponent = ({ children }) => {
  return (
    <Box 
      sx={{ 
        height: '180vh', 
        width: '100vw',  // Genişliği tam ekran yapıyoruz
        display: 'flex', 
        flexDirection: 'column',
        margin: 0,  // Varsayılan margin'i sıfırlıyoruz
        padding: 0  // Varsayılan padding'i sıfırlıyoruz
      }}
    >
      {/* Üstteki Mor Arka Plan */}
      <Box
        sx={{
          height: '35%',
          width: '100%',  // Genişliği tam ekran yapıyoruz
          backgroundColor: '#977ef9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // Stepper'ın taşması için gerekli
          overflow: 'visible',  // Stepper'ın taşmasını sağlamak için
          margin: 0,  // Varsayılan margin'i sıfırlıyoruz
          padding: 0  // Varsayılan padding'i sıfırlıyoruz
        }}
      >
        <Box
          sx={{
            position: 'absolute',  // Stepper'ın mor alandan taşmasını sağlamak için
            top: '-10%',           // Stepper'ı biraz yukarı taşıyoruz
            width: '100%',         // Tam genişlik
            display: 'flex',
            justifyContent: 'center',
            margin: 0,  // Varsayılan margin'i sıfırlıyoruz
            padding: 0  // Varsayılan padding'i sıfırlıyoruz
          }}
        >
          {children} {/* Stepper burada render edilecek */}
        </Box>
      </Box>

      {/* Alttaki Açık Renk Arka Plan */}
      <Box
        sx={{
          height: '65%',
          width: '100%',  // Genişliği tam ekran yapıyoruz
          backgroundColor: '#fdf1e6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,  // Varsayılan margin'i sıfırlıyoruz
          padding: 0  // Varsayılan padding'i sıfırlıyoruz
        }}
      />
    </Box>
  );
};

export default BackgroundComponent;
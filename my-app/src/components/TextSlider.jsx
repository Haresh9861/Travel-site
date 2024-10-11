import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const TextSlider = () => {
  const sliderSettings = {
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box
      sx={{
        backgroundColor: '#333333',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#eeeeee',
        fontFamily: 'Titillium Web, Helvetica, Arial, sans-serif',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 300, marginBottom: '3rem' }}>
          Find. Connect. Do.
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
          Find and do a physical activity with someone in your area.
        </Typography>
        <Slider {...sliderSettings}>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', lineHeight: '3rem' }}>
            Take a leisurely jog in the park…together
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', lineHeight: '3rem' }}>
            Try a spin class...together
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', lineHeight: '3rem' }}>
            Take a bike ride around the city...together
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', lineHeight: '3rem' }}>
            Go for an indoor tennis practice...together
          </Typography>
        </Slider>
      </Container>
    </Box>
  );
};

export default TextSlider;

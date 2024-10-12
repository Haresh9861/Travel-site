"use client";

import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

const TextSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  const textItems = ["DISCOVER", "EXPLORE", "TRAVEL"];

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {textItems.map((item, index) => (
          <Box key={index}>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                m: 0,
                fontSize: "180px",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TextSlider;

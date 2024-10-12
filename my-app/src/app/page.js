import NavBar from "@/components/NavBar";
import SlideTabs from "@/components/SlideTabs";
import TextSlider from "@/components/TextSlider";
import Image from "next/image";
import White from "../../public/images/white.png";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className="hero_section" sx={{ position: "relative" }}>
        <NavBar />
        <Container maxWidth="xl" sx={{ color: "#fff" }}>
          <Typography variant="h4" sx={{ textAlign: "center", mt: 12 }}>
            One Adventure At A Time
          </Typography>
          <TextSlider />
          <SlideTabs />
        </Container>
      </Box>
      <Box sx={{ color: "#111", bgcolor: "#F2F4F6", position: "relative" }}>
        <Image
          src={White}
          style={{
            position: "absolute",
            width: "100%",
            maxHeight: "250px",
            left: "0",
            top: "-150px",
          }}
          alt="layer-match"
        />
        <Box sx={{ pt: 12 }}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Popular & Unique Places to Stay
          </Typography>
        </Box>
      </Box>
    </>
  );
}

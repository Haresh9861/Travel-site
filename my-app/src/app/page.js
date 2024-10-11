import NavBar from "@/components/NavBar";
import SlideTabs from "@/components/SlideTabs";

import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box className="hero_section">
        <NavBar />
        {/* <TextSlider/> */}
      <Box sx={{margin:"Auto"}}>
        <SlideTabs/>
        </Box>
        
      </Box>
    </>
  );
}

import React from "react";
import { Box, Grid,} from "@mui/material"; 
import CardGenerator from "./CardGenerator";
import { cardData } from "../../data/data";
import Header from "./Header";


export default function LandingPage() {
  return (
    <div align="center">
      <Header />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: {
            xs: "",
            sm: "",
            md: "url('/Images/bg/generalbg.jpg')",
          },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >

        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "1500px",
            paddingX: "15px",
            paddingY: "20px",
          }}
        >
          {cardData.map((card) => {
            return (
              <Grid item md={4} key={card.id}>
                <CardGenerator
                  image={card.image}
                  alt={card.alt}
                  titel={card.titel}
                  body={card.body}
                  externalLink={card.externalLink}
                  internalLink={card.internalLink}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

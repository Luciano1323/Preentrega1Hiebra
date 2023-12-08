import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <ChakraProvider>
      <Box
        p={4}
        bg="#2C241E" 
        color="white" 
        h="100vh" 
        textAlign="center"
        display="flex"
        flexDirection="column"
      >
        <h1>{greeting}</h1>
        <ol style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>Coffe and Chill</li>
          <li>un lugar donde la maravilla es el cafe</li>
          <li>el cafe ideal para vos se encuentra en esta tienda</li>
        </ol>
      </Box>
    </ChakraProvider>
  );
};

export default ItemListContainer;

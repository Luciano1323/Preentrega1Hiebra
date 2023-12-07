import React from 'react';
import { Container } from '@chakra-ui/react';

const ItemListContainerComponent = () => {
  
  return (
    <Container bg='tomato' w='100%' h='92vh' p={4} color='white' fontSize="2rem" textAlign="center" >
      <ol style={{ listStyleType: 'none', padding: 0 }}>
      <li >
      <h1 >Coffe and Chill</h1>
      </li>
      <li>
      <p>Un lugar sin igual para tomar una merienda</p>
      </li>
      <li>
      <p>Sin lugar a dudas sabemos cual es el mejor cafe para vos</p>
      </li>
      </ol>
    </Container>
  );
};

export default ItemListContainerComponent;

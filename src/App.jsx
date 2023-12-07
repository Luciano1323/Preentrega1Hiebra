import React from 'react';
import Container from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import { Icon } from '@chakra-ui/react';
function App() {
  return (
    <div>
      <NavBar />
      <Container />
    </div>
  );
}

export default App;
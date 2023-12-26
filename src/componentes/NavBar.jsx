import React from "react";
import CartWidget from "./CartWidget";
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Link as ChakraLink,
  Icon,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Box>
      <Flex
        alignItems="center"
        p="4"
        bg="teal.500"
        color="white"
        backgroundColor="black"
      >
        <Box p="2">
          {/* Cambiado el atributo 'to' a la ruta de ItemListContainer */}
          <ReactRouterLink to="/cafes" fontSize="lg" fontWeight="bold" display="flex" alignItems="center">
            <Icon as={HamburgerIcon} boxSize={6} mr={2} />
            <Heading as="h1" size="md" display="inline-block" verticalAlign="middle">
              {/* Cambiado el atributo 'to' a la ruta de ItemListContainer */}
              <ReactRouterLink to="/cafes" style={{ color: "white", textDecoration: "none" }}>
                Coffe and Chill
              </ReactRouterLink>
            </Heading>
          </ReactRouterLink>
        </Box>
        <Box flex="1" textAlign="center" p="1" paddingRight="20">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
              px="2"
            >
              Inicio
            </MenuButton>
            <MenuList color="white" backgroundColor="black">
              <MenuItem backgroundColor="black">
                <ReactRouterLink to="/cafes">Cafes</ReactRouterLink>
              </MenuItem>
              <MenuItem backgroundColor="black">
                <ChakraLink href="#">Tazas</ChakraLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
            >
              Experiencias
            </MenuButton>
            <MenuList backgroundColor="black">
              <MenuItem color="white" backgroundColor="black">
                <ChakraLink href="#">Big Box</ChakraLink>
              </MenuItem>
              <MenuItem color="white" backgroundColor="black">
                <ChakraLink href="#">Reserva de mesa</ChakraLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <CartWidget itemCount={3} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
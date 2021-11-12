import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
} from '@chakra-ui/react';

import colors from './constants/colors';

export const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <Box height="100vh" bgGradient={`linear(to-b, white, ${colors.ivory})`}>
      <Container paddingTop="2rem">
        <Heading
          as="h1"
          size="4xl"
          color={colors.gold}
          fontFamily="serif"
          textAlign="center"
        >
          Megan &amp; Jordan
        </Heading>
        <Divider marginY="1rem" borderColor="rgb(200, 200, 200)" />
        <Heading textAlign="center" marginBottom="1rem" color={colors.green}>
          Find your table
        </Heading>
        <Flex>
          <Input
            name="searchTerm"
            value={searchTerm}
            placeholder="Start typing to find your name"
            focusBorderColor={colors.green}
            _placeholder={{ color: colors.green, fontWeight: '500' }}
            marginRight="1rem"
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <Button
            color={colors.green}
            _focus={{ outlineColor: colors.green }}
            variant="link"
            onClick={() => setSearchTerm('')}
          >
            Clear
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';
import faker from 'faker';
import Fuse from 'fuse.js';

import colors from './constants/colors';

type Person = {
  name: string;
  table: number;
};

export const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [people] = React.useState<Person[]>(
    new Array(100).fill('').map(() => ({
      name: faker.name.findName(),
      table: Math.round(Math.random() * 12),
    }))
  );
  const [filteredPeople, setFilteredPeople] = React.useState<any[]>([]);
  const fuzzySearch = new Fuse(people, {
    distance: 50,
    minMatchCharLength: 2,
    threshold: 0.15,
    keys: ['name'],
  });
  const handleOnChange = (term: string) => {
    setFilteredPeople(fuzzySearch.search(term));
    setSearchTerm(term);
  };

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
        <Flex marginBottom="1rem">
          <Input
            name="searchTerm"
            value={searchTerm}
            placeholder="Start typing to find your name"
            focusBorderColor={colors.green}
            _placeholder={{ color: colors.green, fontWeight: '500' }}
            marginRight="1rem"
            onChange={(e) => handleOnChange(e.target.value)}
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
        <Box maxHeight="25rem" overflowY="scroll">
          {searchTerm.length >= 2 && filteredPeople.length > 0 && (
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Table Number</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredPeople.map(({ item: person }, index) => (
                  <Tr key={index}>
                    <Td>{person?.name}</Td>
                    <Td>{person?.table}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
          {searchTerm.length >= 2 && filteredPeople.length === 0 && (
            <Text textAlign="center">
              Hmm, we can't find your name. Try again.
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  );
};

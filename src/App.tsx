import React from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';

import {
  Box,
  Flex,
  Grid,
  Heading,
  Input,
  Paragraph,
  TextButton,
} from './components/styled';

import colors from './constants/colors';
import data from './constants/data';

export const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredPeople, setFilteredPeople] = React.useState<any[]>([]);
  const fuzzySearch = new Fuse(data, {
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
    <Flex
      backgroundColor={colors.ivory}
      width="100%"
      height="100vh"
      padding="2rem 1rem"
      justifyContent="center"
    >
      <Flex flexDirection="column" width="100%" maxWidth="30rem">
        <Heading
          fontSize="4rem"
          textAlign="center"
          fontFamily="serif"
          color={colors.gold}
        >
          Megan &amp; Jordan
        </Heading>
        <Divider />
        <Heading as="h2" textAlign="center" marginBottom="1rem">
          Find your table
        </Heading>
        <Flex>
          <Input
            placeholder="Start typing to find your name"
            type="text"
            value={searchTerm}
            onChange={(e) => handleOnChange(e.target.value)}
            marginRight="1rem"
            autoFocus
          />
          <TextButton onClick={() => setSearchTerm('')}>Clear</TextButton>
        </Flex>
        <Box maxHeight="25rem" overflowY="scroll" marginTop="1rem">
          {searchTerm.length >= 2 && filteredPeople.length > 0 && (
            <>
              <GridRow>
                <Paragraph fontWeight="500" fontSize="0.875rem">
                  NAME
                </Paragraph>
                <Paragraph fontWeight="500" fontSize="0.875rem">
                  TABLE NUMBER
                </Paragraph>
              </GridRow>
              {filteredPeople.map(({ item: person }, index) => (
                <GridRow>
                  <Paragraph>{person.name}</Paragraph>
                  <Paragraph>{person.tableNumber}</Paragraph>
                </GridRow>
              ))}
            </>
          )}
          {searchTerm.length >= 2 && filteredPeople.length === 0 && (
            <Paragraph textAlign="center">
              Hmm, we can't find your name. Try again.
            </Paragraph>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid rgb(200, 200, 200);
  margin: 1rem 0;
`;

const GridRow = styled(Grid)`
  grid-template-columns: 2fr 1fr;
  border-bottom: 1px solid rgb(215, 215, 215);
`;

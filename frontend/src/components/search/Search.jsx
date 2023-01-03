import { Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi';
const Search = () => {
  return (
    <Flex alignItems={'center'} gap='.5rem' bg={'whitesmoke'} borderRadius='50px' p={'.5rem'}>
        <FiSearch fontSize={'25px'}/>
        <Input variant={'unstyled'} placeholder='Search'/>
    </Flex>
  )
}

export default Search
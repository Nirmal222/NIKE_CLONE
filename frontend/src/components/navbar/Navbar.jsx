import { Box } from '@chakra-ui/react'
import React from 'react'
import BottomNav from './BottomNav'
import TopNav from './TopNav'

const Navbar = () => {
  return (
    <Box>
        <TopNav/>
        <BottomNav/>
    </Box>
  )
}

export default Navbar
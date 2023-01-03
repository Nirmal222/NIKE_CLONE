import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from './Dropdown.module.css'
const Dropdown = ({cName,subMenu}) => {
  return (
    <Box className={cName}>{subMenu[0]}</Box>
  )
}

export default Dropdown
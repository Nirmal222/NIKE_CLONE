import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Jordan from '../../utils/Jordan.jsx'
import styles from './Navbar.module.css'

const TopNav = () => {
  return (
    <Flex bg='whitesmoke' alignItems={'center'} justifyContent={'space-between'} p={'.5rem 2.5rem'}>
        <Jordan/>
        <Flex fontSize={'xs'} >
            <Text>Find a Store</Text>
            <span className={styles.pipeline}>|</span>
            <Text>Help</Text>
            <span className={styles.pipeline}>|</span>
            <Text>Join Us</Text>
            <span className={styles.pipeline}>|</span>
            <Text>Sign In</Text>
        </Flex>
    </Flex>
  )
}

export default TopNav
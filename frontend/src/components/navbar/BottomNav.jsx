import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from '../../utils/Logo'
import Search from '../search/Search'
import { FiHeart } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import styles from './Navbar.module.css';
import Dropdown from './dropdown/Dropdown';
const BottomNav = () => {
  const [subMenu, setSubMenu] = useState([]);
  const [hover, setHover] = useState(false);
  const handleOnHover = (event)=>{
    setSubMenu(['Hello']);
    setHover(true);
  }
  const handleOffHover = (event)=>{
    setSubMenu([]);
    setHover(false);
  }
  return (
    <Flex position={'relative'} alignItems={'center'} justifyContent={'space-between'} p={'.5rem 2rem'}>
        
        <Logo/>
        
        <Flex onMouseOver={(event)=>{handleOnHover(event)}} onMouseOut={(event)=>{handleOffHover(event)}} position={'absolute'} left='50%' transform={'translateX(-50%)'} fontWeight='600'>
            <Text className={styles.menuItem}>Men</Text>
            <Text className={styles.menuItem}>Women</Text>
            <Text className={styles.menuItem}>Kids</Text>
            <Text className={styles.menuItem}>Customise</Text>
            <Text className={styles.menuItem}>Sale</Text>
            <Text className={styles.menuItem}>SNKRS</Text>
        </Flex>
  
          <Dropdown cName={hover?'showDropDown':'hideDropDown'} subMenu = {subMenu}/>
  
        <Flex alignItems={'center'} justifyContent='space-around' gap='1rem'>
            <Search/>
            <FiHeart  fontSize={'25px'}/>
            <BsBag  fontSize={'25px'}/>
        </Flex>
    </Flex>
  )
}

const dropDown = []

export default BottomNav
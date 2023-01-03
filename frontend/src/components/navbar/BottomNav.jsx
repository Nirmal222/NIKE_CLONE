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

const dropDown = {
  'New & Features': ['New Release', 'SNKRS launch calender', 'Member Access', 'Air Force 1', 'Basic Essentials', 'Football Club Kits', 'Sustainable Materials', 'Sale'],
  'Shoes': ['Newest Sneakers', 'All Shoes', 'LifeStyle', 'Running', 'Basketball', 'Jordan', 'Football', 'Gym & Training', 'Skateboarding', 'Tennis', 'Sandals & Slides', 'All Sale Shoes'],
  'Clothing': ['All Clothing', 'Performance Essential', 'Tops and T-Shirts', 'Jerseys and Kits', 'Hoodies and Sweatshirts', 'Jackets and Gilets', 'Pants and Leggins', 'Tracksuits', 'All Sale Clothing'],
  'Shop': [ {'Shop By Sport':['Running', 'Football', 'Basketball', 'Training', 'Yoga', 'Skateboarding', 'Tennis and Golf']}, { 'Shop By Brands':['Nike SportsWare', 'Nike Lab', 'Nike By You', 'Jordan', 'ACG', 'NBA', 'Nike SB'] } ],
  'Icons': ['Air Force 1', 'Pegasus', 'Blazer', 'Air Jordan 1', 'Air Max']
}

export default BottomNav
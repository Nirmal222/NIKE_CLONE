import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const MenuBox = ({hover,subMenu,handleOffHover}) => {
  return (
    <Box className = {hover?'hideItems showItems':'hideItems'} >
        <Flex gap={'5rem'}>
            <Box>
                <Text fontSize={'xl'} fontWeight='700'>New & Features</Text>
                {subMenu.NewFeatures && subMenu.NewFeatures.map((e,i)=>{
                    return <Box key={i}>
                        <Text>{e}</Text>
                    </Box>
                }) }
            </Box>

            <Box>
                <Text fontSize={'xl'} fontWeight='700'>Shoes</Text>
                {subMenu.Shoes && subMenu.Shoes.map((e,i)=>{
                    return <Box key={i}>
                        <Text>{e}</Text>
                    </Box>
                }) }
            </Box>

            <Box>
                <Text fontSize={'xl'} fontWeight='700'>Clothing</Text>
                {subMenu.Clothing && subMenu.Clothing.map((e,i)=>{
                    return <Box key={i}>
                        <Text>{e}</Text>
                    </Box>
                }) }
            </Box>

            <Box>
                <Text fontSize={'xl'} fontWeight='700'>ShopBySport</Text>
                {subMenu.Shop && subMenu.Shop[0].ShopBySport.map((e,i)=>{
                    return <Box key={i}>
                        <Text>{e}</Text>
                    </Box>
                }) }
                <br />
                <Text fontSize={'xl'} fontWeight='700'>ShopByBrands</Text>
                {subMenu.Shop && subMenu.Shop[1].ShopByBrands.map((e,i)=>{
                    return <Box key={i}>
                        <Text>{e}</Text>
                    </Box>
                }) }
            </Box>

            <Box>
                <Text fontSize={'xl'} fontWeight='700'>Icons</Text>
                {subMenu.Icons && subMenu.Icons.map((e,i)=>{
                    return <Box key={i}>
                        <Text>{e}</Text>
                    </Box>
                }) }
            </Box>

        </Flex>
    </Box>
  )
}

export default MenuBox
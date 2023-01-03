import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import styles from './Dropdown.module.css'
const Dropdown = ({ hover, cName, handleOffHover }) => {
  return (
    <Box className={cName} onMouseOut={(event)=>{handleOffHover(event)}}>
      
    </Box>
  );
};

export default Dropdown;

// Please go to indexe.css for styles

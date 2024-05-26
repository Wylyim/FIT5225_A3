import { Link, Button, Center, Text } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const ActionButton = ({buttonText, onClick, color, w}) => {

    return (
        <Button 
                w={w? w : "8rem"} 
                h="3.4em" 
                mb="0.3em" 
                borderWidth="3px"
                border={`${color} solid 2.5px`}
                bg="white"
                onClick={onClick}
            >
                <Center>
                    <Text className="button-txt" color={color}>{buttonText}</Text>
                </Center>
        </Button>
    )
}

export default ActionButton;
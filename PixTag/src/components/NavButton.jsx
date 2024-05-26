import { Link, Button, Center, Text } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const NavButton = ({buttonText, buttonUrl}) => {
    let location = useLocation();
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if(location['pathname'] === `/${buttonUrl}`) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }, [location]);

    return (
        <Link href={`/${buttonUrl}`}>
            <Button 
                w="8rem" 
                h="3.4em" 
                mb="0.3em" 
                borderWidth="3px"
                border={clicked ? "white solid 2.5px": "black solid 2.5px"}
                bg={ clicked ? "black" : "white"}
            >
                <Center>
                    <Text className="button-txt" color={clicked ? "white" : "black"}>{buttonText}</Text>
                </Center>
            </Button>
        </Link>
    )
}

export default NavButton;
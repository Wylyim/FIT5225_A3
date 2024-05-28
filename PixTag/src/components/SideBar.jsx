import { Box, VStack, Flex, Spacer, Center } from "@chakra-ui/react";
import NavButton from "./NavButton.jsx"
import ActionButton from "./ActionButton.jsx";

const SideBar = () => {
    const pages = [
        {title:"Home", url:"images/"},
        {title:"Upload\nimage", url:"images/upload"},
        {title:"Find\nthumbnails", url:"images/query-thumb-url"},
        {title:"Query\ntags", url:"images/query-tags"},
        {title:"Delete\nimage", url:"images/delete"},
        {title:"Match\nimage", url:"images/match"},
        {title:"Update\ntags", url:"images/update-tags"},
    ]   
    
    const sideBarButtons = pages.map((page) => {
        return (
            <NavButton
                key={page['url']}
                buttonText={page['title']}
                buttonUrl={page['url']}
            />
        )
    })

    console.log(sideBarButtons)

    return (
        <Box minW="10em" maxH="100%" bg="#1E2E83">
            <Box h="2em"/>
            <Center axis="horizontal">
                <Flex h="100vh" flexDirection="column">
                    <VStack>
                        {sideBarButtons}
                    </VStack>
                    <Spacer/>
                    <ActionButton
                        className=""
                        buttonText={`Sign\nout`}
                        onClick={()=> {}}
                        color="black"
                        w="8rem"
                    />
                </Flex>
            </Center>
            <Box h="1em" />
        </Box>
    )
}

export default SideBar;
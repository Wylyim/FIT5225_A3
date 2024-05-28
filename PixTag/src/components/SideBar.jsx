import { Box, VStack, Flex, Spacer, Center } from "@chakra-ui/react";
import NavButton from "./NavButton.jsx"
import ActionButton from "./ActionButton.jsx";

const SideBar = () => {
    const pages = [
        // {title:"Home", url:"images/"},
        {title:"Upload\nimage", url:"images/upload"},
        {title:"Match\nimage", url:"images/match"},
        {title:"Find\nthumbnails", url:"images/query-thumb-url"},
        {title:"Query\ntags", url:"images/query-tags"},
        {title:"Update\ntags", url:"images/update-tags"},
        {title:"Delete\nimage", url:"images/delete"}
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
        <Box minW="10em" h="100%" bg="#1E2E83">
            <Center axis="horizontal">
                <Flex flexDirection="column" h="100vh">
                    <Box h="2em"/>
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
                    <Box h="1em"/>
                </Flex>

            </Center>

        </Box>
    )
}

export default SideBar;
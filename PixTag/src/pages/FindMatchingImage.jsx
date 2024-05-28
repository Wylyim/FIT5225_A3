import {FileUpload, PageTitle} from "../components/";
import {Box, Center, Flex} from "@chakra-ui/react";
import {useState} from "react";

const FindMatchingImage = () => {
    const [response, setResponse] = useState(null)

    const fetchRequest = () => {

    }

    return (
        <Box w="100%" t="0px">
            <Center>
                <Flex flexDirection="column" h="100vh" w="80%">
                    <Box h="4em"/>
                    <PageTitle title="Find matching images"/>
                    <Box h="1em"/>
                    <FileUpload
                        fetchRequest={fetchRequest()}
                        resSetter={setResponse}
                    />
                    {/* FETCH RES DISPLAY */}
                </Flex>
            </Center>
        </Box>
    )
}

export default FindMatchingImage;
import {Box, Flex, Center} from "@chakra-ui/react";
import {PageTitle, FileUpload} from "../components/";
import {useState} from "react";

const UploadImage = () => {
    const [response, setResponse] = useState(null)

    const fetchRequest = () => {

    }

    return (
        <Box w="100%" t="0px">
            <Center>
                <Flex flexDirection="column" h="100vh" w="80%">
                    <Box h="4em"/>
                    <PageTitle title="Upload new image"/>
                    <Box h="1em"/>
                    <FileUpload
                        fetchRequest={fetchRequest()}
                        resSetter={setResponse}
                    />
                </Flex>
            </Center>
        </Box>
    )
}

export default UploadImage;
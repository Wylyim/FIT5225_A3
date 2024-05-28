import {Box, Flex, Center} from "@chakra-ui/react";
import {PageTitle, FileUpload} from "../components/";

const UploadImage = () => {

    return (
        <Box w="100%" t="0px">
            <Center>
                <Flex flexDirection="column" h="100vh" w="80%">
                    <Box h="4em"/>
                    <PageTitle title="Upload new image"/>
                    <Box h="1em"/>
                    <FileUpload />
                </Flex>
            </Center>
        </Box>
    )
}

export default UploadImage;
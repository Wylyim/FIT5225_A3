import {Box, VStack} from "@chakra-ui/react";
import {PageTitle, FileUploadBox} from "../components/";

const UploadImage = () => {

    return (
        <Box w="100%" t="0px">
            <VStack>
                <PageTitle title="Upload new image"/>
                <FileUploadBox />
            </VStack>

        </Box>
    )
}

export default UploadImage;
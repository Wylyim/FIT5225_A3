import {PageTitle, SearchBar, SubmissionButtons} from "../components/";
import {useState} from "react";
import {Box, Center, Flex} from "@chakra-ui/react";

const DeleteImage = () => {
    // eslint-disable-next-line no-unused-vars
    const [query, setQuery] = useState('')
    const [response, setResponse] = useState(null)

    const fetchRequest = () => {

    }

    return (
        <Box w="100%" t="0px">
            <Center>
                <Flex flexDirection="column" h="100vh" w="80%">
                    <Box h="4em"/>
                    <PageTitle title="Image deletion"/>
                    <Box h="1em"/>
                    <SearchBar
                        placeholder="Enter thumbnail URLs as a comma separated list e.g. URL1,URL2"
                        setQuery={setQuery}
                    />
                    <Box h="1em"/>
                    <SubmissionButtons
                        fetchRequest={fetchRequest}
                        resSetter={setResponse}
                        resetQuery={() => setQuery('')}
                    />
                </Flex>
            </Center>
        </Box>
    )
}

export default DeleteImage;
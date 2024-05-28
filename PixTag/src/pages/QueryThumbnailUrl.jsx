import {PageTitle, SearchBar, SubmissionButtons} from "../components/";
import {Box, ButtonGroup, Center, Flex} from "@chakra-ui/react";
import {useState} from "react";

const QueryThumbnailUrl = () => {
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
                    <PageTitle title="Find thumbnails"/>
                    <Box h="1em"/>
                    <SearchBar
                        placeholder="Enter thumbnail URL"
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

export default QueryThumbnailUrl;
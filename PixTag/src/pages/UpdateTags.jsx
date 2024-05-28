import {PageTitle, SearchBar, SubmissionButtons} from "../components/";
import {useState} from "react";
import {Box, Center, Flex, Radio, RadioGroup, Stack} from "@chakra-ui/react";

const UpdateTags = () => {
    // eslint-disable-next-line no-unused-vars
    const [query, setQuery] = useState('')
    const [method, setMethod] = useState('')
    const [response, setResponse] = useState(null)

    const fetchRequest = () => {

    }

    return (
        <Box w="100%" t="0px">
            <Center>
                <Flex flexDirection="column" h="100vh" w="80%">
                    <Box h="4em"/>
                    <PageTitle title="Image tags update"/>
                    <Box h="1em"/>
                    <SearchBar
                        placeholder="Enter comma separated tags e.g. 'cat,laser,wall'"
                        setQuery={setQuery}
                    />

                    <Box h="0.5em"/>
                    <RadioGroup onChange={setMethod} value={method}>
                        <Stack direction='row'>
                            <Radio value='1'>Add tags</Radio>
                            <Radio value='0'>Delete tags</Radio>
                        </Stack>
                    </RadioGroup>

                    <Box h="1em"/>
                    <SubmissionButtons
                        fetchRequest={fetchRequest}
                        resSetter={setResponse}
                        resetQuery={() => {
                            setQuery('')
                            setMethod('')
                        }}
                    />
                </Flex>
            </Center>
        </Box>
    )
}

export default UpdateTags;
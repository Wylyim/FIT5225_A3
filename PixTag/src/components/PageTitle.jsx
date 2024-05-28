import { Text, Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const PageTitle = ({title: title}) => {
    const words = title.split(" ")

    const makeTitle = words.map((word, idx) => {
        if (idx === 1) 
            return (<Text key={`${title}_${idx}`} fontSize='3xl' as='b' color="#1E2E83">{word} </Text>)
        else 
            return (<Text key={`${title}_${idx}`} fontSize='3xl' as='b'>{word} </Text>)
    })

    return (
        <Box key={title}>
            {makeTitle}
        </Box>
    )
}

export default PageTitle;
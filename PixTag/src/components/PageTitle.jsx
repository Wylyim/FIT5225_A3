import { Text } from "@chakra-ui/react";

const PageTitle = ({title}) => {
    const words = title.split(" ")

    const makeTitle = words.map((word, idx) => {
        if (idx === 1) 
            return (<Text fontSize='3xl' as='b' color="#1E2E83">{word}</Text>)
        else 
            return (<Text fontSize='3xl' as='b'>{word}</Text>)
    })

    return (
        <>
            {makeTitle}
        </>
    )
}

export default PageTitle;
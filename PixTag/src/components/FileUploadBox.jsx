import {Box, ButtonGroup, Center, Image, VStack} from "@chakra-ui/react";
import {useState} from "react";
import {ActionButton} from "./index.jsx";

const FileUpload = ({fetchRequest}) => {
    const [image, setImage] = useState(null);
    const [inputKey, setInputKey] = useState(Date.now());

    const submitImage = () => {
        fetchRequest()

        // toasts
    }

    const clearImage = () => {
        setImage(null);
        setInputKey(Date.now())
    }

    return (
        <VStack>
            <Box w="100%" h="8em" bg="#6eb2fa" border="black dashed 2px" borderRadius="10px">
                <Box h="1em"/>
                <Center>
                    <input
                        key={inputKey}
                        type="file"
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            setImage(event.target.files[0]);
                        }}
                    />
                </Center>
            </Box>

            {image && (
                <>
                    <Image
                        src={URL.createObjectURL(image)}
                        h="18em"
                    />
                    <ButtonGroup>
                        <ActionButton
                            color="#037bfc"
                            buttonText="Upload image"
                            onClick={() => {
                                submitImage()
                                clearImage()
                            }}
                        />
                        <ActionButton
                            color="red"
                            buttonText="Remove image"
                            onClick={() => {
                                clearImage()
                            }}
                        />
                    </ButtonGroup>
                </>
            )}
        </VStack>
    )
}

export default FileUpload;
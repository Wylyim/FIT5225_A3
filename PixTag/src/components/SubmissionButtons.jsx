import {ButtonGroup} from "@chakra-ui/react";
import {ActionButton} from "./index.jsx";

const SubmissionButtons = ({fetchRequest, resSetter, resetQuery}) => {

    const onSubmit = () => {
        fetchRequest()
        resSetter('404 not found')
    }

    return (
        <ButtonGroup>
            <ActionButton
                buttonText="Search"
                color="#037bfc"
                onClick={() => {
                    onSubmit()
                    resetQuery()
                }}
            />
            <ActionButton
                buttonText="Clear"
                color="red"
                onClick={() => {
                    resetQuery()
                }}
            />
        </ButtonGroup>
    )
}

export default SubmissionButtons;
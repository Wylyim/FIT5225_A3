import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";


const SearchBar = ({setQuery, placeholder}) => {

    return (
        <InputGroup>
            <InputLeftElement>
                <SearchIcon color="gray.300"/>
            </InputLeftElement>
            <Input
                placeholder={placeholder}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
            />
        </InputGroup>
    )
}

export default SearchBar;
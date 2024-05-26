import {
    DeleteImage,
    FindMatchingImage,
    Home,
    QueryTags,
    QueryThumbnailUrl,
    RegistrationPage,
    UpdateTags,
    UploadImage
} from './pages'
import {
    SideBar
} from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, HStack } from '@chakra-ui/react'
import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <HStack w="100em">
                    <SideBar/>
                        <Routes>
                            <Route path="images/" element={<Home />}/>
                            <Route path="images/upload" element={<UploadImage />}/>
                        </Routes>
                </HStack>
            </BrowserRouter>

        </>
    )
}

export default App

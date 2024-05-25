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
import { BrowserRouter, Routes, Route } from "react-dom";
import { ChakraProvider, HStack } from '@chakra-ui/react'
import './App.css'

function App() {

    return (
        <>
            <HStack>
                <SideBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/upload" element={<UploadImage />} />
                    </Routes>
                </BrowserRouter>
            </HStack>
        </>
    )
}

export default App

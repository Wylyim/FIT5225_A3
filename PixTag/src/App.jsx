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
import { HStack } from '@chakra-ui/react'

function App() {

    return (
        <div>
            <BrowserRouter>
                <HStack w="100%" h="100vh">
                    <SideBar/>
                        <Routes>
                            <Route path="images/" element={<Home />}/>
                            <Route path="images/upload" element={<UploadImage />}/>
                            <Route path="images/match" element={<FindMatchingImage />}/>
                            <Route path="images/query-tags" element={<QueryTags />}/>
                            <Route path="images/query-thumb-url" element={<QueryThumbnailUrl />}/>
                            <Route path="images/update-tags" element={<UpdateTags />}/>
                            <Route path="images/delete" element={<DeleteImage />}/>
                            <Route path="images/auth" element={<RegistrationPage />}/>
                        </Routes>
                </HStack>
            </BrowserRouter>
        </div>
    )
}

export default App

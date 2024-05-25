import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {

    return (
        <ChakraProvider>
            <SideBar/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App

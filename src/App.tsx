import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import BlogManagement from "./pages/BlogManagement.tsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quan-li-bai-viet" element={<BlogManagement/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App

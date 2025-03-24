import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import BlogProvider from "./context/BlogContext.tsx";

async function deferRender() {
    const {worker} = await import('./mocks/browser.ts')
    return worker.start()
}

deferRender().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <BrowserRouter>
                <Navbar/>
                <div className="container mx-auto mt-10">
                    <BlogProvider>
                        <App/>
                    </BlogProvider>
                </div>
            </BrowserRouter>
        </StrictMode>,
    )
});


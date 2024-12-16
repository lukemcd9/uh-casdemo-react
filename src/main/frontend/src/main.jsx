import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/casdemo">
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/index.html" element={<App/>} />
        </Routes>
    </BrowserRouter>
)

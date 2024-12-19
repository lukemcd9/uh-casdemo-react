import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router";
import Menubar from "./components/Menubar.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Menubar/>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </UserProvider>
)

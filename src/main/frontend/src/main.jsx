import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router";
import Menubar from "./components/Menubar.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import Footer from "./components/Footer.jsx";
import Faq from "./pages/help/Faq.jsx";
import Contact from "./pages/help/Contact.jsx";
import User from "./pages/User.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Menubar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/auth" element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </UserProvider>
)

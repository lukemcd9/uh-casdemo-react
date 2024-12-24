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
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Holidays from "./pages/admin/Holidays.jsx";

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Menubar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Login/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/holidays" element={<Holidays/>}/>

                {/*Routes that require to be logged in*/}
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/user" element={<User/>}/>
                </Route>

                {/*Routes that require to be logged in and have a role of ROLE_ADMIN*/}
                <Route element={<ProtectedRoutes role="ROLE_ADMIN"/>}>
                    <Route path="/admin" element={<Faq/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </UserProvider>
)

import {useCurrentUser} from "./context/UserContext.jsx";
import {useEffect} from "react";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";

function App() {
    const { currentUser, fetchCurrentUser } = useCurrentUser();
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return currentUser ? <User/> : <Home/>;
}

export default App;
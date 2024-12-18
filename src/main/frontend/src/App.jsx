import {useCurrentUser} from "./context/UserContext.jsx";
import {useEffect} from "react";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";

function App() {
    // const { currentUser, fetchCurrentUser, loggedIn } = useCurrentUser();
    //
    // useEffect(() => {
    //     // fetchCurrentUser().catch((err) => console.log(err));
    // }, [loggedIn]);

    return false ? <User/> : <Home/>;
}

export default App;
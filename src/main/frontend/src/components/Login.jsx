import {useCurrentUser} from "../context/UserContext.jsx";
import {useEffect} from "react";
import {Navigate} from "react-router";

function Login() {
    const { currentUser, fetchCurrentUser } = useCurrentUser();

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return currentUser ? <Navigate to="/user"/> : <p>Loading...</p>
}

export default Login;
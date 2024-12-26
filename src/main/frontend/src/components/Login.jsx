import {useCurrentUser} from "../context/UserContext.jsx";
import {useEffect} from "react";
import {Navigate} from "react-router";
import Loading from "./Loading.jsx";

function Login() {
    const { currentUser, fetchCurrentUser } = useCurrentUser();

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return currentUser ? <Navigate to="/user"/> : <Loading/>
}

export default Login;
import {createContext, useContext, useState} from "react";
import {instance} from "../api.js";

export const UserContext = createContext(null);

export const UserProvider = function({ children }) {
    const [currentUser, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const fetchCurrentUser = async function() {
        return instance.get("/user")
            .then(response => {
                setUser(response.data)
                setLoggedIn(currentUser !== null);
            }).catch(error => {
                setLoggedIn(false);
        });
    }

    return (
        <UserContext.Provider value={{ currentUser, fetchCurrentUser, loggedIn }}>
            {children}
        </UserContext.Provider>
    )
};

export const useCurrentUser = () => useContext(UserContext);
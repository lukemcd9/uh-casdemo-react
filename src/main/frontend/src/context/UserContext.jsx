import {createContext, useContext, useState} from "react";
import {instance} from "../api.js";

export const UserContext = createContext(null);

export const UserProvider = function({ children }) {
    const [currentUser, setUser] = useState(null);

    const fetchCurrentUser = async function() {
        instance.get("/user")
            .then(response => {
                setUser(response.data)
            });
    }

    return (
        <UserContext.Provider value={{ currentUser, fetchCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
};

export const useCurrentUser = () => useContext(UserContext);
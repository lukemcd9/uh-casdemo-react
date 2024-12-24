import {createContext, useContext, useState} from "react";
import {instance} from "../service/api.js";

export const UserContext = createContext(null);

export const UserProvider = function({ children }) {
    const [currentUser, setUser] = useState(null);

    const fetchCurrentUser = async function() {
        instance.get("/user")
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log("Not logged in");
            });
    }

    return (
        <UserContext.Provider value={{ currentUser, fetchCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
};

export const useCurrentUser = () => useContext(UserContext);
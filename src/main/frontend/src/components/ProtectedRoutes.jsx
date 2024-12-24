import {Navigate, Outlet} from "react-router";
import hasRole from "../service/user.js";
import {useCurrentUser} from "../context/UserContext.jsx";
function ProtectedRoutes({ role }) {
    const { currentUser, fetchCurrentUser } = useCurrentUser();

    // ---------------------------------------------
    // This is an example for potentially verifying on Spring side that they do have the role.
    // const [authed, setAuthed] = useState(false);
    // useEffect(() => {
    //     if (role) {
    //         async function checkRole() {
    //             const data = await fetchCurrentUser();
    //             setAuthed(hasRole(data, role));
    //         }
    //         checkRole();
    //     }
    // }, []);
    // ---------------------------------------------
    if (currentUser && role && hasRole(role)) {
        return <Outlet/>;
    }
    return (currentUser && !role) ? <Outlet/> : <Navigate to="/"/>;
}

export default ProtectedRoutes;
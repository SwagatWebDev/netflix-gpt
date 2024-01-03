import Login from "./Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser, removeUser} from "../utils/userSlice";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
]);

export const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            } else {
               dispatch(removeUser());
            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
};

export default Body;

import React from 'react';
import {HEADER_LOGO_URL, USER_ICON_URL} from "../utils/constants";
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useSelector} from "react-redux";

export const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img
                className="w-44 mx-auto md:mx-0"
                src={HEADER_LOGO_URL}
                alt="logo"
            />
            { user && <div className="flex p-4">
                <img className="w-12 h-12 mr-2" alt="userIcon" src={USER_ICON_URL}/>
                <button className="font-bold text-white cursor-pointer hover:underline" onClick={handleSignOut}>(Sign out of Netflix)</button>
            </div>}
        </div>
    );
};

export default Header;

import React from 'react';
import { HEADER_LOGO_URL } from "../utils/constants";

export const Header = () => {
    return (
        <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img
                className="w-44 mx-auto md:mx-0"
                src={HEADER_LOGO_URL}
                alt="logo"
            />
        </div>
    );
};

export default Header;

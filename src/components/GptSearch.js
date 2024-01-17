import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {LOGIN_LOGO_URL} from "../utils/constants";
import React from "react";

const  GptSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    src={LOGIN_LOGO_URL}
                    alt="logo"
                    className="h-screen object-cover md:w-screen"
                />
            </div>
            <div className="">
                <GptSearchBar/>
                <GptMovieSuggestions/>
            </div>
            {/*
              - GPT Based Search Bar
              - GPT Based Movie Suggestions
            */}
        </>

    )
};

export default GptSearch;

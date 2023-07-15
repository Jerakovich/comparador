"use client";
import React, { useRef } from 'react';
//import { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


function Header({onUpdate}) {
    const inputRef = useRef(null);

    const handleSearch = async (e) => {
        e.preventDefault();

        const input = inputRef.current?.value;
        if (!input) return;
        inputRef.current.value = "";

        try {
            //call out api to active the scraper
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ search: input }),
            });
            const data = await response.json();
            onUpdate(data);
        } catch (e) {
            console.log("Something went wrong...");
        }
    };

    return (
        <header>
            <img src="/images/mon.png" width={300} height={300}/>
            <form
                
                className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md max-auto"
                onSubmit={handleSearch}
                
            >
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300"
                />
                <button type="submit" hidden>
                    Search
                </button>
                <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
            </form>
        </header>
    );
}
export default Header;

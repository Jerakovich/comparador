"use client";
import { useState } from "react";
import Link from "next/link";

import "../globals.css";

export default function Search() {

  const [redirect, setRedirect] = useState(false);

  function handleClick() {
    console.log("entra a la funcion");
    setRedirect(true);
  }

  if (redirect) {
    console.log("entra al redirect");
     <Link href="../segundo/page/"></Link>;
  }
    
    return (
        <form className="flex justify-center mb-20">
          <div className="flex relative p-1 bg-gradient-to-tr from-purple-900 to-blue-900 rounded-full w-2/5 interior">
            <input className="flex-1 p-2 pl-4 rounded-full" type="text" placeholder="Busca tu juego" />
            <button id="btn" className="btn" onClick={handleClick}>Buscar</button>
          </div>
            
        </form>
      );
      
      
}


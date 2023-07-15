import Image from "next/image";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Home() {
    return (
        <main>
          <div className="flex flex-col items-center justify-center">
            <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20"/>// el / es para variar la opacidad
          </div>
            <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">Welcome to the amazon web scraper</h1>
        </main>
    );
}

import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
function Sidebar() {
    return (
        <div className="p-2 md:p-10 py-6 overflow-y-auto border-indigo-500/50">
            <div className="flex flex-col items-center justify-center mb-10">
                <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-indigo-600" />
                <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">Web scraper</h1>
                <h2 className="hidden md:inline text-center text-xs italic">
                    Scraping the unscrapable
                </h2>
            </div>
            <ul>
                {/*sidebarRow */}
                {/*sidebarRow */}
                {/*sidebarRow */}
                {/*sidebarRow */}
            </ul>
        </div>
    );
}
export default Sidebar;

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";




const ListedBook = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [arrow, setArrow] = useState(false);

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center bg-base-200 rounded-xl py-8">
                <p className="text-2xl font-semibold">Books</p>
            </div>

            <div className="flex justify-center items-center py-8 ">
                <details className="dropdown ">
                    <summary
                        onClick={() => setArrow(!arrow)}
                        className="m-1 btn bg-green-500 text-white hover:btn-accent">
                        Sort by
                        {arrow === false ? <FaAngleDown size={16} /> : <IoIosArrowUp size={18} />}
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 border cursor-pointer">
                        <li value="rating" className=" hover:bg-base-300">Rating</li>
                        <li value="pages" className="hover:bg-base-300">Number of pages</li>
                        <li value="year" className="hover:bg-base-300">Published year</li>
                    </ul>
                </details>
            </div>

            {/* tabs start*/}
            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    to=''
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                    ${tabIndex === 0 ? "border border-b-0 rounded-t-lg " : "border-b"
                        } dark:border-gray-600 dark:text-gray-900`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link
                    to='wishlist'
                    onClick={() => setTabIndex(1)}
                    className=
                    {`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                    ${tabIndex === 1 ? "border border-b-0 rounded-t-lg " : "border-b"
                        } dark:border-gray-600 dark:text-gray-900`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>


            </div>
            {/* tabs end*/}
            <div className="mt-6">
                <Outlet />
            </div>

        </div>

    );
};

export default ListedBook;
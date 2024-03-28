import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import ShowStoredBooks from "../components/ShowStoredBooks";
import ShowWishlistBooks from "../components/ShowWishlistBooks";




const ListedBook = () => {

    const [tabIndex, setTabIndex] = useState(0);
    // button state change
    const [arrow, setArrow] = useState(false);
    //sorting
    const [sortBy, setSortBy] = useState('');

    const handleSort = (option) => {
        // setSortBy(option.target.value);
        // console.log('clicked', option.target.value);
        setSortBy(option);
        console.log('clicked', option);
    };

    // console.log('clicked outside', sortBy);

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center bg-base-200 rounded-xl py-8">
                <p className="text-2xl font-semibold">Books</p>
            </div>

            <div className="flex justify-center items-center py-8 ">
                {/* <select
                    onChange={handleSort}             
                    className="m-1 bg-green-500 text-white p-2 shadow rounded-box border-none cursor-pointer">
                    <option value="" className=" hover:bg-base-300">Default</option>
                    <option value="rating" className=" hover:bg-base-300">Rating</option>
                    <option value="pages" className="hover:bg-base-300">Number of pages</option>
                    <option value="year" className="hover:bg-base-300">Published year</option>
                </select> */}
                <details className="dropdown ">
                    <summary
                        onClick={() => setArrow(!arrow)}
                        className="m-1 btn bg-green-500 text-white hover:btn-accent">
                        Sort by : {sortBy == '' ? 'Default' : sortBy}
                        {arrow === false ? <FaAngleDown size={16} /> : <IoIosArrowUp size={18} />}
                    </summary>

                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 border cursor-pointer">
                        <li onClick={() => handleSort('')} className=" hover:bg-base-300">Default</li>
                        <li onClick={() => handleSort('rating')} className=" hover:bg-base-300">Rating</li>
                        <li onClick={() => handleSort('pages')} className="hover:bg-base-300">Number of pages</li>
                        <li onClick={() => handleSort('year')} className="hover:bg-base-300">Published year</li>
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
                {/* <Outlet sortBy={sortBy} /> */}
                {/* <Outlet  context={[sortBy]} /> */}
                <div className={`${tabIndex === 0 ? "visible " : "hidden"} `}>
                    <ShowStoredBooks sortBy={sortBy} />
                </div>
                <div
                    className={`${tabIndex === 1 ? "visible " : "hidden"} `}>
                    <ShowWishlistBooks sortBy={sortBy} />
                </div>


            </div>

        </div>

    );
};

export default ListedBook;
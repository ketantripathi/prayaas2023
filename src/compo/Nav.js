import React from 'react'
import logo from './logo.png'

export default function Nav(props) {
    return (
        <div className={`w-full fixed flex justify-center ${props.navcolor}`}>
            <div className="container flex border-b-2 border-black">
                <div className="logo w-1/5">
                    <img src={logo} alt="Prayaas" />
                </div>
                <div className="nav w-4/5 flex-col justify-center">
                    <div className="donate h-1/2 flex justify-center items-end">
                        <button type="button" className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">DONATE</button>
                    </div>
                    {/* <nav className="navbar">
                        <li><a href="#" className="navitem"></a></li>
                        <li><a href="#" className="navitem"></a></li>
                        <li><a href="#" className="navitem"></a></li>
                        <li><a href="#" className="navitem"></a></li>
                    </nav> */}
                    <div className={`flex h-1/2 justify-center ${props.navcolor}`}>
                        <div className={`group relative cursor-pointer flex ${props.navcolor}`}>
                            <div className={`flex items-center justify-between space-x-5 ${props.navcolor} px-4 hover:bg-orange-200`}>
                                <a
                                    className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                                >
                                    Our Products
                                </a>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="invisible absolute z-50 flex w-full  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover:translate-y-12"
                            >
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product One</a>

                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Two</a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Three
                                </a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Four
                                </a>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer flex">
                            <div className={`flex items-center justify-between space-x-5 ${props.navcolor} px-4 hover:bg-orange-200`}>
                                <a
                                    className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                                    onClick=""
                                >
                                    Our Products
                                </a>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover:translate-y-12"
                                onClick="" >
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product One</a>

                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Two</a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Three
                                </a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Four
                                </a>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer flex">
                            <div className={`flex items-center justify-between space-x-5 ${props.navcolor} px-4 hover:bg-orange-200`}>
                                <a
                                    className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                                    onClick=""
                                >
                                    Our Products
                                </a>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover:translate-y-12"
                                onClick="" >
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product One</a>

                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Two</a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Three
                                </a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Four
                                </a>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer flex">
                            <div className={`flex items-center justify-between space-x-5 ${props.navcolor} px-4 hover:bg-orange-200`}>
                                <a
                                    className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                                    onClick=""
                                >
                                    Our Products
                                </a>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible group-hover:translate-y-12"
                                onClick="" >
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product One</a>

                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Two</a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Three
                                </a>
                                <a
                                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                >Product Four
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

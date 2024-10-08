"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Header = () => {
  const path = usePathname();
  return (
    <header>
      <nav className="bg-white shadow-sm border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex">
            <img src="/svg/logo.svg" className="mr-3 h-6 sm:h-9" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              InterviewShooter
            </span>
          </div>
          <div className="flex items-center lg:order-2">
            <UserButton />
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/dashboard"
                  className={`block py-2 pr-4  ${
                    path === "/dashboard" ? "text-blue-700" : ""
                  } hover:text-blue-700 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                 onClick={()=>{toast.success("Feature Coming Soon")}}
                  className="block py-2 pr-4 hover:text-blue-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Question
                </button>
              </li>
              <li>
                <button
                 onClick={()=>{toast.success("Feature Coming Soon")}}
                  className="block py-2 pr-4 hover:text-blue-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Upgrade
                </button>
              </li>

              {/* <li>
                <
                  href="#"
                  className="block py-2 pr-4 hover:text-blue-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How it Works?
                </>
              </li> */}
              <li>
                <Link
                  href="https://kirtikumarkavande.life" target="_blank"
                  className="block py-2 pr-4 hover:text-blue-700 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

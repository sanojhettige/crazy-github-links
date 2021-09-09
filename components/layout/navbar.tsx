import React, { ReactElement, useState } from 'react'

interface Props {}

function Navbar(props: Props): ReactElement {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav
        className="relative bg-primary-500 shadow-lg flex flex-wrap items-center justify-between px-2 py-3"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-white-50 title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="/"
            >
              Github Crazy Links
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className="text-gray-800 fas fa-bars"
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                <a className="lg:text-white-50 lg:hover:text-white-600 text-white-50 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <a className="lg:text-white-50 lg:hover:text-white-600 text-white-50 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
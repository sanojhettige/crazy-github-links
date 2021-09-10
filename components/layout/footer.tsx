import React, { ReactElement } from 'react'


function Footer(): ReactElement {
    return (
        <footer className="relative bg-white pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find me on any of these platforms
              </h5>
            </div>
            
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" Sanoj Hettige."}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
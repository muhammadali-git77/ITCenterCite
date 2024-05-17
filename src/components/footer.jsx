import { Link } from "react-router-dom";
import ITC_logo from "../assets/ITC_logo1.png";
import ITC_logoHover from "../assets/itclogo112.png";

export default function Footer(params) {
  return (
    <footer className="!text-gray-100 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
            <Link
              to={"/"}
              className="items-center lg:ml-5 ml-[-45px] flex Itc_logo_hover_div "
            >
              <img
                src={ITC_logo}
                alt=""
                className="w-[60px] z-20"
              />
              <img
                src={ITC_logoHover}
                alt=""
                className=" m-0 w-auto h-[17px] sm:h-[25px] "
              />
            </Link>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first ">
          <div className="lg:w-1/4 w-1/2  px-4 ">
            <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  First Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 w-1/2  px-4">
            <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  First Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 w-1/2  px-4">
            <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  First Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 w-1/2  px-4">
            <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  First Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Second Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Third Link
                </a>
              </li>
              <li>
                <a className="!text-gray-500 hover:!text-gray-300 transition-all duration-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-950">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 IT center —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @itcenter
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

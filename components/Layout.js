import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "Flixter" }) => {
  return (
    <div className="">
      <nav className="md:col-span-1 flex justify-between items-center bg-black">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>
          <h1 className="font-bold text-white uppercase p-4 border-b border-gray-100">
            <Link href="/">
              <a className="text-sm sm:text-3xl">Flixter</a>
            </Link>
          </h1>
        </div>
        <ul className="flex justify-end uppercase mr-5">
          <li className="text-white font-bold mx-2">
            <Link href="/">
              <a>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="text-white mx-2">
            <Link href="/movies">
              <a>
                <span>Movies</span>
              </a>
            </Link>
          </li>
          <li className="text-white mx-2">
            <Link href="/contact">
              <a>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="px-16 py-6 font-body bg-primaryDark md:col-span-2">
        {children}
      </main>
    </div>
  );
};

export default Layout;

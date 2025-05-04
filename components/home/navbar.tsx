import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 w-full  flex justify-center bg-black">
      <div className="container max-w-screen-2xl h-14 bg-black max-w-screen items-center space-x-4 px-12 flex flex-row text-white ">
        <Link href='/' className="font-bold">Bonus</Link>
        <div className="text-sm  w-full flex justify-between">
          <div className="space-x-4 flex items-center">
            <Link href="/todo">
              <Button variant={"link"} className="text-white p-0 h-fit">
                Todo
              </Button>
            </Link>
            <Link href="/todo">
              <Button variant={"link"} className="text-white p-0 h-fit">
                Todo
              </Button>
            </Link>
            <Link href="/todo">
              <Button variant={"link"} className="text-white p-0 h-fit">
                Todo
              </Button>
            </Link>
          </div>

          <div className="space-x-4">
            <Link href="/">
              <Button variant={"link"} className="text-white p-0 h-fit">
                Contact
              </Button>
            </Link>
            <Link href="/">
              <Button variant={"secondary"}>Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

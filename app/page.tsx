import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col space-y-4">
      <h1 className="text-7xl font-bold tracking-tight">Chayapon Srirueang</h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, iste?
      </p>
      <div className="flex flex-row space-x-4">
        <Link
          href={"https://github.com/bonuskee"}
          target="_blank"
          className="border-black border-2 p-2 rounded-lg flex flex-row items-center justify-center gap-4"
        >
          <FaGithub className="w-10 h-10" />
          <div className="font-bold">Github</div>
        </Link>
        <Link
          href={"https://www.facebook.com/chayapon.srirueang/"}
          target="_blank"
          className="border-black border-2 p-2 rounded-lg flex flex-row items-center justify-center gap-4"
        >
          <FaFacebook className="w-10 h-10" />
          <div className="font-bold">Facebook</div>
        </Link>
        <Link
          href={"tel:+66843481579"}
          target="_blank"
          className="border-black border-2 p-2 rounded-lg flex flex-row items-center justify-center gap-4"
        >
          <IoMdCall className="w-10 h-10" />
          <div className="font-bold">+66 843481579</div>
        </Link>
      </div>
    </div>
  );
}

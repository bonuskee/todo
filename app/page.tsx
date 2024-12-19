import Image from "next/image";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col p-8 gap-4">
     
      hello world <Link href={'/todo'} className={buttonVariants({ variant: "destructive" })}>todo</Link>
    </div>
    
  );
}

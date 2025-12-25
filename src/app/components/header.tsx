'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import  Icon  from "./icons/icon";

export default function Header(){
    const nav = useRouter()
    return <header className="z-20 px-18 py-2 w-[85%] backdrop-blur-xl border-gray-800 border-solid border -translate-1/2 left-1/2 
    top-8 fixed flex justify-center md:justify-between items-center bg-[#0000007d] rounded-full">
        <Icon action={() => {
            nav.push("/secret")
        }}/>
        <nav className=" gap-8 hidden md:flex">
            {/* <Link href="">Natal</Link>
            <Link href="">Ano novo</Link> */}
        </nav>
    </header>
}
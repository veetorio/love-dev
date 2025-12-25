"use client";
import { useState } from "react";

export default function Card(props : { text : string , title : string , caminho : string }) {
    const [open,setOpen] = useState(false)
    return <div className="bg-gray-950 backdrop-blur-lg rounded-3xl flex flex-col border border-solid border-gray-600 w-92 h-fit transition ">
        <div className="rounded-t-3xl h-64 w-full bg-cover bg-center" style={{ backgroundImage : `url(${props.caminho})`}}></div>
        <footer className="px-4 py-8">
            <h1 className="text-xl">{props.title}</h1>
            <p className={"font-mono  font-extralight py-4 text-gray-600 " + (open ? "" : "truncate")}>
                {
                    props.text
                }
            </p>
            <button className="bg-blue-800 rounded-full px-8 hover:bg-blue-900" onClick={() => {
                setOpen(!open)
            }}>leia mais</button>
        </footer>
    </div>
}

import { useEffect } from "react";
import { CardInfo, getCharacters, shuffleArray } from "./fetch";
import { Basketball01Icon, GithubIcon } from "../svg";
import React from "react";








function Header() {


return(
<nav className="dark:bg-slate-900 dark:text-white lg:flex lg:justify-evenly p-4  ">
<button className="flex justify-center items-center gap-2">

  <h3 className="font-bold text-xl">NeuroGeeks</h3>

  </button>

  <button>
    <GithubIcon/>
  </button>
</nav>
)
}


export function UIskeleton({allCharacters}:any){


  return(
    <>
    <Header/>
    <div className="flex p-7 justify-center h-screen playGround ">
      <div>
          <Card allCharacters={allCharacters}/>
      </div>

    </div>

    </>
  )
}


export default function Card({allCharacters}:any) {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="dark:outline w-44 h-56 rounded-lg flex flex-col" onClick={()=>alert("hello")}>
      <div>
        <img src="https://nextui.org/images/fruit-2.jpeg" alt="" className="rounded-lg w-44 h-48" />
      </div>
      <div className="flex justify-between p-1">
        <p className="font-bold">Name</p>
        <p className="text-slate-700">extraDetails</p>
      </div>

          </div>
  );
}

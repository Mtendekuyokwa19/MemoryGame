
import { useEffect, useState } from "react";
import { CardInfo, getCharacters, shuffleArray } from "./fetch";
import { Basketball01Icon, GithubIcon } from "../svg";
import React from "react";
import PropTypes from 'prop-types'








function Header() {


return(
<nav className="dark:bg-slate-900 dark:text-white lg:flex lg:justify-evenly p-4  sticky top-0 navbar ">
<button className="flex justify-center items-center gap-2">

  <h3 className="font-bold text-xl">NeuroGeeks</h3>

  </button>

  <button>
    <GithubIcon/>
  </button>
</nav>
)
}


export function UIskeleton({allCharacters,shuffle,setClick}:IallCharacters){


  return(
    <>
    <Header/>
    <div className="flex p-7 justify-center h-screen playGround ">
      <div className="grid grid-cols-4 grid-row-2 gap-3">
         {allCharacters.map((character)=><Card Character={character} shuffle={shuffle} setClick={setClick} index={allCharacters.indexOf(character)}/>)}
      </div>

    </div>

    </>
  )
}

interface IallCharacters{
  allCharacters:CardInfo[];
  shuffle:any;
  setClick:any;

}


export default function Card({Character,shuffle,setClick,index}:ICard) {


  return (
    <div className="dark:outline overflow-hidden outline-2 outline-card   w-48 h-62 rounded-lg flex flex-col dark:bg-card card" onClick={()=>{rotate()
      setClick(index)
      shuffle()


    }}>
      <div>
        <img src={Character.link} alt="" className="rounded-lg w-48 z-0 h-48  transition-all duration-300 hover:scale-90" />
      </div>
      <div className="flex justify-between p-4">
        <p className="font-bold dark:text-slate-100">{Character.name}</p>
        <p className="text-slate-700 dark:text-slate-400">{Character.gender}</p>
      </div>

          </div>
  );
}
interface ICard{
  Character:CardInfo,
  shuffle:any,
  setClick:any;
  index:number;
}

function rotate() {
let allCards=document.querySelectorAll(".card");

allCards.forEach(card=>{
  card.classList.add("cardMove")
})

setTimeout(() => {
  allCards.forEach(card=>{
  card.classList.remove("cardMove")
})
},310);

}
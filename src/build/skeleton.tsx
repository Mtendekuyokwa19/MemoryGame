
import { useEffect, useState } from "react";
import { CardInfo, getCharacters, shuffleArray } from "./fetch";
import { Basketball01Icon, GithubIcon } from "../svg";
import React from "react";
import PropTypes from 'prop-types'









function Header() {


return(
<nav className="dark:bg-slate-900 dark:text-white bg-slate-300 text-slate-950 lg:flex lg:justify-evenly p-4  sticky top-0 navbar  z-50">
<button className="flex justify-center items-center gap-2">

  <h3 className="font-bold text-xl">NeuroGeeks</h3>

  </button>

  <button>
    <a href="https://github.com/Mtendekuyokwa19/memory-game">
    <GithubIcon/>
    </a>
  </button>
</nav>
)
}


export function UIskeleton({allCharacters,shuffle,setClick,addclick,click}:IallCharacters){


  return(
    <>
    <Header/>
    <div>
      <div className="p-2 flex justify-center bg-slate-700">

        <p className="text-white">{click+" / " +allCharacters.length}</p>
      </div>
    </div>
    <div className="flex p-7 justify-center h-screen playGround ">
      <div className="grid grid-cols-4 grid-row-2 gap-3">
         {allCharacters.map((character)=><Card Character={character} shuffle={shuffle} setClick={setClick} index={allCharacters.indexOf(character)} addclick={addclick} click={click}/>)}
      </div>

    </div>

    </>
  )
}

interface IallCharacters{
  allCharacters:CardInfo[];
  shuffle:any;
  setClick:any;
  addclick:any;
  click:number;
}


export default function Card({Character,shuffle,setClick,index,addclick}:ICard) {


  return (
    <div className="dark:outline overflow-hidden outline-2 outline-card   w-48 h-60  rounded-lg flex flex-col dark:bg-card card" onClick={()=>{

      rotate()
      setClick(index)
      addclick((a:number)=>a+1)


      shuffle()



    }}>
      <div>
        <img src={Character.link} alt="" className="rounded-lg w-48 z-0 h-48  transition-all duration-300 hover:scale-90" />
      </div>
      <div className="flex justify-between p-4">
        <p className="font-bold dark:text-slate-100">{Character.name.split(" ")[0]}</p>
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
  addclick:any;
  click:number;
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
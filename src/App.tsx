import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UIskeleton } from './build/skeleton';
import { CardInfo, getCharacters, shuffleArray } from './build/fetch';
import { Interface } from 'readline';
import { balloons } from "balloons-js";





function App() {
  interface Ipeople{
    characters:CardInfo[];

  }
let people:Ipeople={
  characters:[new CardInfo("hello","hello","hey")]


};
      const [click,setclick]=useState(0)
      const[character,setcharacter]=useState(people);
      let manageFetch=() => {
    let allCharacters= getCharacters();

    // console.log(allCharacters)
    allCharacters.then((results)=>{
        // people.characters=shuffleArray(results)
        setcharacter({...character,characters:shuffleArray(results)})

    })

    // allCharacters.then()
        return () => {

        };
      }
  useEffect(manageFetch, []);


      const [lose,setlose]=useState(false)
     function reshuffle() {
      setcharacter({...character,characters:shuffleArray(character.characters)})

     }

     function changeClick(index:any){
      let person=character;
      console.log(click)
      if (click==person.characters.length-1) {
        WinModal()
        manageFetch()

      balloons();

        return

      }
      if (person.characters[index].clicked===true) {

          // setlose(true)
          LoseModal();


           manageFetch()


        return;
      }
      person.characters[index].clicked=true;

      setcharacter(person);
     }
function LoseModal(){
 const modal = document.getElementById("loseDialog") as HTMLDialogElement;
  modal.showModal()
}
function WinModal() {
  const modal=document.getElementById("winDialog") as HTMLDialogElement;
  modal.showModal()
  balloons()

}

function nullfyclick() {

setclick(0);
}


  return (
<>
<Win close={nullfyclick}/>
<Lose  close={()=>{nullfyclick()}}/>
<UIskeleton allCharacters={character.characters} shuffle={reshuffle} setClick={changeClick} addclick={setclick} click={click}/>

</>

  );
}

export function Lose({close}:Lose) {


  return(
    <dialog className='z-10  bg-cyan-800 rounded-lg p-4 ' id='loseDialog'>
      <div>
       <div className='flex justify-between'>
        <h1 className='text-red-400 font-bold text-lg'>You Lose</h1>

        <button className='text-slate-400 font-bold' onClick={()=>{
          let modal=document.getElementById('loseDialog') as HTMLDialogElement;
          close()
          modal.close()}}>X</button>
       </div>
        <p className='text-slate-200'>
          Sorry, it looks like your neuro network is't solidified
        </p>

        <button className='bg-green-500 text-slate-50 py-2 px-4 rounded-sm'>Replay</button>
      </div>
    </dialog>
  )

}

export function Win({close}:Lose) {
  return(
    <dialog className='z-10  bg-cyan-800 rounded-lg p-4' id='winDialog'>
      <div>
       <div className='flex justify-between'>
        <h1 className='text-red-400 font-bold text-lg'>You Win!!!</h1>

        <button className='text-slate-400 font-bold' onClick={()=>{
          let modal=document.getElementById('winDialog') as HTMLDialogElement;
          close();
          modal.close()
        }}>X</button>
       </div>
        <p className='text-slate-200'>
          Sorry, it looks like your neuro network is't solidified
        </p>

        <button className='bg-green-500 text-slate-50 py-2 px-4 rounded-sm'>Replay</button>
      </div>
    </dialog>
  )

}
interface Lose{

  close:any
}



export default App;

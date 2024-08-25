import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UIskeleton } from './build/skeleton';
import { CardInfo, getCharacters, shuffleArray } from './build/fetch';
import { Interface } from 'readline';
import { balloons } from "balloons-js";
import { error } from 'console';





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

    }).catch((error)=>{
        alert("failed to fetch")
    })

    // allCharacters.then()
        return () => {

        };
      }
  useEffect(()=>{manageFetch();
     openGuide()}, []);


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

function openGuide() {
  let guide=document.getElementById('guideDialog') as HTMLDialogElement
guide.showModal();
}

  return (
<>
<Win close={nullfyclick}/>
<Lose  close={()=>{nullfyclick()}}/>
  <Guide/>
<UIskeleton allCharacters={character.characters} shuffle={reshuffle} setClick={changeClick} addclick={setclick} click={click}/>

</>

  );
}

export function Lose({close}:Lose) {



    function manageModal() {

          let modal=document.getElementById('loseDialog') as HTMLDialogElement;
          close()
          modal.close()

    }


  return(
    <dialog className='z-10  bg-cyan-800 rounded-lg p-4 ' id='loseDialog'>
      <div className='flex flex-col gap-2'>
       <div className='flex justify-between'>
        <h1 className='text-red-400 font-bold text-2xl'>You Lose!!!</h1>

        <button className='text-slate-400 font-bold' onClick={()=>{
          manageModal()
        }}>X</button>
       </div>
        <p className='text-slate-200'>
          Sorry, it looks like your neuro network isn't solidified. You selected a character twice
        </p>

        <button className='bg-green-500 text-slate-50 py-2 px-4 rounded-sm transition ease-in-out delay-150 hover:bg-cyan-500' onClick={manageModal}>Replay</button>
      </div>
    </dialog>
  )

}

export function Win({close}:Lose) {

function manageClose() {
     let modal=document.getElementById('winDialog') as HTMLDialogElement;
          close();
          modal.close()

}

  return(
    <dialog className='z-10  bg-cyan-800 rounded-lg p-4' id='winDialog'>
      <div className='flex flex-col gap-2'>
       <div className='flex justify-between'>
        <h1 className='text-green-500 font-bold text-2xl'>You Win!!!</h1>

        <button className='text-slate-400 font-bold' onClick={()=>{
       manageClose()
        }}>X</button>
       </div>
        <p className='text-slate-200'>
          It seems your memory Is great. Ever thought of an IQ test.
        </p>

        <button className='bg-green-500 text-slate-50 py-2 px-4 rounded-sm transition ease-in-out delay-150  hover:bg-slate-600' onClick={manageClose} >Replay</button>
      </div>
    </dialog>
  )

}
export function Guide() {

function manageClose() {
     let modal=document.getElementById('guideDialog') as HTMLDialogElement;

          modal.close()

}

  return(
    <dialog className='z-10  bg-cyan-800 rounded-lg p-4' id='guideDialog'>
      <div className='flex flex-col gap-2'>
       <div className='flex justify-between'>
        <h1 className='text-green-500 font-bold text-2xl'>How to play!!!</h1>

        <button className='text-slate-400 font-bold' onClick={()=>{
       manageClose()
        }}>X</button>
       </div>
        <p className='text-slate-200'>
          To win. Do not click the same Card twice.
          <br/>
          <p className=' text-sm italic'>with joy, Morty</p>
        </p>

        <button className='bg-green-500 text-slate-50 py-2 px-4 rounded-sm transition ease-in-out delay-150  hover:bg-slate-600' onClick={manageClose} >Let's play</button>
      </div>
    </dialog>
  )

}
interface Lose{

  close:any
}



export default App;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UIskeleton } from './build/skeleton';
import { CardInfo, getCharacters, shuffleArray } from './build/fetch';
import { Interface } from 'readline';




function App() {
  interface Ipeople{
    characters:CardInfo[];

  }
let people:Ipeople={
  characters:[new CardInfo("hello","hello","hey")]


};

      const[character,setcharacter]=useState(people);
  useEffect(() => {
    let allCharacters= getCharacters();

    // console.log(allCharacters)
    allCharacters.then((results)=>{
        // people.characters=shuffleArray(results)
        setcharacter({...character,characters:shuffleArray(results)})

    })

    // allCharacters.then()
        return () => {

        };
      }, []);


      const [lose,setlose]=useState(false)
     function reshuffle() {
      setcharacter({...character,characters:shuffleArray(character.characters)})

     }

     function changeClick(index:number){
      let person=character;
      if (person.characters[index].clicked===true) {

          setlose(true)
        return;
      }
      person.characters[index].clicked=true;

      setcharacter(person);
     }



  return (
<>
<Lose state={lose}/>
<UIskeleton allCharacters={character.characters} shuffle={reshuffle} setClick={changeClick}/>

</>

  );
}

export function Lose({state}:Lose) {
  return(
    <dialog open={state} className='z-10  bg-cyan-800 rounded-lg p-4'>
      <div>
       <div className='flex justify-between'>
        <h1 className='text-red-400 font-bold text-lg'>You Lose</h1>

        <button className='text-slate-400 font-bold'>X</button>
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
  state:boolean
}
export default App;

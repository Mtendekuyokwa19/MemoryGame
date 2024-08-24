import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { UIskeleton } from './build/skeleton';
import { getCharacters, shuffleArray } from './build/fetch';




function App() {

  useEffect(() => {
    let allCharacters= getCharacters();
    // console.log(allCharacters)
    allCharacters.then((results)=>{
        shuffleArray(results)
    })

    // allCharacters.then()
        return () => {

        };
      }, []);
  return (
<>
<UIskeleton/>

</>

  );
}

export default App;

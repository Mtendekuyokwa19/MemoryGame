
import { useEffect } from "react";
import { CardInfo, getCharacters, shuffleArray } from "./fetch";







function Header() {

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

return(
<nav>
<button>
  Memory
  </button>

  <button>
    Github
  </button>
</nav>
)
}


export function UIskeleton(){


  return(
    <>
    <Header/>

    </>
  )
}
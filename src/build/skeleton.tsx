
import { useEffect } from "react";
import { CardInfo, getCharacters, shuffleArray } from "./fetch";







function Header() {


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
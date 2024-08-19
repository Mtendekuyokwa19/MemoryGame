
import { useEffect } from "react";
import { getCharacters } from "./fetch";







function Header() {

  useEffect(() => {
getCharacters()

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
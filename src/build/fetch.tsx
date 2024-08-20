import { types } from "util";

export class CardInfo {
  clicked=false;
  name:String;
  link:String;
  constructor(name:String,link:String) {
    this.name=name;
    this.link=link;
  }

  isclicked():boolean{

    return this.clicked;
  }
  click(){
    this.clicked=true;
  }

}



  export async function getCharacters(){
    let characters:CardInfo[]=[];

    for (let i = 1; i <= 10; i++) {

      let character=await fetch('https://rickandmortyapi.com/api/character/'+i);

      let parcifyCharacter= await character.json();

       characters.push(new CardInfo(parcifyCharacter.name,parcifyCharacter.image))

    }

    return characters
  }






 export function shuffleArray(array:CardInfo[]){
  let currentIndex = array.length;


  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
    console.log(array)
  return array
}
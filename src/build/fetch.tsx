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
    let characters=[];

    for (let i = 0; i < 10; i++) {
      let character= await fetch('https://rickandmortyapi.com/api/character/'+i);
      let parcifyCharacter=await character.json();

      characters.push(new CardInfo(parcifyCharacter.name,parcifyCharacter.image))

    }
console.log(characters)
    return characters
  }
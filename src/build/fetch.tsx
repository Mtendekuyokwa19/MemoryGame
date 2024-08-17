
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
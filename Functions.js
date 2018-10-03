export function calc=(val)=>{
  const eq= false;
  const equation;
  const find;
  const alph='abcdefghijklmnopqrstuvwxyz';
  const answer;
  //finds if is equation, then finds variable
  for(let i=0;i<val.length;i++){
    if(val.indexOf(i)==='='){
      eq=true;
      for(let v=0;v<val.length;v++){
        for(let letter=0;letter<alph.length;letter++){
          if(val.substring(v,v+1)===alph.substring(letter,letter+1){
            find=alph.substring(letter,letter+1);
          }
        }
      }
      equation=val.split('=');
    }//end of if statement
  }
  if(eq===false){
    answer=val.valueOf();
  }
}

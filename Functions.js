const inputField= document.querySelector('#input');
const calculate= document.querySelector('#calculate');
const responseField= document.querySelector('#responseField');

const calc=()=>{
  const eq= false;
  const equation;
  const find;
  const alph='abcdefghijklmnopqrstuvwxyz';
  const answer;
  //finds if is equation, then finds variable
  for(let i=0;i<inputField.length;i++){
    if(inputField.indexOf(i)==='='){
      eq=true;
      for(let v=0;v<inputField.length;v++){
        for(let letter=0;letter<alph.length;letter++){
          if(inputField.substring(v,v+1)===alph.substring(letter,letter+1){
            find=alph.substring(letter,letter+1);
          }
        }
      }
      equation=inputField.split('=');
    }//end of if statement
  }
  if(eq===false){
    answer=inputField.valueOf();
    responseField.innerHTML=answer;
  }
}

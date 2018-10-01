calculate.on('click', event =>{
  const val= input.value();
  const eq= false;
  const find;
  const alph='abcdefghijklmnopqrstuvwxyz';
  const answer;
  for(let i=0;i<val.length;i++){
    if(val.indexOf(i)==='='){
      eq=true;
    }
  }
  if(eq===true){
    for(let v=0;v<val.length;v++){
      for(let letter=0;letter<alph.length;letter++){
        if(val.substring(v,v+1)===alph.substring(letter,letter+1){
          find=alph.substring(letter,letter+1);
        }
      }
    }
  }
}

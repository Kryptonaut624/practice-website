export const inputField= document.querySelector('#input');
export const calculate= document.querySelector('#calculate');
export const responseField= document.querySelector('#responseField');

export const calc=()=>{
  const eq= false;//determines if expression is an equation
  const equation;//array of both expressions on either side of '='
  const find;//variable
  const varLocation;//variable location in equation
  const alph='abcdefghijklmnopqrstuvwxyz';
  const terms;//in-order array of all terms and constants in equation
  const operations;//in-order array of all math operations in equation
  const neg=false;//determines if the first term is pos or neg
  const answer=0;//final answer
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
      equation[0].trim();
      equation[1].trim();
    }
  }
  //returns answer if is an expression
  if(eq===false){
    answer=inputField.valueOf();
    responseField.innerHTML=answer;
  }
  //returns value of the variable
  else{
    for(let n=0;n<equation.length;n++){
      for(let l=0;l<equation[n].length;l++){
         if(equation[n].substring(l,l+1)===find){
            varLocation=equation[n].indexOf(equation[n].substring(l,l+1));
         }
      }
    }
    const cLength=1;//length of constants
    for(let n=0;n<equation.length;n++){
      for(let l=0;l<equation[n].length;l++){
        if(equation[n].substring(l,l+1)==='-'||equation[n].substring(l,l+1)==='+'||equation[n].substring(l,l+1)==='*'||equation[n].substring(l,l+1)==='/'||equation[n].substring(l,l+1)==='^'){
          operations.push(equation[n].substring(l,l+1));
          if(l===0&&equation[n].substring(l,l+1)==='-'){
            neg=true;
          }
        }
        else if(equation[n].substring(l+1,l+2)==='-'||equation[n].substring(l+1,l+2)==='+'||equation[n].substring(l+1,l+2)==='*'||equation[n].substring(l+1,l+2)==='/'||equation[n].substring(l+1,l+2)==='^'{
          terms.push(equation[n].substring(l,l+cLength));
          cLength=1;
        }
        else{
          cLength++;
        }
      }
    }
    answer=Number(terms[0]);
    for(let n=0;n<operations.length;n++){
      if(neg===true){
        terms[n]="-"+terms[n];
        answer=Number(terms[0])
      }
      else{
        if(operations[n]==='+'){
          answer+=Number(terms[n]);
        }
        if(operations[n]==='-'){
          answer-=Number(terms[n]);
        }
        if(operations[n]==='*'){
          answer*=Number(terms[n]);
        }
        if(operations[n]==='/'){
          answer/=Number(terms[n]);
        }
        if(operations[n]==='^'){
          const ex= (Number(terms[n]).toExponential(terms[n+1])).toString();
          terms[n]=ex;
          terms[n+1].pop()
        }
      }
    }
  }
}

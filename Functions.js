export const inputField= document.querySelector('#input');
export const calculate= document.querySelector('#calculate');
export const responseField= document.querySelector('#responseField');

export const calc=()=>{
  const eq= false;//determines if expression is an equation
  const equation;//array of both expressions on either side of '='
  const find;//variable
  const varLocation;//variable location in equation
  const alph='abcdefghijklmnopqrstuvwxyz';
  const terms= new Array(2);//in-order array of all terms and constants in equation
  const operations= new Array(2);//in-order array of all math operations in equation
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
          operations[n].push(equation[n].substring(l,l+1));
          if(l===0&&equation[n].substring(l,l+1)==='-'){
            neg=true;
          }
        }
        else if(equation[n].substring(l+1,l+2)==='-'||equation[n].substring(l+1,l+2)==='+'||equation[n].substring(l+1,l+2)==='*'||equation[n].substring(l+1,l+2)==='/'||equation[n].substring(l+1,l+2)==='^'{
          terms[n].push(equation[n].substring(l,l+cLength));
          cLength=1;
        }
        else{
          cLength++;
        }
      }
    }
    answer=Number(terms[0]);
    if(neg===true){
      terms[0]="-"+terms[0];
      answer=Number(terms[0]);
    }
    for(let i=0;i<operations.length;i++{
      for(let n=0;n<operations[i].length;n++){
        if(operations[i][n]==='+'){
          answer+=Number(terms[i][n]);
        }
        if(operations[i][n]==='-'){
           answer-=Number(terms[i][n]);
        }
        if(operations[i][n]==='*'){
           answer*=Number(terms[i][n]);
        }
        if(operations[i][n]==='/'){
         answer/=Number(terms[i][n]);
        }
        if(operations[i][n]==='^'){
         const ex= (Number(terms[i][n]).toExponential(terms[i][n+1])).toString();
         terms[i][n]=ex;
         terms[i][n+1].pop();
        }
      }
    }
  }
}

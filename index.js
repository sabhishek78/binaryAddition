function binaryAddition(str1,str2){
  let firstArr=str1.split("");
  let secondArr=str2.split("");
  firstArr.reverse();
  secondArr.reverse();
  if(firstArr.length>secondArr.length){
    for(let i=0;i<firstArr.length-secondArr.length;i++){
      secondArr.push("0");
    }
  }
  if(firstArr.length<secondArr.length){
    for(let i=0;i<secondArr.length-firstArr.length;i++){
      firstArr.push("0");
    }
  }
  
  firstArr.push("0");
  secondArr.push("0");
  let carryArr=[];
  for(let i=0;i<firstArr.length;i++){
    carryArr.push("0");
  }
  let resultArr=[];
  for(let i=0;i<firstArr.length;i++){
    resultArr[i]=parseInt(firstArr[i])+parseInt(secondArr[i])+parseInt(carryArr[i]);
    if(resultArr[i]===2){
     resultArr[i]=1;
     carryArr[i+1]=1;
    }

  }
  console.log(resultArr);
  resultArr.reverse();
    console.log(resultArr);
    if(resultArr[0]===0){
      resultArr.shift();
    }
    console.log(resultArr);
let temp='';
for(let i=0;i<resultArr.length;i++){
  temp+=resultArr[i];
}
return temp;
}
console.log(binaryAddition("1000","111")==="1111");
console.log(binaryAddition("1000","1000")==="10000");
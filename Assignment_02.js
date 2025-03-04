const prompt=require("prompt-sync")({sigint:true}); 

function checkConsonent(char)
{
  if(char!='a' && char!='A' && char!='e' && char!='E' && char!='i' && char!='I'&& char!='o'&& char!='O'&& char!='u' && char!='U')
  {
    return false;
  }
  else return true;
}

function countConsonent(word)
{
  let count=0;
  for(let i=0;i<word.length;i++)
  {
    let zz=checkConsonent(word[i]);
    //console.log(zz);
    if(zz==0)
    {
      count++;
    }
  }
  return count;
}

//checking the validity of code "There should be no extra character excluding english word"
function checkValid(word)
{
  let flag=0;
  for(let i=0;i<word.length;i++)
  {
    //console.log("123");
    let AsciiValue = word[i].charCodeAt(0);
    if(AsciiValue>=97 && AsciiValue<=122 || AsciiValue>=65 && AsciiValue<=90)
    {
      //console.log(word[i]);
      continue;
    }
    else 
    {
      flag++;
      break;
    }
  }
  if(flag!=0)
  {
    return 0;
  }
  else return 1;
}

//taking user input

let word=prompt("Enter a word to count consonent : ");
let a=checkValid(word);
if(a==1)
{
 //console.log("Valid");
 let ans = countConsonent(word);
 console.log(ans);
}
else if(a==0)
{
console.log("Enter a Valid word");
}
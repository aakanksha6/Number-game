let score=20;
let highscore=0;
let compNumber;
let sc=document.querySelector(".score");
let hs=document.querySelector(".highscore");
let disp=document.querySelector(".disp");
let man=document.querySelector(".main");
let right=document.querySelector(".right");
let left=document.querySelector(".left");
let inp=document.querySelector(".inp");
let ournum=document.querySelector(".ourNumber");
ournum.innerHTML="?";
function choose_number()
{
    return Math.floor((Math.random()*21));
    
}
function keyp(e)
{
    if(e.key==='Enter')
    generate_mynumber();
}
inp.addEventListener("keypress",keyp);

compNumber=choose_number(); 
//console.log(compNumber);
let check=document.querySelector(".check");
function generate_mynumber()
{
    if(score==0)
    {
        disp.innerHTML="Please press again button to play again";
        return;
    }
    let num=Number(inp.value);
    console.log(num);
    if(num>20||num<0)
    {
        disp.innerHTML="Invalid Number";
    }
    else if(num==compNumber)
    {
        disp.innerHTML="Correct answer";
        document.body.style.backgroundColor="green";
        document.querySelector("h1").style.backgroundColor="green";
        right.style.backgroundColor="green";
        left.style.backgroundColor="green";
        sc.style.backgroundColor="green";
        disp.style.backgroundColor="green";
        hs.style.backgroundColor="green";
        if (score>highscore)
        highscore=score;
        hs.innerHTML=`Highscore:${highscore}`;

        ournum.innerHTML=compNumber;
    }
    else 
    {
        if(num>compNumber)
        disp.innerHTML="Too high";
        else 
        disp.innerHTML="Too Low";
        score--;
        sc.innerHTML=`Score:${score}`;
        if(score==0)
        {
            disp.innerHTML="You Loose";
            document.body.style.backgroundColor="#8a1010";
           document.querySelector("h1").style.backgroundColor="#8a1010";
           right.style.backgroundColor="#8a1010";
           left.style.backgroundColor="#8a1010";
           sc.style.backgroundColor="#8a1010";
           disp.style.backgroundColor="#8a1010";
           hs.style.backgroundColor="#8a1010";
           ournum.innerHTML=compNumber;
        }
}
}
let again=document.querySelector(".again");
function reset()
{
    score=20;
    document.body.style.backgroundColor="black";
    document.querySelector("h1").style.backgroundColor="black";
    right.style.backgroundColor="black";
    left.style.backgroundColor="black";
    sc.style.backgroundColor="black";
    disp.style.backgroundColor="black";
    hs.style.backgroundColor="black";
    inp.value="";
    ournum.innerHTML="?";
    sc.innerHTML=`Score:${score}`;
    compNumber=choose_number(); 

}
again.addEventListener("click",reset);

check.addEventListener("click",generate_mynumber);


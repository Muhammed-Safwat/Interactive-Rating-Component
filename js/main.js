let face = document.querySelector( ".container" );
let back = document.querySelector( ".container.B" );
let errorMassage = document.querySelector( ".errorMassage" );
let output = document.querySelector( ".num" );
let div1 = document.querySelector( ".div1");
let div2 = document.querySelector( ".div2" );
let div3 = document.querySelector( ".div3");
let div4 = document.querySelector( ".div4" );
let div5 = document.querySelector( ".div5" );
let num=0; 
console.log( div1 );
function click1(){
    num = 1;
    setBackground( div1 );
}
function click2(){
    num = 2;
    setBackground( div2 );
}
function click3(){
    num = 3;
    setBackground( div3 );
}
function click4(){
    num = 4;
    setBackground( div4 );
}
function click5(){
    num = 5;
    setBackground( div5 );
}
function ShowBack()
{
    if ( num == 0 )
    {
        errorMassage.style.display = "block";
    } else
    {
        face.style.display = "none";
        back.style.display = "flex";
        output.textContent = num;
    }
}
function setBackground( div )
{       
    if ( errorMassage.style.display === "block")
    {
        errorMassage.style.display = "none";
    }
    for ( let i = 1; i <=5; i++ ){
        let a = document.querySelector( `.div${ i }` );
            if (a.style.color === "white") {
                a.style.backgroundColor = "hsla(216, 12%, 54%, 0.205)";
                a.style.Color=" hsl(217deg 22% 73%)"; 
            }
        }
        div.style.backgroundColor = "hsl(25, 97%, 53%)";
        div.style.color = "white";
}

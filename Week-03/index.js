// const button =document.querySelector("#mainButton");
// const button =document.getElementById("mainButton");
// global number that gets increased throughout application
let num =0;

const messageWrapper = document.getElementById('messageWrapper');

const button =document.querySelector(".anotherButton");
button.innerText="Punch Me";
button.style.backgroundColor="red";

function clickOnMe(msg){
    messageWrapper.innerText=msg;
}

const secondButton = document.getElementById("mainButton");
const secondButtonMainColor = "green"
secondButton.style.backgroundColor=secondButtonMainColor;
secondButton.style.color="white";

secondButton.addEventListener('mouseenter',()=>{

    secondButton.style.backgroundColor="cornflowerblue";
})

secondButton.addEventListener('mouseleave',()=>{
    secondButton.style.backgroundColor=secondButtonMainColor;
})

secondButton.addEventListener("click", ()=>{

    num=num+1;
   messageWrapper.innerHTML="The second button is clicked!"
    console.log(num);

} );

function counter (arg){

}

secondButton.addEventListener("click", ()=>counter("words"));
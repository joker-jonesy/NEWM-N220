const popUp = document.getElementById('pop');
const view = document.getElementById('view');
let index = 0;
const list =[
    {
        name: "lightning Bolt",
        battery: 0
    },
    {
        name: "Gigawhatt Hammer",
        battery: 10
    },
    {
        name:"Shockwave",
        battery:5
    }
]

const elements = list.map(itm =>{
    const ele =document.createElement("div")
    ele.innerHTML=itm.name;
    return ele
})

function popAppear(idx){
    if(idx>=0){
        popUp.style.display="flex";
        index = idx;
        console.log(list[idx])
        view.innerHTML="";
        const name = document.createElement("h2")
        name.innerHTML=list[idx].name;
        const battery = document.createElement("p")
        battery.innerHTML=list[idx].battery;
        view.appendChild(name);
        view.appendChild(battery);

    }
}

popUp.addEventListener('click', (event)=>{
    if(event.target.id==="leftButt"){
        index = index-1;
        if(index<0){
            index= list.length-1;
        }
        popAppear(index)
    }else if(event.target.id==="rightButt"){
        index = index+1;
        if(index>=list.length){
            index= 0;
        }
        popAppear(index)
    }else{
        popUp.style.display="none";
    }
})

// document.getElementById('leftButt').addEventListener('click', (event)=>{
//     event.stopPropagation();
//     console.log("hey lefties")
// })

document.getElementById("wrapper").addEventListener("click", (event)=>{

    popAppear(elements.indexOf(event.target));
})

elements.forEach(itm =>{
    document.getElementById("wrapper").appendChild(itm);
})
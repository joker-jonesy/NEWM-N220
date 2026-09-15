const wrapper = document.getElementById("wrapper");

const blocks = [
    {
        name:"gamma",
        type:"square",
        number:3
    },
    {
        name:"delta",
        type:"cone",
        number:2
    },
    {
        name:"beta",
        type:"sphere",
        number:1
    }
];

// const blockObj = {
//     name:"gamma",
//     type:"square",
//     number:3
// }
//
// blockObj.name = "alpha";
//
// console.log(blockObj.name);

function addButton(){
    const button = document.createElement("button");
    button.innerHTML = "Add Block";
    button.addEventListener("click", ()=>{
        blocks.push({
            name:"omega",
            type:"triangle",
            number:4
        });
        renderBlocks();
    })
    wrapper.appendChild(button);
}


function renderBlocks(){
    wrapper.innerHTML="";

    // for(let i=0;i<blocks.length; i++){
    //     createBlock(blocks[i]);
    // }
    addButton();
    blocks.forEach(block=>{

        createBlock(block);
    })
}

// renderBlocks();
renderBlocks();

function createBlock(obj){
    const ele = document.createElement("div");
    ele.style.border = "2px solid black";
    ele.style.borderRadius = "8px";
    ele.style.marginTop="4px";
    ele.style.padding="4px";

    const header = document.createElement("h2");
    header.innerHTML="I'm Block "+obj.name;
    ele.appendChild(header);

    wrapper.appendChild(ele);
}

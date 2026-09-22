// const list = ["bananas", "apples", "grapes"];
//
//
// const newList = list.filter(item => item === "bananas");
// list.sort((a, b) => a - b);
//
// list.reverse();
// https://pokeapi.co/api/v2/pokemon

async function referencePokemon(name) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name);
    const data = await response.json();

    console.log(data)

    if (data.status === 404) {
        console.log("It Broke");
        return;
    }

    return data;
}

async function grabAllPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();

    if (data.status === 404) {
        console.log("It Broke");
        return;
    }

    return data.results;
}

// referencePokemon("pikachu").then((data)=>{
//     console.log(data)
// })

function renderPokemon(pokemon) {

    referencePokemon(pokemon.name).then(pokemon =>{
        const ele = document.createElement("div");
        const typeReference =[];
        pokemon.types.forEach(type => {
            typeReference.push(type.type.name)
        })

        // if(typeReference.includes("grass")){
        //     ele.style.backgroundColor="green";
        // }else if(typeReference.includes("fire")){
        //     ele.style.backgroundColor="red";
        // }else{
        //     ele.style.backgroundColor="gray";
        // }

        if(typeReference.includes("grass")){
            ele.style.backgroundColor="green";
        }
        if(typeReference.includes("fire")){
            ele.style.backgroundColor="red";
        }

        if(!typeReference.includes("grass")&&!typeReference.includes("fire")){
            ele.style.backgroundColor="gray";
        }

        const eleName = document.createElement("h3");
        const eleTypes = document.createElement("div");
        typeReference.forEach(type => {
            const typeEle = document.createElement("div");
            typeEle.innerHTML = type;
            eleTypes.appendChild(typeEle);
        })
        eleName.innerHTML = pokemon.name;
        ele.appendChild(eleName);
        ele.appendChild(eleTypes);
        document.getElementById("wrapper").appendChild(ele);
    })

}

grabAllPokemon().then((data)=>{
    data.forEach(pokemon => {
        renderPokemon(pokemon);
    })
});

let stuff = "stuff"

if(stuff){
    console.log("Im real")
}

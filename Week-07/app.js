// render a list of fruits, there should be at least 3 fruits
//the fruits should have different prices listed on them that I can modify
//i want to be able to delete one of the fruits

const wrapper = document.getElementById("wrapper")

const fruits = [
    {
        name: "Apple",
        price: 4.99
    },
    {
        name: "Banana",
        price: 7.99
    }, {
        name: "Leroy Jenkins",
        price: 2.99
    }
]

function render(){
    wrapper.innerHTML = ``;
    fruits.forEach((fruit, idx) => {
        const ele =document.createElement("div");
        const name = document.createElement("h2");
        const price = document.createElement("p");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");
        const addButton = document.createElement("button");
        const toggle = false;
        name.innerHTML = fruit.name;
        price.innerHTML = fruit.price;
        deleteButton.innerHTML = "X";
        editButton.innerHTML = "Edit";
        addButton.innerHTML = "+";

        deleteButton.addEventListener("click", () => {
            fruits.splice(idx,1);
            render();
        })

        addButton.addEventListener("click", () => {
            const oldFruit = fruits[idx];
            oldFruit.price = oldFruit.price+1;
            fruits[idx] = oldFruit;
            render();
        })


        ele.appendChild(name);
        ele.appendChild(price);
        ele.appendChild(deleteButton);
        ele.appendChild(addButton);

        wrapper.appendChild(ele);

    })
}

render();

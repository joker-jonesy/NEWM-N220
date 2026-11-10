import {store} from "../data.js";
const wrapper = document.getElementById("wrapper");

export const renderStore = ()=>{
    store.forEach((item, idx)=>{
        const ele = document.createElement("div");
        const name = document.createElement("p");
        const button = document.createElement("button");
        name.innerHTML = item;
        button.innerHTML = "Add to Cart";
        button.addEventListener("click", ()=>addCart(idx))
        ele.appendChild(name);
        ele.appendChild(button);
        wrapper.appendChild(ele);

    })
}

const addCart = (idx)=>{
    if(store[idx]){
        const cart = JSON.parse(localStorage.getItem("userCart"));
        cart.push(store[idx]);
        localStorage.setItem("userCart", JSON.stringify(cart));
    }else{
        console.log("Item added does not exist in store")
    }

}
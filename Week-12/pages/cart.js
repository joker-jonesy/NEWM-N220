
const wrapper = document.getElementById("wrapper");

export const renderCart = ()=>{
    const cart = JSON.parse(localStorage.getItem("userCart"));
    cart.forEach((item, idx)=>{
        const ele = document.createElement("div");
        const name = document.createElement("p");
        const button = document.createElement("button");
        name.innerHTML = item;
        button.innerHTML = "Remove";
        button.addEventListener("click", ()=>removeFromCart(idx))
        ele.appendChild(name);
        ele.appendChild(button);
        wrapper.appendChild(ele);
    })
}

const checkout =()=>{

}

const removeFromCart = (idx)=>{
    const cart = JSON.parse(localStorage.getItem("userCart"));
    cart.splice(idx, 1);
    localStorage.setItem("userCart", JSON.stringify(cart));
    document.getElementById("wrapper").innerHTML = "";
    renderCart();

}
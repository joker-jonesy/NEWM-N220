import {renderStore} from "./pages/storefront.js";

if(!localStorage.getItem("userCart")){
    localStorage.setItem("userCart", "[]");
    console.log("created local storage")
}

renderStore();





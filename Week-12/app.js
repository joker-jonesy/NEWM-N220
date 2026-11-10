import {renderStore} from "./pages/storefront.js";
import {navigation} from "./navigation.js";

if(!localStorage.getItem("userCart")){
    localStorage.setItem("userCart", "[]");
    console.log("created local storage")
}
navigation()
renderStore();





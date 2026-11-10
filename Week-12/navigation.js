import {renderStore} from "./pages/storefront.js";
import {renderCart} from "./pages/cart.js";

const wrapper = document.getElementById("wrapper");

export function navigation() {
    document.getElementById("viewCart").addEventListener("click", function () {
        wrapper.innerHTML = "";
        renderCart();
    })

    document.getElementById("viewStore").addEventListener("click", function () {
        wrapper.innerHTML = "";
        renderStore();
    })
}


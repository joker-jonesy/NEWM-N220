const submitButton = document.getElementById('submit');
const categorySelect = document.getElementById('select');
const priceSelect = document.getElementById('prices');
const wrapper = document.getElementById('wrapper');
const sortSelect = document.getElementById('sorter');
const products = [
    { name: "Apple",       category: "fruit", price: 1.5,  emoji: "🍎" },
    { name: "Banana",      category: "fruit", price: 0.75, emoji: "🍌" },
    { name: "Mango",       category: "fruit", price: 2.25, emoji: "🥭" },
    { name: "Strawberry",  category: "fruit", price: 3.0,  emoji: "🍓" },
    { name: "Carrot",      category: "veg",   price: 0.9,  emoji: "🥕" },
    { name: "Broccoli",    category: "veg",   price: 1.8,  emoji: "🥦" },
    { name: "Potato",      category: "veg",   price: 0.6,  emoji: "🥔" },
    { name: "Bell Pepper", category: "veg",   price: 1.4,  emoji: "🫑" },
    { name: "Milk",        category: "dairy", price: 2.5,  emoji: "🥛" },
    { name: "Cheese",      category: "dairy", price: 4.5,  emoji: "🧀" },
    { name: "Yogurt",      category: "dairy", price: 1.2,  emoji: "🍶" },
    { name: "Butter",      category: "dairy", price: 3.8,  emoji: "🧈" },
];

const users =[{id: 1, name:"Luke", email:"cool.com"},{id: 2, name:"Bob", email:"bobert.com"}];
const posts = [{id:1, author: 1, text:"some cool text"},{id:2, author: 1, text:"some more cool text"}]

const completePosts = posts.map(post => {

    const master = {}
    master.id = post.id;
    master.author = users[post.author-1]
    master.text = post.text;

    return master;
})

// console.log(completePosts);

const sortMethods = {
    "alpha-ascend":(a,b)=> a.name.localeCompare(b.name),
    "alpha-descend":(a,b)=>b.name.localeCompare(a.name),
    "num-ascend":(a,b)=> a.price - b.price,
    "num-descend":(a,b)=> b.price - a.price,
}




submitButton.addEventListener("click", function (e) {

    const sorted = products.sort(sortMethods[sortSelect.value]);

    const category = categorySelect.value;
    const price = Number(priceSelect.value);

    const filtered = sorted.filter((product)=>{
        return product.category === category && product.price <= price;
    })

    renderProducts(filtered);


})

function renderProducts(list){
    wrapper.innerHTML = '';

    const mapped = list.map((item)=>{
        return renderProduct(item);
    })
    mapped.forEach((item)=>{
        wrapper.appendChild(item);
    })

}

renderProducts(products);

function renderProduct(prd){
    const ele =document.createElement("div");
    ele.innerHTML = prd.name+ " Price: "+ prd.price;
    return ele;
}

const names = products.map(pineapples=>{
    return pineapples.name
})

// console.log(names);


// const sorted = products.sort((a,b)=> a.name.localeCompare(b.name))
// const sorted = products.sort((a,b)=> b.name.localeCompare(a.name))
// const sorted = products.sort((a,b)=> a.price - b.price);
// const sorted = products.sort((a,b)=> b.price - a.price);




// mapped[0].style.color ="red"

// const filtered = products.filter((product)=>{
//     return product.category === "dairy" && product.price <= 3;
// })
//
// console.log(filtered, filtered.length)



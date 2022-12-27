// let allProducts;
// const getProducts = async() =>{

//     const response = await fetch('https://dummyjson.com/products');

//     const data = await response.json();    

//     allProducts = data.products
    
//     console.log("data:", data);

// };

// getProducts();

console.log('Ecommerce');

// All variables

const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const cartCount = document.querySelector(".cartCount")
let allProducts = [];
let cartProducts = [];

const getProducts = async () => {

    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();    

    allProducts = data.products;

    displayProduct();
    displayCart();
    
    console.log("Data:", data);
}
getProducts();

const addCart = (idx) => {
    cartProducts.push(allProducts[idx]);
    cartCount.innerText = cartProducts.length;
    displayCart();
};

const displayCart = () =>{
    cartList.innerHTML = " ";
    for(product of cartProducts){
        const cartItem = `
        <div class="card p-3 mt-1 w-100 ">
        <div class="row d-flex align-items-center">
            <div class="d-flex flex-column align-items-center col-1">
                <button class="btn border border-1">+</button>
                <span class="my-3">1</span>
                <button class="btn border border-1">-</button>
            </div>
            <div class="col-4">
                <img src="${product.thumbnail}" alt="" class="card-img w-100 h-75">

            </div>
            <div class="col-4">
                <h3 class="card-title fs-2">
                    ${product.title}
                </h3>
                <p class="fw-light fs-3">
                    $${product.price}.00
                </p>
                <p class="fw-light fs-6 text-muted">
                    1 X
                </p>
            </div>
            <div class="col-3 d-flex align-items-center border-2 border-start">
                
                <h5 class="ms-3">$240.00</h5>
            </div>
        </div>
    </div> 
        `;
        cartList.innerHTML += cartItem;
    };
};

const displayProduct = () => {
    allProducts.forEach((product,idx) => {
        const item = `
        <div class="card" style="width: 22%;">
        <img src="${product.thumbnail}" class="card-img-top" style = "width: 100%; height: 200px;alt="...">
        <div class="card-body">
            <h3 class="card-title text-center fw-bolder fs-3">${product.title}</h3>
            <p class="text-end text-success fw-bold fs-5">${product.discountPercentage} % OFF</p>
            <h4>$${product.price}.00</h4>
            <p class="card-text fs-6 w-100 text-truncate">${product.description}.</p>
            <div class="d-flex justify-content-between">

                <div>
                    <span><i class="fa-solid fa-star text-warning"></i></span>
                    <span><i class="fa-solid fa-star text-warning"></i></span>
                    <span><i class="fa-solid fa-star text-warning"></i></span>
                    <span><i class="fa-solid fa-star text-warning"></i></span>
                    <span><i class="fa-solid fa-star-half-stroke text-warning"></i></span>
                    <span>${product.rating}</span>   
                </div>

                <div>
                    <a href="#" onclick="addCart(${idx})" class="btn btn-white text-primary border-primary">
                    <i class="bi bi-cart-plus"></i>
                        Cart
                    </a>
                </div>
               
                
                
            </div>
        </div>
    </div>
    `;
    productList.innerHTML += item;
    });
};

{/* <div class="card p-5 ">
<div class="row d-flex align-items-center">
    <div class="d-flex flex-column align-items-center col-1">
        <button class="btn border border-1">+</button>
        <span class="my-3">2</span>
        <button class="btn border border-1">-</button>
    </div>
    <div class="col-4">
        <img src="https://images.pexels.com/photos/14758717/pexels-photo-14758717.jpeg" alt="" class="card-img w-100 h-75">

    </div>
    <div class="col-4">
        <h3 class="card-title fs-2">
            IPhone
        </h3>
        <p class="fw-light fs-3">
            $120.00
        </p>
        <p class="fw-light fs-6 text-muted">
            2X
        </p>
    </div>
    <div class="col-3 d-flex align-items-center border-2 border-start">
        
        <h5 class="ms-3">$240.00</h5>
    </div>
</div>
</div> */}
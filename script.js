let root = document.querySelector(".root");
let cart = document.querySelector(".cart");

async function getData() {
  let result = await fetch("https://fakestoreapi.com/products/");
  let data = await result.json();

  return data;
}
getData()
  .then((data) => {
    //* DisplayCard
    function DisplayCard() {
      data.map((item) => {
        let x = "";
        for (let i = 1; i <= Math.round(item.rating.rate); i++) {
          x += "⭐";
        }
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span><b>Category:-</b>${item.category}</span>
      <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>
       <span><b>Rating:-</b> ${item.rating.rate} (${x})</span>
      <button onclick ="Add_to_Cart(${item.id})">Add to Cart</button>
      `;
        root.appendChild(card);
      });
    }

    //* DisplayCart
    function DisplayCart() {
      let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
      cart.innerHTML = "";
      cartItem.map((item) => {
        let row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `<div>
        <h4>${item.title}</h4>
        <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>   
        </div>
        <button onclick ="removeCart(${item.id})">Remove</button>
        `;
        cart.prepend(row);
        // increase cart length when click on addToCart

        sp.innerHTML = `${cartItem.length}`;
      });

      let last = document.createElement("div");
      last.classList.add("last");
      last.innerHTML = `
      <b>Total Price:- </b>
      <span>RS. <span id='tp'></span></span>
      `;
      cart.appendChild(last);
      let final = cartItem.reduce((x, y) => x + Math.ceil(y.price) * 10, 0);
      let tp = document.getElementById("tp");
      tp.innerHTML = `${final}`;
    }

    // for display the cartLength by default
    let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    sp.innerHTML = `${cartItem.length}`;

    window.Add_to_Cart = (PID) => {
      let Product = data.find((item) => item.id == PID);
      let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
      cartItem.push(Product);
      localStorage.setItem("cart", JSON.stringify(cartItem));
      // increase cart length when click on addToCart

      sp.innerHTML = `${cartItem.length}`;
      DisplayCart();
    };

    //* Remove from Cart
    window.removeCart = ({ index }) => {
      // set the cartItems after delete the target item

      let cartItem = JSON.parse(localStorage.getItem("cart"));
      cartItem.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItem));

      // show the cartLength after delete the target item

      sp.innerHTML = `${cartItem.length}`;

      // show the cartItems after delete the target item
      cart.innerHTML = "";
      cartItem.map((item) => {
        let row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `<div>
        <h4>${item.title}</h4>
        <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>   
        </div>
        <button onclick ="removeCart(${item.id})">Remove</button>
        `;
        cart.prepend(row);
      });
      // show the totalPrice after delete the target item
      let last = document.createElement("div");
      last.classList.add("last");
      last.innerHTML = `
     <b>Total Price:- </b>
      <span>RS. <span id='tp'></span></span>
      `;
      cart.appendChild(last);
      let final = cartItem.reduce((x, y) => x + Math.ceil(y.price) * 10, 0);
      let tp = document.getElementById("tp");
      tp.innerHTML = `${final}`;
    };

    DisplayCart();
    DisplayCard();

    //! All Data
    window.allData = () => {
      root.innerHTML = "";
      data.map((item) => {
        let x = "";
        for (let i = 1; i <= Math.round(item.rating.rate); i++) {
          x += "⭐";
        }
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span><b>Category:-</b>${item.category}</span>
      <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>
       <span><b>Rating:-</b> ${item.rating.rate} (${x})</span>
      <button onclick ="Add_to_Cart(${item.id})">Add to Cart</button>
      `;
        root.appendChild(card);
      });
    };

    //* Show Men Data
    window.mens = () => {
      let resultMen = data.filter((item) => item.category == "men's clothing");

      root.innerHTML = "";
      resultMen.map((item) => {
        let x = "";
        for (let i = 1; i <= Math.round(item.rating.rate); i++) {
          x += "⭐";
        }
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span><b>Category:-</b>${item.category}</span>
      <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>
       <span><b>Rating:-</b> ${item.rating.rate} (${x})</span>
      <button onclick ="Add_to_Cart(${item.id})">Add to Cart</button>
      `;
        root.appendChild(card);
      });
    };

    //* Show Women Data
    window.women = () => {
      let resultWomen = data.filter(
        (item) => item.category == "women's clothing"
      );

      root.innerHTML = "";
      resultWomen.map((item) => {
        let x = "";
        for (let i = 1; i <= Math.round(item.rating.rate); i++) {
          x += "⭐";
        }
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span><b>Category:-</b>${item.category}</span>
      <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>
       <span><b>Rating:-</b> ${item.rating.rate} (${x})</span>
      <button onclick ="Add_to_Cart(${item.id})">Add to Cart</button>
      `;
        root.appendChild(card);
      });
    };

    //* Show Jewellery Data
    window.jewellery = () => {
      let jewellery = data.filter((item) => item.category == "jewelery");

      root.innerHTML = "";
      jewellery.map((item) => {
        let x = "";
        for (let i = 1; i <= Math.round(item.rating.rate); i++) {
          x += "⭐";
        }
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span><b>Category:-</b>${item.category}</span>
      <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>
       <span><b>Rating:-</b> ${item.rating.rate} (${x})</span>
      <button onclick ="Add_to_Cart(${item.id})">Add to Cart</button>
      `;
        root.appendChild(card);
      });
    };
    //* Show Electronics Data

    window.electronics = () => {
      let electronics = data.filter((item) => item.category == "electronics");
      root.innerHTML = "";
      electronics.map((item) => {
        let x = "";
        for (let i = 1; i <= Math.round(item.rating.rate); i++) {
          x += "⭐";
        }
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <span><b>Category:-</b>${item.category}</span>
      <span><b>Price:-</b>${Math.round(item.price * 10)} Rs.</span>
       <span><b>Rating:-</b> ${item.rating.rate} (${x})</span>
      <button onclick ="Add_to_Cart(${item.id})">Add to Cart</button>
      `;
        root.appendChild(card);
      });
    };
  })
  .catch((err) => {
    console.log(err);
  });
function ShowCart() {
  cart.classList.toggle("Show");
}

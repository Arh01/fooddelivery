let siteURL = "http://fooddelivery.loc/";

let cart = "Cart";

// ==== Add to shopping cart (in Local Storage) new product(food)
function addToCart(btn) {
    let foodId = btn.dataset.id;
    if (localStorage.getItem(cart) == undefined) {
        localStorage.setItem(cart, JSON.stringify({ "order": [{ "id": foodId, "amount": 1, "title": btn.dataset.title, "image": siteURL + btn.dataset.image, "price": btn.dataset.price }] }));
    } else {
        let temp = 0;
        let cartUpdate = JSON.parse(localStorage.getItem(cart));
        for (let i = 0; i < cartUpdate.order.length; i++) {
            if (+cartUpdate.order[i]["id"] == foodId) {
                cartUpdate.order[i]["amount"]++;
                temp = 1;
                break;
            }
        };
        if (temp == 0) {
            cartUpdate.order.push({ "id": foodId, "amount": 1, "title": btn.dataset.title, "image": siteURL + btn.dataset.image, "price": btn.dataset.price });
        }
        localStorage.setItem(cart, JSON.stringify(cartUpdate));
    }
}

// ==== Draws the contents of the cart on the right side of the page: Shopping Cart
let productsOut = document.querySelector(".products-side");
if (productsOut != null) {
    let cartUpd = JSON.parse(localStorage.getItem(cart));
    let cartOut = cartUpd.order;
    cartOut.forEach(function (food) {
        let newElem = document.createElement('div');
        newElem.innerHTML =
            `<div class="row border border-secondary mb-3" data-div=${food.id}>
            <div class="col-6">
                <div class="card m-3">
                    <div class="col m-2">
                        <img src="${food.image}" class="card-img-top" style="border-radius: 10px;" alt="food">
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex">
                <div class="row m-2 d-flex align-self-center">
                    <h5 class="card-title">${food.title}</h5>
                    <p class="card-text">Price ${food.price} uah</p>
                    <p class="card-text">Total <span class="total-${food.id}">${food.price * food.amount}</span> uah</p>
                    <div class="input-group" role="group" aria-label="Basic example" style="width: 10rem;">
                        <button type="button" class="btn btn-primary minus" data-id=${food.id}>-</button>
                        <input type="number" class="form-control text-center input input-${food.id}" value=${food.amount}>
                        <button type="button" class="btn btn-primary plus" data-id=${food.id}>+</button>
                    </div>
                </div>
                <button type="button" class="btn-close ms-5" data-id=${food.id} aria-label="Close"></button>
            </div>
        </div>`;
        productsOut.appendChild(newElem);
    });

    // ==== Write the total price (to the left of the Submit button)
    function totalPrice() {
        let sum = 0;
        let cartUpd = JSON.parse(localStorage.getItem(cart));
        cartUpd.order.forEach(function (food) {
            sum += food.price * food.amount;
        });
        let total = document.getElementById("total-price");
        total.innerText = sum;
    }

    totalPrice();


    // ==== Clicking on the "Close" button and removing items from the Shopping Cart
    let allBtnClose = document.querySelectorAll(".btn-close")
    allBtnClose.forEach(function (btn) {
        btn.addEventListener('click', function () {
            btn.parentNode.parentNode.remove();
            deleteFoodFromCart(btn.dataset.id);
        })
    })

    function deleteFoodFromCart(id) {
        let cartUpd = JSON.parse(localStorage.getItem(cart));
        let index = cartUpd.order.findIndex(food => food.id == id);
        if (index != -1) {
            cartUpd.order.splice(index, 1);
            localStorage.setItem(cart, JSON.stringify(cartUpd));
        }
    }


    // ==== Click on the "+" and "-" buttons
    document.onclick = (event) => {
        if (event.target.classList.contains("plus")) {
            plusFunc(event.target.dataset.id);
        } else if (event.target.classList.contains("minus")) {
            minusFunc(event.target.dataset.id);
        }
    }

    function plusFunc(id) {
        let tot;
        let cartUpd = JSON.parse(localStorage.getItem(cart));
        cartUpd.order.forEach(function (food) {
            if (food["id"] == id) {
                food["amount"]++;
                localStorage.setItem(cart, JSON.stringify(cartUpd))
                tot = food["amount"] * food["price"];
            }
        });
        changeInputPlus(id);
        changePrice(id, tot);
        totalPrice();
    }

    function changeInputPlus(id) {
        document.querySelector(".input-" + id).value++;
    }

    function changePrice(id, tot) {
        document.querySelector(".total-" + id).innerText = tot;
    }

    function minusFunc(id) {
        let tot;
        let cartUpd = JSON.parse(localStorage.getItem(cart));
        cartUpd.order.forEach(function (food) {
            if (food["id"] == id) {
                if (food["amount"] - 1 != 0) {
                    food["amount"]--;
                    localStorage.setItem(cart, JSON.stringify(cartUpd))
                    tot = food["amount"] * food["price"];
                    changeInputMinus(id);
                    changePrice(id, tot);
                    totalPrice();
                }
            }
        });
    }

    function changeInputMinus(id) {
        document.querySelector(".input-" + id).value--;
    }


    // ==== Send order to the database & clear Local Storage
    function createOrder() {
        let name = document.getElementById("exampleInputName").value;
        let email = document.getElementById("exampleInputEmail").value;
        let phone = document.getElementById("exampleInputPhone").value;
        let address = document.getElementById("exampleInputAddress").value;
        let data_body = "name=" + name + "&email=" + email + "&phone=" + phone + "&address=" + address + "&user_order=" + localStorage.getItem(cart);

        fetch(`${siteURL}modules/order.php`, {
            method: "POST",
            body: data_body,
            headers: { "content-type": "application/x-www-form-urlencoded" }
        })
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject();
                }
                return response.text()
            })
            .then(i => console.log(i))
            .catch(() => console.log('ошибка'));

        localStorage.setItem(cart, JSON.stringify({ "order": [] }));
    }


}

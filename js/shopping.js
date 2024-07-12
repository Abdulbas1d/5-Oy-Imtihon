const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const button = document.getElementById("button");

if(productId) {
    fetch (`https://cars-pagination.onrender.com/products/${productId}`)
        .then((res) => res.json())
        .then((product) => {
            document.getElementById("main").innerHTML =
            `
            <div id="main-1" class="main-1">
                <img src="${product?.image}" alt="">
            </div>
            <div id="main-2" class="main-2">
                <h1>${product?.name}</h1>
                <p class="text">Замок дверной электронный Golden Soft <br> GS-200Z-5 имеет роскошный глянцевый <br> блеск, четкие линии, красивые формы.</p>
                <p class="text">Подходит для установки на <br> деревянную/межкомнатную дверь.</p>

                <p class="price">Цена</p>
                <div class="price2">
                    <h3>${product?.newPrice}₽</h3>
                    <p>${product?.oldPrice}</p>
                </div>
                <button id="button" class="button">КОРЗИНКА</button>
            </div>
            `
        })
} else {
    document.getElementById("product-details-container").innerHTML =
    "<h5>Product not found</h5>"
}

button.addEventListener('click', function() {
    window.location.assign('http://127.0.0.1:5500/pages/catalogue.html')
})

function showAlert() {
    Swal.fire({
      title: 'Qo`shildi!',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000
    });
    alert("Savatchani usita bosishingiz mumkin!")
}
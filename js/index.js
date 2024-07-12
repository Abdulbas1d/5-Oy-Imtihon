const container = document.getElementById("container");
const logo = document.getElementById("logo");
const main = document.getElementById("main");
const select = document.getElementById("select");
const mediumEl = document.getElementById("medium-1");
const input = document.getElementById("input");
const button = document.getElementById("btnn");
const cards = document.getElementById("cards");
const card = document.getElementById("card");
const cardPartEl = document.getElementById("card-part1");
const forText = document.getElementById("for-text");
const forImg = document.getElementById("for-img");
const errorPicture = document.getElementById("error-picture");
const sale = document.getElementById("sale");
const forData = document.getElementById("for-data");
const giftsPicture = document.getElementById("gifts-picture");
const doorHandle = document.getElementById("door-handle");
const cardPart = document.getElementById("card-part2");
const forImage = document.getElementById("for-image");
const price = document.getElementById("price");
const mediumRight = document.getElementById("medium-right");
const middlePart = document.getElementById("middle-part");

function getCard(product) {
    return `
        <div id="card" class="card">
            <div id="card-part1" class="card-part1">
                <div id="for-text" class="for-text">
                    <div id="for-img" class="for-img">
                        <img id="error-picture" class="error-picture" src="./images/error_picture.svg" alt="">
                        <h4>Нет в наличии</h4>
                    </div>
                        <h3 id="sale">SALE</h3>
                </div>
                <div id="for-data" class="for-data">
                    <img id="gifts-picture" class="gifts-picture" src="./images/gift-picture.svg" alt="">
                    <h4>Подарок</h4>
                </div>
                <img id="door-handle" class="door-handle" src="${product.image}" alt="">
            </div>
            <div id="card-part2" class="card-part2">
                <div id="for-image" class="for-image">
                    <img src="./images/reyting-picture.svg" alt="">
                    <h4>(12) отзывов</h4>
                </div>
                <h5>${product.name}</h5>
                <div id="price" class="price">
                    <h2>${product.newPrice}₽</h2>
                    <h4>${product.oldPrice}₽</h4>
                </div>
            </div>
        </div>               
    `
}

function getCardId(productId) {
    window.location.href = `/pages/shopping.html?id=${productId}`;
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://cars-pagination.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            data.forEach((element,index) => {
                if (index != 0 && index < 13) {
                    mediumRight.innerHTML += getCard(element)
                }
            });
        })
})


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://cars-pagination.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            data.forEach((element,index) => {
                if (index != 0 && index < 5) {
                    middlePart.innerHTML += getCard(element)
                }
            });
        })
})
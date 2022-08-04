
// 當localStorage沒有陣列資料，創建一個空陣列放入資料庫
let storageCommodity;
if (localStorage.getItem("item") === null) {
    storageCommodity = [];
    localStorage.setItem("item", JSON.stringify(storageCommodity));
} else {
    storageCommodity = JSON.parse(localStorage.getItem("item"));
};

// 已放入購物車的商品數量
cart_num();
function cart_num() {
    let cart_num = document.querySelectorAll(".cart-num");
    for (let i = 0; i < cart_num.length; i++) {
        cart_num[i].textContent = storageCommodity.length;
    }
}

// 獲取產品視窗
let commodity_detail = document.querySelectorAll(".commodity-detail");
// 將獲取的資料放入資料庫的陣列
let addCart = document.querySelectorAll(".addcart");
let buynow = document.querySelectorAll(".buynow");
let commodityImg = document.querySelectorAll(".commodity-img img");
let commodityTxt_h4 = document.querySelectorAll(".commodity-txt h4");
let commodityTxt_p = document.querySelectorAll(".commodity-txt p");
let commodityTxt_span = document.querySelectorAll(".commodity-txt span");
let commodityNum = document.querySelectorAll("input[class='num']");
let itemList = document.querySelector(".itemlist");
let cart_null = document.querySelector(".cart-null");
add();
function add() {
    if (addCart && buynow && commodityNum && itemList === null) {
        for (let i = 0; i < addCart.length; i++) {
            // 點擊加入購物車
            addCart[i].onclick = function (event) {
                event.preventDefault();
                // 點擊後關閉產品視窗
                commodity_detail[i].style.opacity = 0;
                commodity_detail[i].style.zIndex = -100;
                alert("商品已加入購物車");
                // 取得以下資料
                let commodityimg = commodityImg[i].src;
                let commoditytxt_h4 = commodityTxt_h4[i].textContent;
                let commoditytxt_p = commodityTxt_p[i].textContent;
                let commoditytxt_span = parseInt(commodityTxt_span[i].textContent)
                let commoditynum = parseInt(commodityNum[i].value);
                // 建立一個物件放入資料
                let commodity_object = { img: commodityimg, name: commoditytxt_h4, price: commoditytxt_p, value: commoditynum, total: commoditytxt_span * commoditynum, done: true };
                // 將物件放入資料庫的陣列
                storageCommodity.push(commodity_object);
                // 將陣列修改成JSON字串
                let stringJson = JSON.stringify(storageCommodity);
                // 將處理後的JSON字串更新到資料庫中
                localStorage.setItem("item", stringJson);
                // 輸入欄位復原
                commodityNum[i].value = 1;
                cart_num();
            }
            buynow[i].onclick = function () {
                // 取得以下資料
                let commodityimg = commodityImg[i].src;
                let commoditytxt_h4 = commodityTxt_h4[i].textContent;
                let commoditytxt_p = commodityTxt_p[i].textContent;
                let commoditytxt_span = parseInt(commodityTxt_span[i].textContent)
                let commoditynum = parseInt(commodityNum[i].value);
                // 建立一個物件放入資料
                let commodity_object = { img: commodityimg, name: commoditytxt_h4, price: commoditytxt_p, value: commoditynum, total: commoditytxt_span * commoditynum, done: true };
                // 將物件放入資料庫的陣列
                storageCommodity.push(commodity_object);
                // 將陣列修改成JSON字串
                let stringJson = JSON.stringify(storageCommodity);
                // 將處理後的JSON字串更新到資料庫中
                localStorage.setItem("item", stringJson);
                // 輸入欄位復原
                commodityNum[i].value = 1;
                cart_num();
            }
        }
    } else {
        createlist();
    }
}

function createlist() {
    // 將資料庫的陣列取出
    let cartQuantity = JSON.parse(localStorage.getItem("item"));
    // 假如資料庫內的陣列有內容存在，執行以下的程式碼
    if (cartQuantity.length !== 0) {
        itemList.innerHTML = "";
        cartQuantity.forEach(function (item, key) {
            let createTr = document.createElement("tr");
            let createTd = document.createElement("td");
            let createTd2 = document.createElement("td");
            let createTd3 = document.createElement("td");
            let createTd4 = document.createElement("td");
            let createTd5 = document.createElement("td");
            let createTd6 = document.createElement("td");
            let createTd7 = document.createElement("td");
            let createInput = document.createElement("input");
            createInput.setAttribute("type", "checkbox");
            createInput.checked = item.done;
            // createInput.addEventListener("click", checkStatus);
            let createImg = document.createElement("img");
            createImg.src = item.img;
            let createI = document.createElement("i");
            createI.classList.add("fa");
            createI.classList.add("fa-times");
            createI.setAttribute("aria-hidden", "true");
            createI.dataset.number = key;
            // 增加到頁面
            itemList.appendChild(createTr);
            createTr.appendChild(createTd);
            createTr.appendChild(createTd2);
            createTr.appendChild(createTd3);
            createTr.appendChild(createTd4);
            createTr.appendChild(createTd5);
            createTr.appendChild(createTd6);
            createTr.appendChild(createTd7);
            createTd.appendChild(createInput);
            createTd2.appendChild(createImg);
            createTd7.appendChild(createI);
            createTd3.textContent = item.name;
            createTd4.innerHTML = "<span>單價：</span>" + item.price;
            createTd5.innerHTML = "<span>數量：</span>" + item.value;
            createTd6.innerHTML = "<span>小計：</span>" + item.total;
            createTd6.dataset.price = item.total;
            itemList.addEventListener("click", deleteList);
        })
    } else {
        cart_null.style.display = "block";
        cart_null.innerHTML = '<p>你的購物車是空的</p>';
        itemList.innerHTML = '';
        // 總金額清空
        let cart_price = document.querySelector(".cart-price");
        cart_price.style.display = "none";
    }
}

// 移除商品
function deleteList(e) {
    let targetClassName = e.target.className;
    if (targetClassName.includes('fa-times')) {
        alert("商品已刪除");
        let num = e.target.dataset.number;
        storageCommodity.splice(num, 1);
        // 將陣列修改成JSON字串
        let stringJson = JSON.stringify(storageCommodity);
        // 將處理後的JSON字串更新到資料庫中
        localStorage.setItem("item", stringJson);
        add();
        cart_num();
        cart_total();
    }
}

// 購物車內的商品總金額
cart_total();
function cart_total(e) {
    let price = document.querySelectorAll("td[data-price]");
    let cart_price = document.querySelector(".cart-price");
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        if (price.length === 0) {
            cart_price.style.display = "none";
        } else {
            let priceNum = parseInt(price[i].dataset.price)
            total += priceNum;
            cart_price.innerHTML = "<span>總金額$</span><span>" + total + "</span><span>元</span>";
        }
    }
}





// --------------------清空購物車--------------------
// let remove = document.querySelector("input[type='button']");
// remove.onclick = function () {
//     storageCommodity = [];
//     localStorage.clear("item");
// }
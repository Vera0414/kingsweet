window.onload = function () {


    let timer;



    // --------------------首頁輪播--------------------

    // 設定輪播寬度
    let slideWidth_inner = document.querySelector(".slideshow-img");
    let slideimg = document.querySelectorAll(".slideshow-img div");
    if (slideWidth_inner && slideimg) {
        slideWidth_inner.style.width = 100 * slideimg.length + "%";

        // 設定輪播圖片寬度
        for (let i = 0; i < slideimg.length; i++) {
            slideimg[i].style.width = 100 / slideimg.length + "%";
        }

        // 設定第一個導航按鈕
        let slidenavList = document.querySelectorAll(".slideshow-navList a");
        slidenavList[0].style.opacity = 1;

        // 設定當前的值
        let index = 0;

        // 點擊右鍵
        let slideWidth_outer = document.querySelector(".slideshow");
        let arm = true;
        let right = document.querySelector(".rightbtn");
        right.onclick = function () {

            clearInterval(timer);

            if (arm) {
                arm = false;
                setTimeout(function () {
                    arm = true;
                }, 500);

                index++;

                move(slideWidth_outer, slideWidth_inner, -100 * index, 2, function () {
                    autoChange();
                    setnavList();
                });
            }
        }

        // 點擊左鍵
        let left = document.querySelector(".leftbtn");
        left.onclick = function () {

            clearInterval(timer);

            if (arm) {
                arm = false;
                setTimeout(function () {
                    arm = true;
                }, 500);

                index--;

                move(slideWidth_outer, slideWidth_inner, -100 * index, 2, function () {
                    autoChange();
                    setnavList();
                });
            }
        }

        // 設定導航按鈕
        function setnavList() {
            if (index > slideimg.length - 3) {
                index = 0;
                slideWidth_inner.style.left = 0;
            };
            if (index < 0) {
                index = slideimg.length - 3;
                slideWidth_inner.style.left = -100 * (slideimg.length - 3) + "%";
            };
            for (let i = 0; i < slidenavList.length; i++) {
                slidenavList[i].style.opacity = "";
            };
            slidenavList[index].style.opacity = 1;
        };

        // 輪播自動撥放
        autoChange();
        function autoChange() {

            timer = setInterval(function () {

                index++;

                if (index > slideimg.length - 2) {
                    index = 0;
                };

                move(slideWidth_outer, slideWidth_inner, -100 * index, 2, function () {
                    setnavList();
                });
            }, 5000)
        };

        // 點擊導航按鈕移動到圖片
        clicknavList()
        function clicknavList() {

            for (let i = 0; i < slidenavList.length; i++) {

                slidenavList[i].num = i;

                slidenavList[i].onclick = function () {
                    clearInterval(timer);
                    index = this.num;
                    move(slideWidth_outer, slideWidth_inner, -100 * index, 1, function () {
                        autoChange();
                        setnavList();
                    });
                }
            }
        }
    }



    // --------------------手機版選單--------------------
    // 選單顯示/隱藏
    let header_shadow = document.querySelector(".header-shadow");
    let navbar_hamburger = document.querySelector(".navbar-hamburger");
    navbar_hamburger.onclick = function () {
        if (header_shadow.style.width === "100%") {
            header_shadow.style.width = 0;
        } else {
            header_shadow.style.width = 100 + "%";
        }
    }

    // 麵包專區-下拉式選單
    let navbar_txt_li = document.querySelectorAll(".navbar-txt li");
    let navbar_txt_menu = document.querySelector(".navbar-txt-menu");
    for (let i = 0; i < navbar_txt_li.length; i++) {
        navbar_txt_li[1].onclick = function () {
            if (navbar_txt_menu.style.maxHeight === "100%") {
                navbar_txt_menu.style.maxHeight = 0;
            }
            else {
                navbar_txt_menu.style.maxHeight = 100 + "%";
            }
        }
    }



    // --------------------產品頁面--------------------
    // 按叉叉關閉視窗
    let commodity_content = document.querySelectorAll(".commodity-content");
    let commodity_detail = document.querySelectorAll(".commodity-detail");
    let commodity_fork = document.querySelectorAll(".commodity-detail-fork");
    // 加入購物車按鈕
    for (let i = 0; i < commodity_content.length; i++) {

        commodity_content[i].onclick = function () {
            commodity_detail[i].style.opacity = 1;
            commodity_detail[i].style.zIndex = 100;
        }

        commodity_fork[i].onclick = function () {
            commodity_detail[i].style.opacity = 0;
            commodity_detail[i].style.zIndex = -100;
        }
    }



    // --------------------登入/註冊的密碼顯示與隱藏--------------------

    // 登入的密碼
    let login_password = document.querySelector(".login-passwordinput");
    let login_passwordeye = document.querySelector(".login-eye");
    if (login_password && login_passwordeye) {
        login_passwordeye.onclick = function () {
            if (login_password.type === "password") {
                login_password.type = "text";
                login_passwordeye.innerHTML = "visibility";
            } else {
                login_password.type = "password";
                login_passwordeye.innerHTML = "visibility_off";
            }
        }
    }

    // 註冊的密碼
    let register_passwords = document.querySelectorAll(".middle-style .register-passwordinput");
    let register_passwordeyes = document.querySelectorAll(".middle-style .register-eye");
    for (let i = 0; i < register_passwordeyes.length; i++) {
        if (register_passwords && register_passwordeyes[i]) {
            register_passwordeyes[0].onclick = function () {
                if (register_passwords[0].type === "password") {
                    register_passwords[0].type = "text";
                    register_passwordeyes[0].innerHTML = "visibility";
                } else {
                    register_passwords[0].type = "password";
                    register_passwordeyes[0].innerHTML = "visibility_off";
                }
            }
            register_passwordeyes[1].onclick = function () {
                if (register_passwords[1].type === "password") {
                    register_passwords[1].type = "text";
                    register_passwordeyes[1].innerHTML = "visibility";
                } else {
                    register_passwords[1].type = "password";
                    register_passwordeyes[1].innerHTML = "visibility_off";
                }
            }
        }
    };





    window.onscroll = function () {

        // --------------------最新消息--------------------

        let newsimg = document.querySelectorAll(".news-img img");
        imgtop();
        function imgtop() {
            for (let i = 0; i < newsimg.length; i++) {
                if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
                    newsimg[0].classList.add("imgleft");
                } else {
                    newsimg[0].classList.remove("imgleft");
                }
                if (document.body.scrollTop > 930 || document.documentElement.scrollTop > 930) {
                    newsimg[1].classList.add("imgright");
                } else {
                    newsimg[1].classList.remove("imgright");
                }
            }
        }



        // --------------------頂部菜單--------------------

        // 改變頂部菜單的高度
        let header = document.querySelector(".header");
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            header.classList.add("headerscroll");
        } else {
            header.classList.remove("headerscroll");
        }

        // 改變下拉式選單的top值
        let navbar_menu = document.querySelector(".navbar-txt-menu");
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            navbar_menu.classList.add("navbar_menuscroll");
        } else {
            navbar_menu.classList.remove("navbar_menuscroll");
        }



        // --------------------置頂按鈕--------------------

        // 滾動後出現按鈕
        let top = document.querySelector(".top-btn");
        if (top) {
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                top.classList.add("topscroll");
            } else {
                top.classList.remove("topscroll");
            }

            // 點擊後置頂
            top.onclick = function () {
                scrolltoTop();
            }

            function scrolltoTop() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let speed;
                if (scrollTop > 0) {
                    speed = 50;
                    document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
                    setTimeout(scrolltoTop, 1);
                }
            }
        }



    }

}
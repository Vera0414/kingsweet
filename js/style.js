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
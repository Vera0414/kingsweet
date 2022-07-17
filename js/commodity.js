
let { createApp } = Vue
createApp({
    data: function () {
        return {
            add: "+",
            minus: "-",
            bread: [
                {
                    img: "./image/1640741997.jpg",
                    name: "醇可可生吐司",
                    ingredient: "法國法芙娜巧克力、潔淨標章麵粉、魯邦老麵種",
                    price: 175,
                    unit: "條",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1640742328.jpg",
                    name: "蜂吻戀乳生吐司",
                    ingredient: "國產標章認證及產銷履歷蜂蜜、飛燕煉乳、潔淨標章麵粉、魯邦老麵種",
                    price: 150,
                    unit: "條",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1640743402.jpg",
                    name: "極軟桑葚優格吐司",
                    ingredient: "台東桑葚、優格乳酪丁",
                    price: 170,
                    unit: "條",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1643363644.jpg",
                    name: "芋見四重奏吐司",
                    ingredient: "大甲芋頭、蛋黃金沙、台畜肉鬆、乳酪絲",
                    price: 159,
                    unit: "條",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1571274278.jpg",
                    name: "乳酪吐司",
                    ingredient: "乳酪",
                    price: 115,
                    unit: "條",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1571275194.jpg",
                    name: "葡萄吐司",
                    ingredient: "蘭姆酒、葡萄乾",
                    price: 65,
                    unit: "條",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1571274803.jpg",
                    name: "原味吐司",
                    ingredient: "鮮奶油、全脂奶粉",
                    price: 70,
                    unit: "包",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1571274874.jpg",
                    name: "胚芽吐司",
                    ingredient: "小麥胚芽粉",
                    price: 75,
                    unit: "包",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1571274982.jpg",
                    name: "黑麥吐司",
                    ingredient: "英國黑麥粉、魯邦種",
                    price: 65,
                    unit: "包",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1604543332.jpg",
                    name: "穀類牧場長纖吐司",
                    ingredient: "德國-黑麥芽粉、亞麻子、白芝麻、南瓜子、葵花子",
                    price: 125,
                    unit: "包",
                    number: 1,
                    type: "toast"
                },
                {
                    img: "./image/1571215961.jpg",
                    name: "原味貝果",
                    ingredient: "西班牙初榨橄欖油、老麵",
                    price: 38,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/1580372789.jpg",
                    name: "可可貝果",
                    ingredient: "西班牙初榨橄欖油、可可粉、水滴巧克力",
                    price: 48,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/1571279521.jpg",
                    name: "南瓜貝果",
                    ingredient: "西班牙初榨橄欖油、南瓜、南瓜子",
                    price: 50,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/1571277594.jpg",
                    name: "三重起司貝果",
                    ingredient: "西班牙初榨橄欖油、紅切達乳酪絲、乳酪片、乳酪丁",
                    price: 62,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/1571219173.jpg",
                    name: "藍莓貝果",
                    ingredient: "西班牙初榨橄欖油、老麵、藍莓",
                    price: 58,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/1571219309.jpg",
                    name: "洛神乳酪貝果",
                    ingredient: "西班牙初榨橄欖油、台東洛神花、澳洲CreamCheese",
                    price: 58,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/1571216069.jpg",
                    name: "蔓越莓貝果",
                    ingredient: "西班牙初榨橄欖油、老麵、蔓越莓",
                    price: 43,
                    unit: "個",
                    number: 1,
                    type: "bagel"
                },
                {
                    img: "./image/DSC_6546-1________500.jpg",
                    name: "番茄乳酪可頌",
                    ingredient: "培根乳酪餡、牛番茄、義式香料、Isigny無鹽發酵奶油、莫比T55麵粉、嘉明鮮乳、魯邦種",
                    price: 65,
                    unit: "個",
                    number: 1,
                    type: "choice"
                },
                {
                    img: "./image/DSC_6484-1________500.jpg",
                    name: "蜂蜜檸檬法國",
                    ingredient: "龍眼蜂蜜、梅原檸檬丁、莫比T55麵粉、特級初榨橄欖油",
                    price: 95,
                    unit: "個",
                    number: 1,
                    type: "choice"
                },
                {
                    img: "./image/DSC_6533-1________500.jpg",
                    name: "香橙肉桂丹麥",
                    ingredient: "法國莫比T55麵粉、日清山茶花強力粉、天然無鹽發酵奶油、100%鮮乳、肉桂粉、手工蔗糖、香吉士",
                    price: 55,
                    unit: "個",
                    number: 1,
                    type: "choice"
                },
                {
                    img: "./image/Croissant-aux-Chocolat-s.jpg",
                    name: "巧克力可頌",
                    ingredient: "液種發酵、昭和製粉CDC法國專用粉、Isigny天然奶油、低糖、包覆2條法國巧克力",
                    price: 60,
                    unit: "個",
                    number: 1,
                    type: "choice"
                },
                {
                    img: "./image/Croissant-big-s.jpg",
                    name: "大牛角可頌",
                    ingredient: "液種發酵、昭和製粉CDC法國專用粉、Isigny天然奶油、低糖",
                    price: 55,
                    unit: "個",
                    number: 1,
                    type: "choice"
                },
                {
                    img: "./image/Cereales.jpg",
                    name: "薩瑞斯鄉村",
                    ingredient: "天然裸麥酸種、低溫長時間發酵、法國安東磨坊T85裸麥麵粉、南瓜子、亞麻仁、白芝麻、葵瓜子",
                    price: 75,
                    unit: "個",
                    number: 1,
                    type: "choice"
                }
            ],
            dessert: [
                {
                    img: "./image/ai192-dr30a.jpg",
                    name: "聖米歇爾蘋果塔",
                    ingredient: "熬煮蘋果、杏仁奶油餡",
                    price: 120,
                    number: 1,
                    unit: "個"
                },
                {
                    img: "./image/aidv8-6ynd8.jpg",
                    name: "法式鹹派",
                    ingredient: "豬肉、蘑菇、奶油、蛋",
                    price: 160,
                    number: 1,
                    unit: "個"
                },
                {
                    img: "./image/avr0z-p0wnc.jpg",
                    name: "老奶奶檸檬塔",
                    ingredient: "新鮮檸檬汁、雞蛋、諾曼地產區認證發酵奶油",
                    price: 150,
                    number: 1,
                    unit: "個"
                },
                {
                    img: "./image/awxh8-6newn.jpg",
                    name: "京都抹茶塔",
                    ingredient: "法國CACAO BARRY巧克力、栗子、抹茶",
                    price: 180,
                    number: 1,
                    unit: "個"
                },
                {
                    img: "./image/adw1g-e6uzy.jpg",
                    name: "百香檸檬輕乳酪",
                    ingredient: "檸檬輕乳酪、百香果幕斯、芒果淋醬",
                    price: 180,
                    number: 1,
                    unit: "個"
                },
                {
                    img: "./image/atq37-yya0y.jpg",
                    name: "可麗露",
                    ingredient: "大溪地香草、雞蛋、奶油",
                    price: 80,
                    number: 1,
                    unit: "個"
                },
                {
                    img: "./image/ai65v-c02qf.jpg",
                    name: "貝殼瑪德蓮",
                    ingredient: "日本麵粉、雞蛋、奶油",
                    price: 65,
                    number: 1,
                    unit: "個"
                }
            ]
        }
    },
    methods: {
        minusnum(object) {
            object.number--;
            if (object.number < 0) {
                object.number = 0;
            }
        },
        addnum(object) {
            object.number++;
            if (object.number > 10) {
                object.number = 10;
            }
        }
    },
    mounted: function () {

    }
}).mount("#commodity")




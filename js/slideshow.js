
// outer:輪播父層(取寬度)
// inner:輪播子層(取left值)
// target:目標
// speed:速度
// callback:回調函數


function move(outer, inner, target, speed, callback) {

    clearInterval(inner.timer);

    let outerwid = parseInt(getStyle(outer, "width"));
    let innerlef = parseInt(getStyle(inner, "left"));

    let current = innerlef === 0 ? 0 : innerlef / outerwid * 100;

    if (current > target) {
        speed = -speed;
    }

    let oldvalue = innerlef === 0 ? 0 : innerlef / outerwid * 100;
    let newvalue;

    inner.timer = setInterval(function () {

        newvalue = oldvalue + speed;

        inner.style.left = newvalue + "%";

        if ((speed < 0 && newvalue <= target) || (speed > 0 && newvalue >= target)) {
            newvalue = target;
            inner.style.left = newvalue + "%";
            clearInterval(inner.timer);
            callback && callback();
        }

        oldvalue = newvalue;

    }, 1);

};

function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
};
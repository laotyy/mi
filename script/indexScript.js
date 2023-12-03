var imgs = ["./img/middle-background.jpg","./img/2.webp", "./img/3.webp", "./img/4.webp", "./img/5.webp",]
var img = document.querySelector(".img-list img");
var options = document.querySelectorAll(".option a");
// 获取所有轮播图下面的小图标
var leftButton = document.querySelector(".left-button");
var rightButton = document.querySelector(".right-button");
// 获取左右切换按钮
var index = 0;
// 默认为开始第一个小按钮添加选中样式
options[index].classList.add("select");

let timer = setInterval(function () {
    options[index].classList.remove("select");
    index++;
    if (index > 4) {
        index = 0;
    }
    img.src = imgs[index];
    options[index].classList.add("select");
},2000)

leftButton.addEventListener("click", function () {
    // 清除轮播定时器
    clearInterval(timer);
    options[index].classList.remove("select");
    index--;
    if (index < 4) {
        index = 3;
    }
    img.src = imgs[index];
    options[index].classList.add("select");
    // 重新打开轮播定时器
    timer = setInterval(function () {
        options[index].classList.remove("select");
        index++;
        if (index > 4) {
            index = 0;
        }
        img.src = imgs[index];
        options[index].classList.add("select");
    },2000)
})
rightButton.addEventListener("click", function () {
    // 清除轮播定时器
    clearInterval(timer)
    options[index].classList.remove("select");
    index++;
    if (index > 4) {
        index = 0;
    }
    img.src = imgs[index];
    options[index].classList.add("select");
    // 打开轮播定时器
    timer = setInterval(function () {
        options[index].classList.remove("select");
        index++;
        if (index > 4) {
            index = 0;
        }
        img.src = imgs[index];
        options[index].classList.add("select");
    },2000)
})




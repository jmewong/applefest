
/* */
var fun_imagearray = ["fun.jpg", "fun1.jpg", "fun2.jpg"];
var market_imagearray = ["market.jpg", "market1.jpg", "market2.jpg"];
var food_imagearray = ["food.jpg", "food1.jpg", "food2.jpg"];
var craft_imagearray = ["craft.jpg", "craft1.jpg", "craft2.jpg"];
var curIndex = 0;
var imgDuration = 10000;

function slideShow(id, imgarray) {
    'use strict';
    document.getElementById(id).className += "fadeOut";
    setTimeout(function () {
        document.getElementById(id).src = 'images/' + imgarray[curIndex];
        document.getElementById(id).className = "";
    }, 1000);
    curIndex++;
    if (curIndex === imgarray.length) { curIndex = 0; }
    setTimeout(function () {
        slideShow(id, imgarray)
    }, imgDuration);
}
slideShow('fun_image', fun_imagearray);
slideShow('market_image', market_imagearray);
slideShow('food_image', food_imagearray);
slideShow('craft_image', craft_imagearray);

$("funanc").trigger('click');

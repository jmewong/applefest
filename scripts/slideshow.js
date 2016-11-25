
/* */
// fun.jpg from https://www.flickr.com/photos/106103661@N02/15266538019/in/album-72157648366747526/
// fun1.jpg from https://www.flickr.com/photos/106103661@N02/15266598780/in/album-72157648366747526/
// fun2.jpg from https://www.flickr.com/photos/106103661@N02/10396929706/in/album-72157648008079417/
var fun_imagearray = ["fun.jpg", "fun1.jpg", "fun2.jpg"];
// market.jpg, market1.jpg, market2.jpg by Jamie Wong
var market_imagearray = ["market.jpg", "market1.jpg", "market2.jpg"];
// food.jpg from https://www.flickr.com/photos/106103661@N02/21839487978/in/album-72157657274645113/
// food1.jpg, food2.jpg by Jamie Wong
var food_imagearray = ["food.jpg", "food1.jpg", "food2.jpg"];
// craft.jpg from https://www.flickr.com/photos/106103661@N02/10396902815/in/album-72157648008079417/
// craft1.jpg from 	https://www.flickr.com/photos/106103661@N02/15453293375/in/album-72157648366747526/
// craft2.jpg by Jamie Wong
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

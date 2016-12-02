
/* variables and function */
// fun.jpg from https://www.flickr.com/photos/106103661@N02/15266538019/in/album-72157648366747526/
// fun1.jpg from https://www.flickr.com/photos/106103661@N02/15266598780/in/album-72157648366747526/
// fun2.jpg from https://www.flickr.com/photos/106103661@N02/10396929706/in/album-72157648008079417/
var fun_imgarray = ["fun.jpg", "fun1.jpg", "fun2.jpg"];
// market.jpg, market1.jpg, market2.jpg by Jamie Wong
var market_imgarray = ["market.jpg", "market1.jpg", "market2.jpg"];
// food.jpg from https://www.flickr.com/photos/106103661@N02/21839487978/in/album-72157657274645113/
// food1.jpg, food2.jpg by Jamie Wong
var food_imgarray = ["food.jpg", "food1.jpg", "food2.jpg"];
// craft.jpg from https://www.flickr.com/photos/106103661@N02/10396902815/in/album-72157648008079417/
// craft1.jpg from https://www.flickr.com/photos/106103661@N02/15453293375/in/album-72157648366747526/
// craft2.jpg by Jamie Wong
var craft_imgarray = ["craft.jpg", "craft1.jpg", "craft2.jpg"];
var showIndex = 1;
var imgDuration = 10000;

function slideShow() {
    'use strict';

    /* fade out the old images by adding the fadeOut effect */
    document.getElementById('fun_image').className += "fadeOut";
    document.getElementById('market_image').className += "fadeOut";
    document.getElementById('food_image').className += "fadeOut";
    document.getElementById('craft_image').className += "fadeOut";

    /* after 1 second, show the new row of images */
    setTimeout(function () {
        document.getElementById('fun_image').src = 'images/' + fun_imgarray[showIndex];
        document.getElementById('fun_image').className = "";

        document.getElementById('market_image').src = 'images/' + market_imgarray[showIndex];
        document.getElementById('market_image').className = "";

        document.getElementById('food_image').src = 'images/' + food_imgarray[showIndex];
        document.getElementById('food_image').className = "";

        document.getElementById('craft_image').src = 'images/' + craft_imgarray[showIndex];
        document.getElementById('craft_image').className = "";
    }, 1000);

    /* adjust the index to show next image row */
    showIndex++;
    if (showIndex === fun_imgarray.length) { showIndex = 0; }

    /* after 10 seconds, call slideShow again to show the next row of images */
    setTimeout(slideShow, imgDuration);
}

$(document).ready(function() {

    /* after the page is loaded for 10 seconds, start the images slide show */
    setTimeout(slideShow, imgDuration);

    /* when an <a> tag is clicked, hide all the center_* divs except the one with id "center_<a tag's id>" */
    /* e.g. When <a id="fun"> tag is clicked, only show the "center_fun" div and hide the rest */
    $("a").click(function(event) {

        /* hide all the center_* divs */
        $("#center > div").hide();

        /* only show the center_<a tag's id> div based on the id of the link/image just got clicked */
        $("#center_" + this.id).show();
    });
    
    /* trigger the 'About' link click so when page is first loaded, only the 'center_about' div is displayed */
    $("#about").trigger("click");
});



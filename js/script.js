/* CCIS 2591 - JavaScript, Spring 2017
*  jquery-moonflowers, script.js
*  Cheryl Davis
*/
$(document).ready(function(){
    $("img").hide();
    $(".menu-item").on("click", function() {
        let itemImage = $(this).siblings("img").attr("src");
        $("#jsImage").attr("src",itemImage);
        $("#jsImage").attr("width","300");
        $("#jsImage").attr("height","300");
        $("#jsImage").show();
    })
});

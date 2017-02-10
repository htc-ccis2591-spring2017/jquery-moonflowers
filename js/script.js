$(function () {
    'use strict';
    $("img").hide(); // Hide all images
    $("h2").after("<p>Click on an item to see an image</p>");
    $("span").click(function () {
        $("aside").empty(); // Clear out the previous image if there is one
        let itemImage = ($(this).next().attr("src")); // Get img src for item clicked
        $("aside").append('<img src="' + itemImage + '">'); // Append an img element with the itemImage
    })

});
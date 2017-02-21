$(document).ready(function () {


    $("img").hide();
    $(".menu-item").on("click", function () {
        $("aside").empty();
        let src = $(this).next().attr("src");
        $("aside").append('<img src="' + src + '">')
        src = $(this).previous().attr("src");



    })





});
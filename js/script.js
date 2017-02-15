$(document).ready(function () {
    $("img").hide();
    $("h2").after("<p>Please click on an item to see its image.</p>");

    $("span").on("click",function () {
        $("aside").empty();
        let itemImage = ($(this).next().attr("src"));
        $("aside").append('<img src="' + itemImage + '">');
    })

});

$(function () {
    //Document is ready
    $("img").hide();
    $("h2").after("<p> Click on each item to see its image </p>");
    $("span").on("click", function () {
        $(this).next().attr("src")
        let src = $(this).next().attr("src")
        $("aside").empty()
        $("aside").append('<img src="' + src + '">')
    });
});
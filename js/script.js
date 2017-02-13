//Shows images when menu items are clicked
$(document).ready(function(){
    $("img").hide();
    $(".menu-item").on("click", function() {
        let itemImage = $(this).siblings("img").attr("src");
        $("#menuItm").attr("src",itemImage);
        $("#menuItm").attr("width","200");
        $("#menuItm").attr("height","200");
        $("#menuItm").show();
    })
});
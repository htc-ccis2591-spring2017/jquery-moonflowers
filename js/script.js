$(document).ready(function() {
    
//Hide images on load
$("img").hide();
    
//Add text after Menu
$("h2").after("<p>Click on the item to display its image!</p>");
    
//Object Triggering Event on click
$(".menu-item").on("click", function() {

//Clears out what's in the aside tag
$("aside").empty();

//Gets the image, (finds and uses the next sibling with attribute of src)
let image =$(this).next().attr("src"); 
    
//Adds this image to the aside tag using append
$("aside").append('<img src="' + image + '">'); 


});
});
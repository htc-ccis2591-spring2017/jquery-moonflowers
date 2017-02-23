$(document).ready(function() {
	$("img").hide(); //this line of code hides all of the images.

	$("h2").after("<h4><span id='java'>You may click on an item to display its image</h4>"); //this line of code adds "you may click on an item to display its image" to the h2 tag.

	$(".menu-item").on("click", function() //this line of code creates a function when you click on an image that is part of the menu-item class.
	{ 
		$("aside").empty(); //this line of code empties the aside area that is defined in the HTML document. 
		
		let image = $(this).next().attr("src"); //this line of code gets the image from the image source. 
    
		$("aside").append('<img src="' + image + '">'); //this line of code appends the image retrieved from the line of code above to the append area that is defined in the HTML document. 

    });

});




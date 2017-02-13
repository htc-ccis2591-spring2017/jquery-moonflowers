/*jslint browser: true*/
/*global $, jQuery*/


var $espresso = $("espresso");// variable espresso


    
$(document).ready(function () {
     "use strict";
    $("<p>").text("Click a menu item to view a picture.").insertBefore("#espresso");
                
    $(".menu-item").each(function(index, item) {
        
        $(item).next().attr("class", "hide");
            
        });
        
        $(".menu-item").click(function() {
                
            var imgSrc = $(this).next().attr("src");
 
var $menuItems = $(".menu-item");

$("#aside-image").attr("src", imgSrc).removeAttr("class"); 
            
        })
        
    });

var menuItems = $(".menu-item");
var $item;
for (var i = 0; i < menuItems.length; i++ ) {
    item = menuItems[i];

    item.nextElementSibling.setAttribute("class", "hide");

    // Attach event handler
    item.onclick = function () {

imgSrc = this.nextElementSibling.getAttribute("src");

        $("#aside-image").attr("src", imgSrc);
       
        $("#aside-image").removeAttr("class");
        
    }
};


$(document).ready(function(){
    

    $("img").hide();
    $(".menu-item").on("click", function(){
        let src = $(this).next().attr("src");
        $("aside").append('<img src="'+ src + '">')
    })
    
    
    
    
    
});



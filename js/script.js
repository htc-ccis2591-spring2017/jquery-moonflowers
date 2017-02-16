$( document ).ready(function(){

  $(".menu-item").click(function(){
    var src = $(this).siblings("img").attr("src");
    var tag = "<img src=\"" + src + "\">";
    var pic = $("#picture");
    var img = $("#picture img");

    if(pic.children().length > 0) {
      if(img.attr("src") == src) {
        img.toggle();
      } else {
        img.remove();
        pic.append(tag);
      }
    } else {
      pic.append(tag);
    }
  });

});

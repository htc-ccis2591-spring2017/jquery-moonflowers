$( document ).ready(function(){

  $(".menu-item").click(function(){
    let src = $(this).siblings("img").attr("src");
    let tag = "<img src=\"" + src + "\">";
    let pic = $("#picture");
    let img = $("#picture img");

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

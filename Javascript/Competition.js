(function ($) {
    $(function () {
  
      
  
    });
  })(jQuery);
  //HOME.JS

//Global Variables
var click = 0;

//Post card dropdown
$(".more").click(function(){
    if (click == 0){ 
        $(this).next(".dropdown_content").show(); click++;
    } else {
        $(this).next(".dropdown_content").hide(); click = 0;
    }
});

$(document).click(function(){
    if (click > 0) { $(".dropdown_content").hide(); click = 0; }
});

$(".more").click(function(e){
    e.stopPropagation();
});



//Detect Mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  $(".middle_division .header aside").append('<a href="javascript:void(0)" title="Create Community"><iconify-icon icon="ri:advertisement-line"></iconify-icon></a>');
}
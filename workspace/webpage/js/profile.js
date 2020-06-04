var imgWrapper = $(document).find(".img-wrapper");

imgWrapper.hover(function(e){
    $(this).addClass('img-hover');
    $(this).find('.collection-info-fade').fadeIn(800);
  
},function(e){
    $(this).delay("slow").removeClass('img-hover');
    $(this).find('.collection-info-fade').fadeOut(700);
});


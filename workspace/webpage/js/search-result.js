var imgWrapper = $(document).find(".img-wrapper");


imgWrapper.hover(function(e){
    $(this).addClass('img-hover');
    $(this).find('.collection-info-fade').fadeIn(800);
    $(this).find('.collection-info div:first').removeClass('collection-name').addClass('collection-name-hover');

  
},function(e){
    $(this).delay("slow").removeClass('img-hover');
    $(this).find('.collection-info-fade').fadeOut(700);
    $(this).find('.collection-info div:first').removeClass('collection-name-hover').addClass('collection-name');
});


var imgWrapper = jQuery(document).find(".img-wrapper");

/* 마우스 올렷을 때, 벗어났을 때 */
imgWrapper.hover(function(e){
    jQuery(this).addClass('img-hover');
    jQuery(this).find('.collection-info-fade').fadeIn(800);
    jQuery(this).find('.collection-info div:first').removeClass('collection-name').addClass('collection-name-hover');

  
},function(e){
    jQuery(this).delay("slow").removeClass('img-hover');
    jQuery(this).find('.collection-info-fade').fadeOut(700);
    jQuery(this).find('.collection-info div:first').removeClass('collection-name-hover').addClass('collection-name');
});


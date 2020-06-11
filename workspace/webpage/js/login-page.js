var logo = jQuery(document).find(".wave-box .logo");
var moveWaveBox = jQuery(document).find(".move-wave-box");
var loginWrapper = jQuery(document).find('.login-wrapper');

logo.hover(function(e){
    logo.find('.fa-play-circle').addClass('show');
    logo.find('.fa-play-circle').removeClass('hide');
    
  
},function(e){
    logo.find('.fa-play-circle').addClass('hide');
    logo.find('.fa-play-circle').removeClass('show');
  
});
logo.click(function(e){
    logo.addClass('slide');
    moveWaveBox.delay(500).slideDown(500);
   /*  moveWaveBox.delay(500).queue(function(next){
        moveWaveBox.
        next();
    }); */
    loginWrapper.delay(1000).queue(function (next) { 
        loginWrapper.addClass('show');
        next(); 
    });
});



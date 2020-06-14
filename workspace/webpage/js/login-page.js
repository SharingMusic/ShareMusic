
var logo = jQuery(document).find(".wave-box .logo");
var waveBox= jQuery(document).find(".wave-box");
var loginWrapper = jQuery(document).find('.login-wrapper');
var loginTitle = jQuery(document).find('.login-title.hide');
var colorBoxTop = jQuery(document).find('.color-box-top');
logo.hover(function(e){
    logo.find('.fa-play-circle').addClass('show');
    logo.find('.fa-play-circle').removeClass('hide');
    
  
},function(e){
    logo.find('.fa-play-circle').addClass('hide');
    logo.find('.fa-play-circle').removeClass('show');
  
});
logo.click(function(e){
    /* 제목 사라지게 */
    logo.addClass('slide');
    
    /* 물결 내려가게 */
    waveBox.css('transition','all 0.7s ease-out');
    waveBox.delay(1000).queue(function(next){
        waveBox.css('transform','translateY(20vh)');
        next();
    });
    colorBoxTop.animate({
        height:'20vh'
    },700);
    
    /* 로그인창 보이게 */
    loginWrapper.delay(1500).queue(function (next) { 
        loginWrapper.addClass('show');
        loginTitle.removeClass('hide').addClass('show');
        next(); 
    });
});



var moveArea = jQuery(document).find('.move-area');
var leftBtn = jQuery(document).find('.left-btn');
var rightBtn = jQuery(document).find('.right-btn');
var submitBtn = jQuery(document).find('.submit-btn');
var waveBox = jQuery(document).find(".wave-box");
var colorBoxTop = jQuery(document).find('.color-box-top');
var colorBoxBottom = jQuery(document).find('.color-box-bottom');
var main = jQuery(document).find('.main');
var nav = jQuery(document).find('nav');
var titleBar = jQuery(document).find('.title-bar');

//왼쪽 화살표를 눌렀을 때
jQuery(document).on('click touch', '.left-btn',function(e){
    e.preventDefault();
    moveArea.removeClass('move-right');    //영역 왼쪽으로 이동
    submitBtn.addClass('submit-btn-hide') //submit버튼 숨기기
    leftBtn.addClass('left-btn-hide');  //왼쪽 버튼 숨기기
    rightBtn.removeClass('right-btn-hide')  //오른쪽버튼 보이기
});
//오른쪽 화살표를 눌렀을 때
jQuery(document).on('click touch', '.right-btn',function(e){
    e.preventDefault();
    moveArea.addClass('move-right');        //영역 오른쪽으로 이동
    leftBtn.removeClass('left-btn-hide');   //왼쪽버튼 보이기
    rightBtn.addClass('right-btn-hide');    //오른쪽버튼 숨기기
    submitBtn.removeClass('submit-btn-hide');   //submit버튼 보이기
    
});
//컬렉션 생성 버튼을 눌렀을 때
jQuery(document).on('click touch', '.submit-btn',function(e){
    e.preventDefault();
    //부드럽게 변화주는 css추가
    waveBox.css('transition','all 1.5s cubic-bezier(0.550, 0.055, 0.675, 0.190)');   
    //main, title, nav 사라지게하기
    main.addClass('slide');
    titleBar.addClass('slide');
    nav.addClass('slide');

    //y축 이동
    waveBox.css('transform','translateY(-40vh)');
    //빈공간 coloBox로 채우기
    colorBoxBottom.animate({
        height: '40vh'
    },1500);


    //Loading글씨 띄우기
    colorBoxBottom.children().delay(1700).fadeIn(500);
});

  // "y" is arbitrary used as the key name 
  

jQuery(document).ready(function(){
    var fileTarget = jQuery('.filebox .upload-hidden');
  
  
  
     fileTarget.on('change', function(){
         if(window.FileReader){
             // 파일명 추출
             var filename = jQuery(this)[0].files[0].name;
  
         } 
  
         else {
             // Old IE 파일명 추출
             var filename = jQuery(this).val().split('/').pop().split('\\').pop();
         };
  
         jQuery(this).siblings('.upload-name').val(filename);
     });
  
     //preview image 
     /* var imgTarget = jQuery('.preview-image .upload-hidden');
  
     imgTarget.on('change', function(){
         var parent = jQuery(this).parent();
         parent.children('.upload-display').remove();
  
         if(window.FileReader){
             //image 파일만
             if (!jQuery(this)[0].files[0].type.match(/image\//)) return;
  
  
             
             var reader = new FileReader();
             reader.onload = function(e){
                 var src = e.target.result;
                 parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
             }
             reader.readAsDataURL(jQuery(this)[0].files[0]);
         }
  
         else {
             jQuery(this)[0].select();
             jQuery(this)[0].blur();
             var imgSrc = document.selection.createRange().text;
             parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');
  
             var img = jQuery(this).siblings('.upload-display').find('img');
             img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
         }
     }); */
  });
  
  
  function previewImage(targetObj, View_area) {
      var preview = document.getElementById(View_area); //div id
      var ua = window.navigator.userAgent;
  
    //ie일때(IE8 이하에서만 작동)
      if (ua.indexOf("MSIE") > -1) {
          targetObj.select();
          try {
              var src = document.selection.createRange().text; // get file full path(IE9, IE10에서 사용 불가)
              var ie_preview_error = document.getElementById("ie_preview_error_" + View_area);
  
  
              if (ie_preview_error) {
                  preview.removeChild(ie_preview_error); //error가 있으면 delete
              }
  
              var img = document.getElementById(View_area); //이미지가 뿌려질 곳
  
              //이미지 로딩, sizingMethod는 div에 맞춰서 사이즈를 자동조절 하는 역할
              img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')";
          } catch (e) {
              if (!document.getElementById("ie_preview_error_" + View_area)) {
                  var info = document.createElement("<p>");
                  info.id = "ie_preview_error_" + View_area;
                  info.innerHTML = e.name;
                  preview.insertBefore(info, null);
              }
          }
    //ie가 아닐때(크롬, 사파리, FF)
      } else {
          var files = targetObj.files;
          for ( var i = 0; i < files.length; i++) {
              var file = files[i];
              var imageType = /image.*/; //이미지 파일일경우만.. 뿌려준다.
              if (!file.type.match(imageType))
                  continue;
              var prevImg = document.getElementById("prev_" + View_area); //이전에 미리보기가 있다면 삭제
              if (prevImg) {
                  preview.removeChild(prevImg);
              }
              var img = document.createElement("img"); 
              img.id = "prev_" + View_area;
              img.classList.add("obj");
              img.file = file;
              img.style.width = '100px'; 
              img.style.height = '100px';
              preview.appendChild(img);
              if (window.FileReader) { // FireFox, Chrome, Opera 확인.
                  var reader = new FileReader();
                  reader.onloadend = (function(aImg) {
                      return function(e) {
                          aImg.src = e.target.result;
                      };
                  })(img);
                  reader.readAsDataURL(file);
              } else { // safari is not supported FileReader
                  //alert('not supported FileReader');
                  if (!document.getElementById("sfr_preview_error_"
                          + View_area)) {
                      var info = document.createElement("p");
                      info.id = "sfr_preview_error_" + View_area;
                      info.innerHTML = "not supported FileReader";
                      preview.insertBefore(info, null);
                  }
              }
          }
      }
  }
  
  
  /*
  //이미지 미리보기
  
  jQuery.fn.setPreview = function(opt){ 
    "use strict" 
    var defaultOpt = { 
      inputFile: jQuery(this), 
      img: null, 
      w: 200,
      h: 200 
    }; 
    
    jQuery.extend(defaultOpt, opt); 
    
    var previewImage = function(){ 
      if (!defaultOpt.inputFile || !defaultOpt.img) return; 
      var inputFile = defaultOpt.inputFile.get(0); 
      var img = defaultOpt.img.get(0);  
      if (window.FileReader) {  
        if (!inputFile.files[0].type.match(/image\//)) return;  
  
  
        try { 
          var reader = new FileReader(); 
          reader.onload = function(e){ 
          img.src = e.target.result; 
          img.style.width = defaultOpt.w+'px'; 
          img.style.height = defaultOpt.h+'px'; 
          img.style.display = ''; 
        } 
        
        reader.readAsDataURL(inputFile.files[0]);
      } catch (e) { 
        // exception... 
      } 
    
    } else if (img.filters) { 
      inputFile.select(); 
      inputFile.blur(); 
      var imgSrc = document.selection.createRange().text; 
      
      img.style.width = defaultOpt.w+'px'; 
      img.style.height = defaultOpt.h+'px'; 
      img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")"; 
      img.style.display = '';  } else { 
  
      } 
    
    }; 
    
    jQuery(this).change(function(){ 
      previewImage();
     }); 
    
    }; 
    
    jQuery(document).ready(function(){
       var opt = { 
         img: jQuery('#img_preview'), 
         w: 200, h: 200 
     };
         
    jQuery('#input_file').setPreview(opt); 
        
  });
  */
  
  
  
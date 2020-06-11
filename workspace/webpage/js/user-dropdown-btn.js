
jQuery('select.dropdown').each(function() {  

    var dropdown = jQuery('<div />').addClass('dropdown selectDropdown'); //새로운 div태그에 dropdown과 selectDropdown을 클래스로 적용시킨다.

    jQuery(this).wrap(dropdown); //dropdown클래스를 가진 select엘리먼트를 생성한 div로 감싼다.

    var user = jQuery('<span />'); //임시로 UserID란 계정이 있다고 가정하고 출력
    user.append('<i class="fas fa-user-circle" aria-hidden="true"></i>');   //계정 옆에 fontAwesome usericon출력
    user.append('UserID').insertAfter(jQuery(this));
  

    var list = jQuery('<ul />');     //ul태그를 만든다.
    jQuery(this).find('option').each(function(e) {        //select엘리먼트의 자식들 중에 option엘리먼트를 찾아서 각 엘리먼트들에 대해서
        var value = jQuery(this).attr('value');      //옵션 태그의 name 
        var text = jQuery(this).text();          //옵션 태그의 text */
        var div = jQuery('<div />').attr('value',value).text(text);        //div블럭을 생성하고 name속성값과 text를 셋팅한다.

        list.append(jQuery('<li />').append(div));    
    });
  
    list.find('div').click(function(){      //div에 클릭 리스너를 단다.
         alert(jQuery(this).text());           
    });

    list.insertAfter(jQuery(this));                  //select엘리먼트 뒤에 리스트를 붙인다. 

});


jQuery('.dropdown > span').on('click touch', function(e) {       //선택한것을 출력해주는 창에 클릭 이벤트리스너
    var self = jQuery(this).parent();        //출력창을 변수로 설정
    self.toggleClass('open');       //출력창의 클래스에 open클래스를 껏다 켰다. 
});

jQuery(document).on('click touch', function(e) {     //다큐먼트에 클릭리스너
    var dropdown = jQuery('.dropdown');      //전체 div 변수
    if(dropdown !== e.target && !dropdown.has(e.target).length) {   //클릭한것이 div가 아니고 div에서 선택한 부분에 아무 요소가 없을 때
        dropdown.removeClass('open');   //창을 닫는다.
    }
});


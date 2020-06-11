function searchToggle(obj, evt){
    var container = jQuery(obj).closest('.search-wrapper');
    var searchDropdown = jQuery(document).find('.search-dropdown');
    //펼쳐진 상태가 아니라면 
    if(!container.hasClass('active')){
        container.addClass('active');
        searchDropdown.removeClass('hide');
        evt.preventDefault();
    }
    //펼쳐진 상태라면
    else if(container.hasClass('active') && jQuery(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        searchDropdown.addClass('hide');
        // clear input
        container.find('.search-input').val('');
    }
}

var dropdownMenu = jQuery(document).find('.dropdown-menu');
var dropdownItem = dropdownMenu.find('.dropdown-item');

/* 수정 */
jQuery(document).on('click touch', '.dropdown-menu .dropdown-item', function(e) {  //document에서 리스트의 요소를 클릭이나 touch를 할때  발생
    e.preventDefault();                             //이벤트의 기본이벤트 값을 실행한다
    var dropdownButton = jQuery(document).find('.search-dropdown').children('.dropdown-toggle');     
    dropdownButton.text(jQuery(this).text());
    var paddingLeft = dropdownButton.width()+40;
    jQuery(document).find('.search-input').css("padding-left",paddingLeft+"px");
});
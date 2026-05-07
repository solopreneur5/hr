jQuery( document ).ready(function() {
	if(jQuery('.menu-item-readmore').length){
		jQuery('.menu-item-readmore').click(function(){
			jQuery(this).parent('.menu-term-jobs').children('li.menu-item-hide').removeClass('menu-item-hide');
			jQuery(this).remove();
		});
	}
	
	document.addEventListener( 'wpcf7mailsent', function( event ) {
  
  if ( '701' == event.detail.contactFormId ) 
  {
    
	var aHtml = 'Tin tuyển dụng của bạn đã được đăng thành công. Chúng tôi sẽ duyệt tin của bạn trong thời gian sớm nhất. Xin cảm ơn.';
	
	jQuery.magnificPopup.open({
    removalDelay: 300,
    autoFocusLast: !1,
    closeMarkup: flatsomeVars.lightbox.close_markup,
    closeBtnInside: true,
    items: {
        src: '<div id="isures_notice_popup" class="lightbox-content lightbox-white">' + aHtml + '<a href="javascript:void(jQuery.magnificPopup.close());" class="isures-close--lightbox">Đóng</a></div>',
        type: "inline"
    },
		

  callbacks: {
    open: function() {
			  jQuery('#isures_notice_popup .isures-close--lightbox').click(function(){
		 
		  jQuery.magnificPopup.close();
	  });
	},
    close: function() {}
  }});
  }
}, false );
});
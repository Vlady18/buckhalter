$(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: false,
		slidesToScroll: 1
});
	$('.remove-top').click(function(event){
		event.preventDefault()
	})
	$('.remove-top').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

	$('.hd-nav').click(function(event){
  event.preventDefault();
  $('.desc-pc').toggleClass('dbbl');
  $('#overlay').toggleClass('dbbl');
  $('ul.submenu').removeClass('dbbl');
  $('nav').toggleClass('dbbl');
  $('body').toggleClass('ovrlhdn');
  $('.of_wrap').toggleClass('ovrlhdn');
   $('html').toggleClass('ovrlhdn');
 
  });
	$('#overlay').click(function(event){
    event.preventDefault();
    $('ul.submenu').removeClass('dbbl')
    $('.desc-pc').toggleClass('dbbl');
  	$('nav').toggleClass('dbbl');
  	$(this).toggleClass('dbbl');
  	$('body').toggleClass('ovrlhdn');
  $('html').toggleClass('ovrlhdn');
  });
	

  

 // debugger;
// if(!($('nav ul li').hasClass('parent-li'))){


  $("nav ul li").on("click","a", function (event) {
    // debugger;
    //console.log($(this).parent())
    if($(this).hasClass('parent-li')){
      $(this).siblings('ul').toggleClass('dbbl');
    }else{
      if($('body').width() <= 940){
      $('nav').toggleClass('dbbl');
      $('#overlay').toggleClass('dbbl');
      $('.desc-pc').toggleClass('dbbl');
      $('body').toggleClass('ovrlhdn');
      $('html').toggleClass('ovrlhdn');
    }

    if($('#overlay').hasClass('dbbl')){
      // event.preventDefault();
      $('nav').toggleClass('dbbl');
      $('#overlay').toggleClass('dbbl');
      $('.desc-pc').toggleClass('dbbl');
      $('body').toggleClass('ovrlhdn');
      $('html').toggleClass('ovrlhdn');
      }   
    }
    // if(!($('nav ul li').children('ul').length > 0)) {
    // //отменяем стандартную обработку нажатия по ссылке
    // event.preventDefault();
    // //забираем идентификатор бока с атрибута href
    // // var id  = $(this).attr('href'),

    // //узнаем высоту от начала страницы до блока на который ссылается якорь
    //   // top = $(id).offset().top;
    
      // console.log('Without parrent')
    //анимируем переход на расстояние - top за 1500 мс
    // $('body,html').animate({scrollTop: top}, 1500);
// }


  });

 
})

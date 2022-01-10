$(function(){

  /* wow
  ------------------------------------------------- */
  new WOW().init();
  
  
  /* nav
  ------------------------------------------------- */
  let icon = $('.nav-icon');
  let link = $('.nav').find('a');
  
  icon.on('click', function() {
    $('body').css('overflow-y', 'hidden');
    $('body').toggleClass('_open');
  });
  link.on('click', function() {
    if ($('body').hasClass('_open')) {
      $('body').toggleClass('_open');
      $('body').css('overflow-y','auto');
    }
  });
  
  
  /* カスタムプロパティ
  ------------------------------------------------- */
  let height = window.innerHeight;
  document.documentElement.style.setProperty( '--vh', height/100 + 'px');
  
  
  /* スムーススクロール
  ------------------------------------------------- */
  $('a[href^="#"]').click(function() {
  let speed = 500;
  let id = $(this).attr("href");
  let target = $("#" == id ? "html" : id);
  let position = $(target).offset().top;
  $("html, body").animate(
      {
      scrollTop: position
      },
      speed
  );
  return false;
  });

    /* ヘッダー
  ------------------------------------------------- */
  let mv = $(".mv").innerHeight();
  
  $(function() {
    var $win = $(window),
        $header = $('.header');
  
    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ($(this).scrollTop() >= mv) {
        $header.addClass('_show');
      } else {
        $header.removeClass('_show');
      }
    });
  });
  

    /* モダール
  ------------------------------------------------- */
  $('#js-modal-open').click(function(e) {
    e.preventDefault();
    let target = $(this).data("target");
    $('.' + target).addClass('_show');
  
    return false;
  });
  
  $('.modal-close').click(function(e) {
    e.preventDefault();
    let target = $(this).data("target");
    $('.' + target).removeClass('_show');
  
    return false;
  });


/* コンタクト　placeholder
------------------------------------------------ */
$(function(){
  $('select').on('change', function(){
      if($(this).val() == "placeholder"){
          $(this).css('color','#EFE4E1')
      } else {
          $(this).css('color','#555')
      }
  });
});
      
  
  });
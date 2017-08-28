$(document).ready(function() {

  // Слайдер га главной странице
  $('.js-index-slider').bxSlider({
    pagerCustom: '.js-index-slider_pager',
    controls: false
  });

  // Слайдер продукта
  $('.product-item__slider').bxSlider({
    pagerCustom: '.product-item__colors',
    controls: false,
    minSlides: 1
  });

  $('.js-product-view-slider').bxSlider({
    pagerCustom: '.js-product-view-pager',
    controls: false,
    minSlides: 1
  });

  $('.sizes-list li').click(function() {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });

  $('.choose-size__list li').click(function() {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });

  //Load more button
  $(function(){
    $(".none").slice(0,4).show();
    $("#loadMore").on('click', function(e){
      e.preventDefault();
      $(".none:hidden").slice(0,4).slideDown();
      })
    })

});

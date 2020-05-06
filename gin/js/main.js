
(function ($) {
  $('.js-recommend-toggler').click(function (e) { 
    e.preventDefault();
    $('.recommend-details').toggleClass('is-open');
  });
  $('.js-addition-toggler').click(function (e) { 
    e.preventDefault();
    $('.addition-section').toggleClass('is-open');
  });
  $('.js-drug-toggler').click(function (e) { 
    e.preventDefault();
    $('.drug-details').toggleClass('is-open');
  });
})(jQuery);


/**
 * Accordion
 */
(function ($) {
  var $ = window.$;
  var duration = 300;

  $.fn.accordionShow = function () {
    var
      block = this,
      content = block.find('.js-accordion-content')
      siblings = block.siblings('.js-accordion.is-active');
  
    content.slideDown(duration);
    block.addClass('is-active');
    siblings.find('.js-accordion-button').removeClass('is-active');
    siblings.find('.js-accordion-content').slideUp(duration);
  };
  
  // Close accordion content
  $.fn.accordionHide = function () {
    var
      block = this,
      content = block.find('.js-accordion-content');
  
    content.slideUp(duration);
    block.removeClass('is-active');
  };
  
  // Accordion button's actions
  $(document).on('click', '.js-accordion-button', function (e) {
    e.preventDefault();

    var
      block = $(this).parents('.js-accordion'),
      isActive = block.hasClass('is-active');

    isActive ? block.accordionHide() : block.accordionShow();
  });
})(jQuery);


/**
 * Equal height for items in flex column
 */
(function ($) {

  // preload object array to gain performance
  var $items = $('.graph-y-axis__item');
  var $items1 = $('.graph-top .graph-y-axis__item');
  var $items2 = $('.graph-mid .graph-y-axis__item');
  var $items3 = $('.graph-bottom .graph-y-axis__item');
  
  // run at resize
  $( window ).resize(function() {
    $.fn.setHeight(0);   
  });  

  $.fn.setHeight = function(height) {

    // reset to auto or else we can't check height
    $($items).css({ 'height': 'auto' });
    height1 = height;
    height2 = height;
    height3 = height;
    // get highest value
    $($items1).each(function(i, obj) {  
      height1 = Math.max(height1, $(this).outerHeight()) 
    });
    $($items2).each(function(i, obj) {    
      height2 = Math.max(height2, $(this).outerHeight()) 
    });
    $($items3).each(function(i, obj) {    
      height3 = Math.max(height3, $(this).outerHeight()) 
    });

    // set the height
    $($items1).css({ 'height': height1 + 'px' });    
    $($items2).css({ 'height': height2 + 'px' });    
    $($items3).css({ 'height': height3 + 'px' });    
  }

  // run at load
  $.fn.setHeight(0);
  
}(jQuery));
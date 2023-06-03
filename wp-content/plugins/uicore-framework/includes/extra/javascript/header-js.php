<?php
defined('ABSPATH') || exit();
//INCLUDED IN CLASS JS
if($settings['menu_interaction'] === 'focus'){
  $js .= "
  document.body.classList.add('uicore-menu-focus');
  ";
}elseif($settings['menu_interaction'] === 'text flip'){
    $js .= "
    jQuery('.uicore-menu li').on('mouseenter',function(e) {
        var animClass = 'ui-anim-flip';
        if(!jQuery(this).hasClass(animClass)){
          
          var btnContent = jQuery(this).children('a').find('.ui-menu-item-wrapper')
          btnContent.after(btnContent.clone())
          jQuery(this).children('a').find('.ui-menu-item-wrapper').wrapAll('<div class=\"ui-flip-anim-wrapp\"></div>');
          setTimeout(() => {
            this.classList.add(animClass)
          }, 10)
        }
      })
    ";
}
if($settings['submenu_trigger'] === 'click'){
  $js .= "
  jQuery('.uicore-navbar nav .menu-item-has-children').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const sub = jQuery(this).children('.sub-menu');
    
      // Hide other open sub-menus
    const siblings = sub.parent().siblings();
    siblings.children('.sub-menu').attr('style', 'display: none;');
    siblings.find('.sub-menu').attr('style', 'display: none;');
    if (sub.is(':hidden')) {
      sub.attr('style', 'display: flex !important; opacity: 1 !important; transform: none !important; pointer-events: all !important;');
    } else {
      sub.attr('style', 'display: none;');
    }
  });
  
  jQuery(document).on('click', function(e) {
    const clickedElement = e.target;
    
    if (!jQuery(clickedElement).closest('.sub-menu').length) {
      jQuery('.sub-menu').attr('style', 'display: none;');
    }
  });  
  ";
}
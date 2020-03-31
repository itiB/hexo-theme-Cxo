let sidebar = function () {
  var $container = $('#mobile-nav'),

  isMobileNavAnim = false,
  mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;
    startMobileNavAnim();
    $container.toggleClass('mobile-nav-off');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-off')) return;
    $container.removeClass('mobile-nav-off');
  });
}

export default sidebar
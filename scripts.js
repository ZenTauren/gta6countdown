$(document).ready(function() {
  
    $('#toggleTweet').click(function() {
      twitterWrapper.css('left', twitterWrapper.css('left') === '0px' ? '-100%' : '0px');
    });

    $('#toggleChat').click(function() {
      chatroomWrapper.css('right', chatroomWrapper.css('right') === '0px' ? '-100%' : '0px');
    });

    if ($(window).height() <= 900 && !popupDisplayed) {
      popup.show();
      popupDisplayed = true;

      $('#progress-bar').remove();
      popup.append($('<div id="progress-bar"></div>'));

      setTimeout(function() {
        popup.hide();
        popupDisplayed = false;
      }, 5000);
    } else if ($(window).height() > 900) {
      popup.hide();
      popupDisplayed = false;
    }

    $("#dismiss").click(function() {
      $("#popup").hide();
      popupDisplayed = false;
    });
});

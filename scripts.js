$(document).ready(function() {
  
    $('#toggleTweet').click(function() {
      twitterWrapper.css('left', twitterWrapper.css('left') === '0px' ? '-100%' : '0px');
    });

    $('#toggleChat').click(function() {
      chatroomWrapper.css('right', chatroomWrapper.css('right') === '0px' ? '-100%' : '0px');
    });
});

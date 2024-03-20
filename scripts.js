$(document).ready(function() {
    var faviconURL = "favicon.ico";
    var bannerLink = "https://github.com/ZenTauren/gta6countdown/raw/main/images/GTAVI.png";
    var twitterLink = "https://twitter.com/RockstarGames?ref_src=twsrc%5Etfw";
    var youtubeVideoLink = "https://www.youtube.com/embed/pUotKi9N7bc?autoplay=1&controls=0&fs=0&loop=1&modestbranding=1&color=white&iv_load_policy=3";
    var chatroomURL = "https://kiwiirc.hybridirc.com/#GTAVIWaitingRoom";

    $("link[rel='icon']").attr("href", faviconURL);
    $("#bannerLink").attr("href", bannerLink).children("img").attr("src", bannerLink);
    $("a.twitter-timeline").attr("href", twitterLink);
    $("#youtubeVideo").attr("src", youtubeVideoLink);
    $("#chatroomIframe").attr("src", chatroomURL);

    var twitterWrapper = $('.twitter-wrapper');
    var chatroomWrapper = $('.countdown-chatroom');
    var popupDisplayed = false;
    var popup = $('#popup');
  
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

$(document).ready(function () {
	var twitterWrapper = $(".twitter-wrapper");
	var chatroomWrapper = $("#chatroomWrapper");
	var isAnimating = false; // this variable ensures animations don't overlap

	function toggleTwitter() {
		if (!isAnimating) {
			isAnimating = true;

			if (twitterWrapper.css("left") === "0px") {
				twitterWrapper.animate({ left: "-100%" }, 300, function () {
					isAnimating = false;
				});
			} else {
				twitterWrapper.animate({ left: "0px" }, 300, function () {
					isAnimating = false;
				});
			}
		}
	}

	function toggleChat() {
		if (!isAnimating) {
			isAnimating = true;

			if (chatroomWrapper.css("right") === "0px") {
				chatroomWrapper.animate({ right: "-100%" }, 300, function () {
					isAnimating = false;
				});
			} else {
				chatroomWrapper.animate({ right: "0px" }, 300, function () {
					isAnimating = false;
				});
			}
		}
	}

	$("#toggleTweet").click(toggleTwitter);
	$("#toggleChat").click(toggleChat);

	$(window)
		.resize(function () {
			var windowWidth = $(window).width();

			if (windowWidth < 1500) {
				if (twitterWrapper.css("left") === "0px") {
					toggleTwitter();
				}
				if (chatroomWrapper.css("right") === "0px") {
					toggleChat();
				}
			} else {
				if (twitterWrapper.css("left") !== "0px") {
					toggleTwitter();
				}
				if (chatroomWrapper.css("right") !== "0px") {
					toggleChat();
				}
			}
		})
		.resize();
});

$(window)
	.resize(function () {
		if ($(window).width() >= 1100) {
			if (!$(".iframe-youtube").hasClass("responsive-iframe")) {
				var width = $(".iframe-youtube").width();
				var height = width * 0.5625; // 16:9 ratio
				$(".iframe-youtube").css("height", height + "px");
			}
		} else {
			$(".iframe-youtube").css("width", "655px");
			$(".iframe-youtube").css("height", "370px");
		}
	})
	.resize();

$(document).ready(function () {
	$(".to_top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1500);
	});

	$(".menu a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
    $(".menu a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
            $(hash).addClass("active").siblings().removeClass("active");
			
		}
	});

	// Fixed Navbar
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if (scroll >= 200) {
			$("#navbar").addClass("fixed_navbar");
		} else {
			$("#navbar").removeClass("fixed_navbar");
		}

		if (scroll < 300) {
			$(".to_top").fadeOut();
		} else {
            $(".to_top").css({"visibility": "visible"});
			$(".to_top").fadeIn();
		}
	});

    // Preloader
    $(window).load(function(){
        $("#preloader").delay(2000).fadeOut(500);
    })
});

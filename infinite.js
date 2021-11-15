var rain = document.createElement("script");
rain.type = "text/javascript", rain.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", 
rain.async = !0, rain.onload = function() {
	! function(i) {
		if ($("body").append("<footer>IGLO Template by igniel.com</footer>"), config.infinite_scroll) {
			var e = i(".post-nav"),
				t = i(".blog-posts"),
				n = !1;
			e.find("#Blog1_blog-pager-newer-link").remove(), e.on("click", "#Blog1_blog-pager-older-link a", function() {
				return history.pushState("", "", this.href), i.get(this.href, {}, function(l) {
					var o = i(l).find(".post-outer").length ? i(l) : i("<div></div>");
					t.append(o.find(".blog-posts").html()), e.html(o.find("#Blog1_blog-pager-older-link").clone()), t.find(".more-article columns column-2").append(o.find(".more-article columns column-2 article").clone()), window.location.href.match("/search\\?updated-max") || (document.title = o.find(".article-header").first().text(), t.append('<div class="ignielMiddleAds">' + o.find(".ignielMiddleAds").html() + "</div>"), ignielMiddleAds()), n = !1
				}, "html"), i(this).replaceWith('<span><img src="https://4.bp.blogspot.com/-a8y2WkWKzU0/W90DTo4X29I/AAAAAAAAG2c/5FWxJt9VaYUM7Mz-bH0emW3A50lJxCltQCLcBGAs/s1600/igniel-loading.gif"/></span>'), !1
			}), config.auto && $(window).on("scroll resize", function() {
				!n && $(this).scrollTop() + $(this).height() >= e.offset().top && (e.find("#Blog1_blog-pager-older-link a").trigger("click"), n = !0)
			})
		}
	}(jQuery)
}, document.getElementsByTagName("head")[0].appendChild(rain);

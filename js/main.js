"use strict";

(function($) {

    ///////////////////////////
    // Btn nav collapse
    $("#nav .navbar__collapse").click(function () {
        $("#nav").toggleClass("open");
    });

    ///////////////////////////
    // Mmen basket
    Mmenu.configs.offCanvas.page.selector = "#page";

	document.addEventListener(
		"DOMContentLoaded", () => {
			const menu = new Mmenu( "#shop-basket", {
				"offCanvas": true,
				"extensions": ["position-right"],
				"navbar": {
					title: 'Ваш заказ'
				},
			});
		}
	);
})(jQuery);
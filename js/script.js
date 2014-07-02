$(document).ready(function () {
    if ($(window).width() >= 845) {
        // load justified gallery
        $("#body").justifiedGallery();

        $('#reset').click(function () {
            reset();
        });

        $("nav a[href^='#']").click(function () {
            reset();
            if ($(this).attr('href').replace('#', '') != 'home') {
                var category = ['land', 'arch', 'urban'];
                var toRemove = $(this).attr('href').replace('#', '');
                category.splice($.inArray(toRemove, category), 1);
                jQuery.each(category, function (i, val) {
                    $('.' + val + '').animate({
                        opacity: "0.1"
                    }, 500);
                });
            }
        });

        function reset() {
            $('#body div').animate({
                opacity: "1"
            }, 500);
        }
    } else {
        $("#body").justifiedGallery();
        $('nav ul').hide();
        
        $('#mobileMenu').on('touchstart click', function (e) {
            if ($('nav ul').is(':visible')) {
                $('nav ul').slideUp(500);
            } else {
                $('nav ul').slideDown(500);
            }
        });
    }
});
jQuery(function ($) {

    $(".has-desc").click(function () {
        $(this).children(".work-list__desc").slideToggle();
    })
});

$("#hamb").click(function () {
    $("#menu").toggle();
});

$(window).resize(function () {
    if ($(document).innerWidth() > 600) {
        $("#hamb").hide();
        $("#menu").show();
    }
    else {
        $("#menu").hide();
        $("#hamb").show();
    }
});
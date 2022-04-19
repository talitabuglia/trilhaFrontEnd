$(document).ready(function () {
    $("#hamburguer").click(function () {
       $("#list").toggle();
       
    });
});

$(window).resize(function () {
    if ($(document).innerWidth() < 600) {
        $(".container2").hide();
   
    }
});

/* } else {
    ($(document).innerWidth() > 600) 
            $(".container2").show(); */
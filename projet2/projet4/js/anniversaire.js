function init() {
    $(".titrecontenu").css("visibility", "hidden");
    $("#boutons").css("display","none");
}

init()

function hideAll() {
    $(".titrecontenu").css("visibility", "hidden");
    $(".titre").css("visibility", "hidden");
}

$(".titre").on("click", function () {
    $(".premier-click").remove();
    $(".titrecontenu:eq(0)").css("visibility", "visible");
});

$(".titrecontenu:eq(0)").on("click", function () {
    $(".deuxieme-click").remove();
    $(".titrecontenu:eq(1)").css("visibility", "visible");
});

$(".titrecontenu:eq(1)").on("click", function () {
    $(".troisieme-click").remove();
    $(".titrecontenu:eq(2)").css("visibility", "visible");
    
});

$(".titrecontenu:eq(2)").on("click", function () {
    hideAll();
    $(".container").css("background", 'url("images/scrabble.jpg")');
    $("#son")[0].play();
    $("#boutons").css("display","initial");
});

$("#pause-audio").on("click", function() {
    $("#son")[0].pause();
})

$("#play-audio").on("click", function() {
    $("#son")[0].play();
})

$(document).ready(function(){
    $(".ringo").click(function(){
        $(this).toggle();
        $(".tensei").toggle();
    });

    $(".mikunoeyes").click(function(){
        $(this).toggle();
        $(".mikueyes").toggle();
    });

    $(".box1").click(function(){
        $(".box2,.box3,.box4,.box5").toggle();
        $(".ninatext").toggle();
    });

    $(".ringo").click(function(){
        $(".trtext").toggle();
    });

    $(".aimaina_peek").click(function(){
        $(".biotextjp").toggle();
    });
});
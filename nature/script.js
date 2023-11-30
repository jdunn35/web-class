$(document).ready(function(){
    // leaves
    // hide the leaves when clicked
    $(".green-leaf,.pink-leaf,.yellow-leaf").click(function() {
        $(this).hide();
    });

    // show the leaves when reset is clicked
    $(".reset").click(function(){
        $(".green-leaf,.pink-leaf,.yellow-leaf").show();
    });

    // show purple-leaf2 when purple-leaf is clicked, fadeIn can be fast/normal/slow (in quotes) or in milliseconds (no quotes) 
    $(".purple-leaf").click(function(){
        $(".purple-leaf2").fadeIn(2000);
    });

    // fadeOut when you hover over purple-leaf, fadeIn when you stop hovering
    $(".purple-leaf").mouseenter(function(){
        $(".yellow-leaf,.pink-leaf,.green-leaf").fadeOut("slow");
    }) .mouseleave(function(){
        $(".yellow-leaf,.pink-leaf,.green-leaf").fadeIn("fast");
    });

    // flowers
    // toggle serves as a combination of hide and show, click and the flowers go away and text appears, click and the flowers come back and text reappears
    // "this" refers to div1, front does not need a period, toggleClass adds the class "front" to div1 making the tulip transparent and have a high z-index
    $(".div1").click(function(){
        $(".div2,.div3,.div4").toggle();
        $(".div1-text").toggle();
        $(this).toggleClass("front")
    });

    //using fadeToggle instead of just toggle
    $(".div2").click(function(){
        $(".div1,.div3,.div4").fadeToggle("slow");
        $(".div2-text").fadeToggle("slow");
        $(this).toggleClass("front","slow")
    });

    // same thing as div1 but for other flowers
    $(".div3").click(function(){
        $(".div1,.div2,.div4").toggle();
        $(".div3-text").toggle();
        $(this).toggleClass("front")
    });

    $(".div4").click(function(){
        $(".div1,.div2,.div3").toggle();
        $(".div4-text").toggle();
        $(this).toggleClass("front")
    });

    // trees
    $("h4").click(function(){
        $(this).next(".tree-text").slideToggle();
    });

    // navigation
    $(".link").click(function(){
        // toggles the link
        $(this).addClass("highlight");
        $(this).siblings().removeClass("highlight");

        // toggles the section area
        $($(this).attr("href")).addClass("active").siblings().removeClass("active");
    });
});
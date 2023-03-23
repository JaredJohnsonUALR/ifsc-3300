"use strict";
$(document).ready(() => {
    // set event handler for all h2 tags
    $("#categories h2").click( evt => {
        // get clicked h2 tag
        const h2 = evt.currentTarget;

        // toggle minus class for h2 tag
        $(h2).toggleClass("minus");

        // show or hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
           $(h2).next().show();
        }

        //hide book image when clicking on another h2 tag
        $("#image").attr("src", "");
    });

    // process each img tag
    $("#categories a").each( (index, img) => {
        var imageLink = $(img).attr("href");

        // preload image		
        var bookImg = new Image();
        bookImg.src = imageLink;
        
        //click event for links
        $(img).click( evt =>
        {
            //sets id image to the imageLink (image is an aside in index.html)
            $("#image").attr("src", imageLink);
            //prevents link default action
            evt.preventDefault();
        });
    });
    // set focus on first h2 tag's <a> tag
    $("#categories").find("a:first").focus();
});
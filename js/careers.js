"use strict";
$(document).ready(function () {
    $(".career_main h2").animate(
        { fontSize: "275%", opacity: 1, left: "+=175" },
        2000);

    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

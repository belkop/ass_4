$(document).ready(function() {



    $("#button-1").click(function() {
        $("#sectionOnetext1").slideToggle("slow");
        $("#button-hide1").click(function() {
            $("#sectionOnetext1").hide("fast");
        });

    });

    $("#button-2").click(function() {
        $("#sectionOnetext2").slideToggle("slow");
        $("#button-hide2").click(function() {
            $("#sectionOnetext2").hide("fast");
        });
    });

    $("#button-3").click(function() {
        $("#sectionOnetext3").slideToggle("slow");
      	$("#button-hide3").click(function() {
            $("#sectionOnetext3").hide("fast");
        });  
    });


});
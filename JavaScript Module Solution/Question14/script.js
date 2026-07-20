$(document).ready(function () {
    $("#registerBtn").click(function () {
        alert("Registration Successful!");
    });    
    $("#hideBtn").click(function () {
        $("#eventCard").fadeOut(1000);
    });

    $("#showBtn").click(function () {
        $("#eventCard").fadeIn(1000);
    });

});
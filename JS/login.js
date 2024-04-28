$(document).ready(function () {
    var user = "user01";
    var pass = "1234";
    $('#login-btn').click(function () {
        console.log("entra")
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === user && password === pass) {
            window.location.href = "./HTML/dashboard.html"; // Redireccionar al dashboard si las credenciales son correctas
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
        }
    });

    $('#miportalu').click(function(){
        window.location.href = "";
    });

    $('#cosmos').click(function(){
        window.open("https://cosmos.unab.edu.co/");
    });

    $('#tema').click(function(){
        window.open("https://tema.unab.edu.co/my/courses.php");
    });

    $('#biblioteca').click(function(){
        window.open("https://catalogo.unab.edu.co/");
    });

    $('#bienestar').click(function(){
        window.open("https://bienestar.unab.edu.co/");
    });

    $('#unab').click(function(){
        window.open("https://unab.edu.co/");
    });

    $('#unabvirtual').click(function(){
        window.open("https://unabvirtual.unab.edu.co/");
    });

    $('#impulsa').click(function(){
        window.open("https://unab.edu.co/impulsa/");
    });

    $('#facebook').click(function(){
        window.open("https://www.facebook.com/unab.online");
    });

    $('#twitter').click(function(){
        window.open("https://twitter.com/unab_online");
    });

    $('#instagram').click(function(){
        window.open("https://www.instagram.com/unab_online/");
    });

    $('#youtube').click(function(){
        window.open("https://www.youtube.com/channel/UCPDX2zfB6gw-UFvWv8B0Zzg");
    });

    $('#linkedin').click(function(){
        window.open("https://www.linkedin.com/school/universidad-autonoma-de-bucaramanga/");
    });
});

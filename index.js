$(document).ready(function() {

    $(".menu").click(function() {
        $("ul").toggleClass("active")
    })

});

$(function($) {

    $("form").submit(function(event) {

        event.preventDefault();

        $.ajax({
            url: "https://formspree.io/mgeneagd",
            method: "POST",
            data: {
                name: $("#nome").val(),
                email: $("#email").val(),
                message: $("#message").val()
            },
            dataType: "json"
        }).done(function() {
            $("#nome").val(""),
                $("#email").val(""),
                $("#message").val(""),
                alert("Email foi enviado com sucesso");
        }).fail(function() {
            alert("Erro ao enviar o email");
        })
    });
});
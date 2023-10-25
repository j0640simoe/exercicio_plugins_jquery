$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#identidade').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            telefone: {
                required: true
            },
            identidade: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});



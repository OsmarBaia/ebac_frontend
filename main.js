$(document).ready(function () {
    // Limpar dados do Formulário
    $('#clienteNome').val('');
    $('#clienteSobreNome').val('');
    $('#clienteCPF').val('');
    $('#clienteEmail').val('');
    $('#clienteTelefone').val('');
    $('#clienteCEP').val('');
    $('#clienteLogradouro').val('');
    $('#clienteComplemento').val('');
    $('#clienteBairro').val('');
    $('#clienteLocalidade').val('');
    $('#clienteUF').val('');

    // Adicionando Mascaras
    $('#clienteCPF').mask('000.000.000-09', { reverse: true });
    $('#clienteTelefone').mask('(00) 0000-0009');
    $('#clienteCEP').mask('00000-009');

    // Validação de Campos
    $('#form-registro').validate({
        rules: {
            clienteNome: {
                required: true
            },
            clienteTelefone: {
                required: true,
                minlength: 10,
                maxlength: 14,
            },
            clienteCPF: {
                required: true,
                minlength: 11,
                maxlength: 14,
            },
            clienteEmail: {
                required: true,
                email: true
            },
            clienteCEP: {
                required: true,
                minlength: 8,
                maxlength: 9,
            },
            clienteLogradouro: {
                required: true
            },
            clienteBairro: {
                required: true
            },
            clienteLocalidade: {
                required: true
            },
            clienteUF: {
                required: true
            },
        },
        messages: {
            clienteNome: {
                required: "*Campo obrigatório",
            },
            clienteCPF: {
                required: "*Campo obrigatório",
                minlength: "*Tamanho inválido!",
                maxlength: "*Tamanho inválido!",
                digits: "*Apenas numeros!"
            },
            clienteTelefone: {
                required: "*Campo Obrigatório",
                maxlength: "*Tamanho inválido!",
                minlength: "*Tamanho inválido!",
                digits: "*Apenas numeros!"
            },
            clienteEmail: {
                required: "*Campo Obrigatório",
                email: "*Formato invalido"
            },
            clienteCEP: {
                required: "*Campo obrigatório!",
                minlength: "*Tamanho inválido!",
                maxlength: "*Tamanho inválido!",
                digits: "*Apenas numeros!"
            },
            clienteLogradouro: {
                required: "*Campo obrigatório!"
            },
            clienteBairro: {
                required: "*Campo obrigatório!"
            },
            clienteLocalidade: {
                required: "*Campo obrigatório!"
            },
            clienteUF: {
                required: "*Campo obrigatório!"
            }
        },
        // Mesagem de erro customizada
        errorPlacement: function (label, element) {
            if (element[0].id === 'clienteCEP') {
                label.addClass('absolute top-8 left-0 text-xs font-light text-red-500');
            } else {
                label.addClass('absolute top-12 left-2 text-xs font-light text-red-500');
            }
            label.insertAfter(element);
        },

        submitHandler: function (form) {
            form.submit(function () {
                return true;
            });
        }
    });

    // TODO: Validar Email

    // Busca endereço com base no CEP
    function pesquisarCep(cep) {
        $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function (data) {
            if (data.erro) {
                // CEP não for encontrado                
            } else {
                // Preencher campos com os dados do endereço
                $('#clienteLogradouro').val(data.logradouro);
                $('#clienteBairro').val(data.bairro);
                $('#clienteLocalidade').val(data.localidade);
                $('#clienteUF').val(data.uf);
            }
        });
    }

    // Busca e preenchimento de endereço por CEP
    $('#clienteCEP').blur(function () {
        let cep = $(this).cleanVal();
        if (cep.length === 8) {
            pesquisarCep(cep);
        }
    });

    //Limpando Mascaras no Submit
    $('#submit-button').on('click', function () {
        $('#clienteCPF').unmask();
        $('#clienteTelefone').unmask();
        $('#clienteCEP').unmask();
    });
});
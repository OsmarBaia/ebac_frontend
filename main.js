$(document).ready(function () {
    // Limpar dados do Formulário
    function makeContactEmpty() {
        $('#clienteNome').val('');
        $('#clienteSobrenome').val('');
        $('#clienteEmail').val('');
        $('#clienteTelefone').val('');
    }
    function makeAddressEmpty() {
        $('#clienteLogradouro').val('');
        $('#clienteComplemento').val('');
        $('#clienteBairro').val('');
        $('#clienteLocalidade').val('');
        $('#clienteUF').val('');
    }

    makeContactEmpty();
    makeAddressEmpty();

    //  Validação de Campos
    $('#form-registro').validate({
        rules: {
            clienteNome: {
                required: true
            },
            clienteTelefone: {
                required: true
            },
            clienteEmail: {
                required: true,
                email: true
            },
            clienteCEP: {
                required: true,
                minlength: 8,
                maxlength: 8,
                cepBR: true,
            },
            clienteLogradouro: {
                required: true
            },
            clienteComplemento: {
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
            clienteNome: {
                required: "* Campo Obrigatório",
            },
            clienteTelefone: {
                required: "* Campo Obrigatório"
            },
            clienteEmail: {
                required: "* Campo Obrigatório",
                email: "* Formato invalido"
            },
            clienteCEP: {
                required: "*Campo obrigatório!",
                cepBR: "*CEP inválido!"
            },
            clienteLogradouro: {
                required: "*Campo obrigatório!"
            },
            clienteComplemento: {
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

        errorPlacement: function (label, element) {
            if (element[0].id === 'clienteCEP') {
                label.addClass('absolute top-8 left-0 text-xs font-light text-red-500');
            } else {
                label.addClass('absolute top-12 left-2 text-xs font-light text-red-500');
            }
            console.log(element);
            console.log(element.id);

            label.insertAfter(element);
        },

        submitHandler: function (form) {
            // Enviar formulário
            $(form).submit();
        }
    });

    // Mascara Telefone
    $('#clienteTelefone').blur(function () {
        const tel = $(this).val();
        if (tel.length === 11) {
            $('#clienteTelefone').mask('(00) 0-0000-0000');
        } else {
            $('#clienteTelefone').mask('(00) 0000-0000');
        }
    });

    // Busca endereço com base no CEP
    function pesquisarCep(cep) {
        $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function (data) {
            if (data.erro) {
                // CEP não for encontrado
                alert("\n CEP não encontrado. \n Por favor insira manualmente. \n");
                makeAddressEmpty();
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
    // Mascara CEP
    $('#clienteCEP').blur(function () {
        const cep = $(this).val();
        if (cep.length === 8) {
            pesquisarCep(cep);
            $('#clienteCEP').mask('00000-000');
        } else if (cep.length === 0) {
            makeAddressEmpty();
        }
    });

});
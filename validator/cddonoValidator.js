const cddonoValidator = {

    nome: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message:'Este campo é obrigatorio!'
        },
        maxLength: {
            value: 50,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    NomedoseuPet: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message:'Este campo é obrigatorio!'
        },
        maxLength: {
            value: 50,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    cpf: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 14,
            message:'CPF não Validado!'
        },
        maxLength: {
            value: 14,
            message:'CPF não Validado!'
        },
    },

    rg: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 9,
            message:'RG não Validado!'
        },
        maxLength: {
            value: 9,
            message:'RG não Validado!'
        },
    },
    cep: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 9,
            message:'CEP não Correspondente'
        },
        maxLength: {
            value: 9,
            message:'CEP não Correspondente'
        },
    },
    telefone: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 14,
            message:'Numero de Telefone Não Existente'
        },
        maxLength: {
            value: 14,
            message:'Numero de Telefone Não Existente'
        },
    },
    email: {
        required: 'Este campo é obrigatorio!',
        maxLength: {
            value: 150,
            message:'Você passou a quantidade máxima para este campo'
        },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br)$/,
            message: 'digite um e-mail válido!',
        },
    },
    logradouro: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 10,
            message:'o minimo é 10'
        },
        maxLength: {
            value: 50,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    complemento: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 5,
            message:'o minimo é 5'
        },
        maxLength: {
            value: 100,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    numero: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 3,
            message:'Numero de Endereço Nâo Correspondente'
        },
        maxLength: {
            value: 3,
            message:'Numero de Endereço Nâo Correspondente'
        },
    },
    bairro: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 3,
            message:'Bairro de Endereço Não Correspondente'
        },
        maxLength: {
            value: 100,
            message:'Bairro de Endereço Não Correspondente'
        },
    },

}
export default cddonoValidator
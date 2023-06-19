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
        maxLength: {
            value: 2,
            message:'o minimo é 2'
        },
        minLength: {
            value: 1,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    duracao: {
        required: 'Este campo é obrigatorio!',
        maxLength: {
            value: 2,
            message:'o minimo é 2'
        },
        minLength: {
            value: 1,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    modalidade:  {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 3,
            message:'o minimo é 3'
        },
        maxLength: {
            value: 10,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    curso: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 5,
            message:'o minimo é 5'
        },
        maxLength: {
            value: 50,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    cpf: {
        required: 'Este campo é obrigatorio!, E o seu valor máximo é de 11 números.',
        pattern: '[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}',
        minLength: {
            value: 11,
            message:'o minimo é 11'
        },
        maxLength: {
            value: 11,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    rg: {
        required: 'Este campo é obrigatorio!, E o seu valor máximo é de 10 números.',
        minLength: {
            value: 10,
            message:'o minimo é 10'
        },
        maxLength: {
            value: 10,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    cep: {
        required: 'Este campo é obrigatorio!, E o seu valor máximo é de 7 números.',
        minLength: {
            value: 7,
            message:'o minimo é 7'
        },
        maxLength: {
            value: 7,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    telefone: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 13,
            message:'o minimo é 13'
        },
        maxLength: {
            value: 20,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    email: {
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
            value: 1,
            message:'o minimo é 1'
        },
        maxLength: {
            value: 100,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    bairro: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 3,
            message:'o minimo é 3'
        },
        maxLength: {
            value: 100,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

}
export default cddonoValidator
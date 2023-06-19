const cdpmValidator = {

    dopro: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message: 'Este campo é obrigatorio!'
        },
        maxLength: {
            value: 50,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

    malde: {
        required: 'Este campo é obrigatorio!',
        maxLength: {
            value: 2,
            message: 'o minimo é 2'
        },
        minLength: {
            value: 1,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

    especie: {
        required: 'Este campo é obrigatorio!',
        maxLength: {
            value: 2,
            message: 'o minimo é 2'
        },
        minLength: {
            value: 1,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

    raca: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

    medicamen: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 5,
            message: 'o minimo é 5'
        },
        maxLength: {
            value: 50,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

    dosageme: {
        required: 'Este campo é obrigatorio!, E o seu valor máximo é de 11 números.',
        pattern: '[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}',
        minLength: {
            value: 11,
            message: 'o minimo é 11'
        },
        maxLength: {
            value: 11,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

    numer: {
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
    
    endere: {
        required: 'Este campo é obrigatorio!, E o seu valor máximo é de 7 números.',
        minLength: {
            value: 7,
            message: 'o minimo é 7'
        },
        maxLength: {
            value: 7,
            message: 'Você passou a quantidade máxima para este campo'
        },
        
    },

    obser: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 400,
            message:''
        },
        maxLength: {
            value: 400,
            message: 'Você passou a quantidade máxima para este campo'
        },
    },

}
export default cdpmValidator
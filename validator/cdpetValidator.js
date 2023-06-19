const cdpetValidator = {
    NomedoPet: {
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
    
    Especie: {
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

    Raca: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 0,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 50,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    Datadenascimento: {
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

    Sexo: {
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

    Peso: {
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

    Tamanho: {
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

    Comportamento: {
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

    Infocontato: {
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
    

}

export default cdpetValidator
const quartosValidator = {
    
    quarto: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 0,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 200,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    tipo: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 0,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 200,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    
    capacidade: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 5,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    preço: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 11,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    descrição: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 300,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

}
export default quartosValidator
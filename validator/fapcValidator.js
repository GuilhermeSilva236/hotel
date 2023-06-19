const fapcValidator = {
    
    ade: {
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

    ddc: {
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
    
    nva: {
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

    aec: {
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

    aav: {
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

    aet: {
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

    cact: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 0,
            message:'Este campo nâo é obrigatorio!'
        },
        maxLength: {
            value: 400,
            message:'Você passou a quantidade máxima para este campo'
        },
    },


}
export default fapcValidator
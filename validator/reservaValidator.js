const reservaValidator = {

    checkin: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 10,
            message:'Este campo é obrigatorio!'
        },
        maxLength: {
            value: 10,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

    checkout: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 10,
            message:'Este campo é obrigatorio!'
        },
        maxLength: {
            value: 10,
            message:'Você passou a quantidade máxima para este campo'
        },
    },
    

    hospedes: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 1,
            message:'Numero de Telefone Não Existente'
        },
        maxLength: {
            value: 1,
            message:'Numero de Telefone Não Existente'
        },
    },

    pagamento: {
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
export default reservaValidator
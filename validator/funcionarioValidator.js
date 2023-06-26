const funcionarioValidator = {
    nomecp: {
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
    
    cargo: {
        required: 'Este campo é obrigatorio!',
     
    },

    emailcp: {
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

    telefone: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 15,
            message:'Numero de Telefone Não Existente'
        },
        maxLength: {
            value: 15,
            message:'Numero de Telefone Não Existente'
        },
    },

    acesso: {
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

export default funcionarioValidator
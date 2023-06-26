const hospedagemValidator = {

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

    senha: {
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

    nascimento: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 10,
            message:'Data de nascimento não Validado!'
        },
        maxLength: {
            value: 10,
            message:'Data de nascimento não Validado!'
        },
    },

    numero: {
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
   

}
export default hospedagemValidator
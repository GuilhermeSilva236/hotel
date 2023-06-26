const servicosValidator = {

    servico: {
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

    funcionamento: {
        required: 'Este campo é obrigatorio!',
    },

    telefone: {
        required: 'Este campo é obrigatorio!',
        maxLength: {
            value: 15,
            message: 'o minimo é 2'
        },
        minLength: {
            value: 15,
            message: 'Você passou a quantidade máxima para este campo'
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
export default servicosValidator
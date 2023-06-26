const cargoValidator = {

    cargo: {
        required: 'Este campo é obrigatorio!',
        minLength: {
            value: 13,
            message:'Este campo é obrigatorio!'
        },
        maxLength: {
            value: 300,
            message:'Você passou a quantidade máxima para este campo'
        },
    },

}
export default cargoValidator
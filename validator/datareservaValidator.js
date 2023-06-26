const datareservaValidator = {
    datareserva: {
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
export default datareservaValidator
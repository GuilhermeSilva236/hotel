import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import quartosValidator from '@/validator/quartosValidator'
import { mask } from 'remask'


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(valor, mascara));
    }

    function salvar(dados) {
        const quartos = JSON.parse(window.localStorage.getItem('quartos')) || []
        quartos.push(dados)
        window.localStorage.setItem('quartos', JSON.stringify(quartos))
        push('/quartos')
    }

    return (
        <Pagina>
            <Form>

                <Form.Group className="mb-3" controlId='quarto'>
                    <Form.Label >Número do quarto: </Form.Label>
                    <Form.Control isInvalid={errors.quarto} type="text" {...register('quarto', quartosValidator.quarto)} />
                    {
                        errors.quarto &&
                        <p className='mt-1 text-danger'>{errors.quarto.message}</p>
                    }
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId='tipo'>
                    <Form.Label >Informações de tipo: </Form.Label>
                    <Form.Select isInvalid={errors.tipo} type="text" {...register('tipo', quartosValidator.tipo)}>
                        <option value=''>Escolha o tipo de quarto desejado</option>
                        <option value='individual'>individual</option>
                        <option value='duplo'>duplo</option>
                        <option value='suíte'>suíte</option>

                    </Form.Select>
                    {
                        errors.tipo &&
                        <p className='mt-1 text-danger'>{errors.tipo.message}</p>
                    }
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId='capacidade'>
                    <Form.Label >Informações de capacidade: </Form.Label>
                    <Form.Select isInvalid={errors.capacidade} type="text" {...register('capacidade', quartosValidator.capacidade)}>
                        <option value=''>escolha o capacidade do quarto desejado</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>

                    </Form.Select>
                    {
                        errors.capacidade &&
                        <p className='mt-1 text-danger'>{errors.capacidade.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='preço'>
                    <Form.Label >Preço por noite: </Form.Label>
                    <Form.Control 
                    mask='R$ 9.999,99'
                    maxLength={11}
                    isInvalid={errors.preço} 
                    type="text" 
                    {...register('preço', quartosValidator.preço)}
                    onChange={handleChange} />
                    {
                        errors.preço &&
                        <p className='mt-1 text-danger'>{errors.preço.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='descrição'>
                    <Form.Label >Descrição do quarto e comodidades: </Form.Label>
                    <Form.Control isInvalid={errors.descrição} type="text" {...register('descrição', quartosValidator.descrição)} />
                    {
                        errors.descrição &&
                        <p className='mt-1 text-danger'>{errors.descrição.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/quartos'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
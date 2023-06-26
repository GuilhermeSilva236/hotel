import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import hospedagemValidator from '@/validator/hospedagemValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function handleChange(event){ 
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(valor, mascara));
    }

    function salvar(dados) {
        const hospedagem = JSON.parse(window.localStorage.getItem('hospedagem')) || []
        hospedagem.push(dados)
        window.localStorage.setItem('hospedagem', JSON.stringify(hospedagem))
        push('/hospedagem')
    }



    

    return (
        <Pagina>
            <Form>
                
                <Form.Group className="mb-3" controlId='nomecp'>
                    <Form.Label >Nome completo: </Form.Label>
                    <Form.Control isInvalid={errors.nomecp} type="text" {...register('nomecp', hospedagemValidator.nomecp)} />
                    {
                        errors.nomecp &&
                        <p className='mt-1 text-danger'>{errors.nomecp.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label >Endereço de E-mail: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', hospedagemValidator.email)} />
                    {
                        errors.email &&
                        <p className='mt-1 text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId='senha'>
                    <Form.Label >Senha: </Form.Label>
                    <Form.Control isInvalid={errors.senha} type="text" {...register('senha', hospedagemValidator.senha)} />
                    {
                        errors.senha &&
                        <p className='mt-1 text-danger'>{errors.senha.message}</p>
                    }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId='nascimento'>
                    <Form.Label >Data de nascimento: </Form.Label>
                    <Form.Control isInvalid={errors.nascimento} type="date" {...register('nascimento', hospedagemValidator.nascimento)} />
                    {
                        errors.nascimento &&
                        <p className='mt-1 text-danger'>{errors.nascimento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='numero'>
                    <Form.Label >Número de telefone: </Form.Label>
                    <Form.Control 
                    mask='(99) 99999-9999'
                    maxLength={15}
                    isInvalid={errors.numero} 
                    type="text" 
                    {...register('numero', hospedagemValidator.numero)} 
                    onChange={handleChange} />
                    {
                        errors.numero &&
                        <p className='mt-1 text-danger'>{errors.numero.message}</p>
                    }
                </Form.Group>
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/hospedagem'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
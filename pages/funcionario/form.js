import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import funcionarioValidator from '@/validator/funcionarioValidator'
import { mask } from 'remask'
import cargoValidador from '@/validator/cargoValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function handleChange(event){ 
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
        setValue(name, mask(valor, mascara));
    }

    function salvar(dados) {
        const funcionario = JSON.parse(window.localStorage.getItem('funcionario')) || []
        funcionario.push(dados)
        window.localStorage.setItem('funcionario', JSON.stringify(funcionario))
        push('/funcionario')
    }

    return (
        <Pagina>
            
            <Form>
                <Form.Group className="mb-3" controlId='nomecp'>
                    <Form.Label >Nome completo: </Form.Label>
                    <Form.Control isInvalid={errors.nomecp} type="text" {...register('nomecp', funcionarioValidator.nomecp)} />
                    {
                        errors.nomecp &&
                        <p className='mt-1 text-danger'>{errors.nomecp.message}</p>
                    }
                </Form.Group>
                
                <Form.Group as={Col} className="mb-3" controlId='cargo'>
                        <Form.Label >Informações de cargo: </Form.Label>
                        <Form.Select isInvalid={errors.cargo} type="text" {...register('cargo', cargoValidador.cargo)}>
                            <option value=''>Escolha o Cargo Desejado</option>
                            <option value='Gerente Geral'>Gerente Geral</option>
                            <option value='Gerente de Operações'>Gerente de Operações</option>
                            <option value='Gerente de Recepção'>Gerente de Recepção</option>
                            <option value='Gerente de Alimentos e Bebidas'>Gerente de Alimentos e Bebidas</option>
                        </Form.Select>
                        {
                            errors.cargo &&
                            <p className='mt-1 text-danger'>{errors.cargo.message}</p>
                        }
                    </Form.Group>

                <Form.Group className="mb-3" controlId='emailcp'>
                    <Form.Label >Endereço de e-mail corporativo: </Form.Label>
                    <Form.Control isInvalid={errors.emailcp} type="text" {...register('emailcp',funcionarioValidator.emailcp)} />
                    {
                        errors.emailcp &&
                        <p className='mt-1 text-danger'>{errors.emailcp.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label >Número de telefone: </Form.Label>
                    <Form.Control 
                    mask='(99) 99999-9999'
                    maxLength={15}
                    isInvalid={errors.telefone} 
                    type="text" 
                    {...register('telefone', funcionarioValidator.telefone)} 
                    onChange={handleChange}/>
                    {
                        errors.telefone &&
                        <p className='mt-1 text-danger'>{errors.telefone.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='acesso'>
                    <Form.Label >Informações de acesso (níveis de permissão): </Form.Label>
                    <Form.Control isInvalid={errors.acesso} type="text" {...register('acesso',funcionarioValidator.acesso)} />
                    {
                        errors.acesso &&
                        <p className='mt-1 text-danger'>{errors.acesso.message}</p>
                    }     
                </Form.Group>
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/funcionario'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
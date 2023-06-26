import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import { mask } from 'remask'
import servicosValidator from '@/validator/servicosValidator'


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
        const servicos = JSON.parse(window.localStorage.getItem('servicos')) || []
        servicos.push(dados)
        window.localStorage.setItem('servicos', JSON.stringify(servicos))
        push('/servicos')
    }

    return (
        <Pagina>
            <Form>
            
                <Form.Group as={Col} className="mb-3" controlId='pagamento'>
                    <Form.Label >Nome do serviço: </Form.Label>
                    <Form.Select isInvalid={errors.pagamento} type="text" {...register('pagamento', servicosValidator.pagamento)}>
                        <option>escolha a serviço</option>
                        <option>spa</option>
                        <option>academia</option>
                        
                    </Form.Select>
                    {
                        errors.pagamento &&
                        <p className='mt-1 text-danger'>{errors.pagamento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='funcionamento'>
                    <Form.Label >Horários de funcionamento: </Form.Label>
                    <Form.Control isInvalid={errors.funcionamento} type="time" {...register('funcionamento', servicosValidator.funcionamento)} />
                    {
                        errors.funcionamento &&
                        <p className='mt-1 text-danger'>{errors.funcionamento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label >Telefone do funcionário: </Form.Label>
                    <Form.Control  
                    mask='(99) 99999-9999'
                    maxLength={15}
                    isInvalid={errors.telefone} 
                    type="text" 
                    {...register('telefone', servicosValidator.telefone)} 
                    onChange={handleChange} />
                    {
                        errors.telefone &&
                        <p className='mt-1 text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label >E-mail do funcionário: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', servicosValidator.email)} />
                    {
                        errors.email &&
                        <p className='mt-1 text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/servicos'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
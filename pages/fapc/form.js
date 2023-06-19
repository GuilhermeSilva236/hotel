import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import fapcValidator from '@/validator/fapcValidator'
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
        const fapc = JSON.parse(window.localStorage.getItem('fapc')) || []
        fapc.push(dados)
        window.localStorage.setItem('fapc', JSON.stringify(fapc))
        push('/fapc')
    }

    return (
        <Pagina>
            <Form>
                <div style={{ minHeight: '0vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {['Success'].map((variant) => (
                        <div key={variant} className="mb-2">
                            <Card
                                bg={variant.toLowerCase()}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                style={{ width: '40rem' }}
                            >
                                <Card.Body>
                                    <Card.Img variant="top" src="/img/banner1.png" />
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                
                <Form.Group className="mb-3" controlId='ade'>
                        <Form.Label >Nome do animal de estimação: </Form.Label>
                        <Form.Control isInvalid={errors.ade} type="text" {...register('ade', fapcValidator.ade)} />
                        {
                            errors.ade &&
                            <p className='mt-1 text-danger'>{errors.ade.message}</p>
                        }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId='ddc'>
                        <Form.Label >Data da consulta: </Form.Label>
                        <Form.Control isInvalid={errors.ddc} type="date" {...register('ddc', fapcValidator.ddc)} />
                        {
                            errors.ddc &&
                            <p className='mt-1 text-danger'>{errors.ddc.message}</p>
                        }
                </Form.Group>

                <Form.Group className="mb-3" controlId='nva'>
                    <Form.Label >Nome do veterinário atendente: </Form.Label>
                    <Form.Control isInvalid={errors.nva} type="text" {...register('nva', fapcValidator.nva)} />
                    {
                        errors.nva &&
                        <p className='mt-1 text-danger'>{errors.nva.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='aec'>
                    <Form.Label >Avaliação da experiência na clínica (escala de 1 a 5): </Form.Label>
                    <Form.Control 
                    mask='9'
                    maxLength={1}
                    isInvalid={errors.aec} 
                    type="text" 
                    {...register('aec', fapcValidator.aec)}
                    onChange={handleChange} />
                    {
                        errors.aec &&
                        <p className='mt-1 text-danger'>{errors.aec.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='aav'>
                    <Form.Label >Avaliação do atendimento do veterinário (escala de 1 a 5): </Form.Label>
                    <Form.Control 
                    mask='9'
                    maxLength={1}
                    isInvalid={errors.aav} 
                    type="text" 
                    {...register('aav', fapcValidator.aav)}
                    onChange={handleChange} />
                    {
                        errors.aav &&
                        <p className='mt-1 text-danger'>{errors.aav.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='aet'>
                    <Form.Label >Avaliação da eficácia do tratamento (escala de 1 a 5): </Form.Label>
                    <Form.Control 
                    mask='9'
                    maxLength={1}
                    isInvalid={errors.aet} 
                    type="text" 
                    {...register('aet', fapcValidator.aet)}
                    onChange={handleChange} />
                    {
                        errors.aet &&
                        <p className='mt-1 text-danger'>{errors.aet.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='cact'>
                    <Form.Label >Comentários adicionais sobre a consulta e tratamento: </Form.Label>
                    <Form.Control isInvalid={errors.cact} type="text" {...register('cact', fapcValidator.cact)} />
                    {
                        errors.cact &&
                        <p className='mt-1 text-danger'>{errors.cact.message}</p>
                    }
                </Form.Group>
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/fapc'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
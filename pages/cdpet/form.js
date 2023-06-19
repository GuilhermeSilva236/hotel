import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import cdpetValidator from '@/validator/cdpetvalidator'

export const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const cdpet = JSON.parse(window.localStorage.getItem('cdpet')) || []
        cdpet.push(dados)
        window.localStorage.setItem('cdpet', JSON.stringify(cdpet))
        push('/cdpet')
    }
    return (
        <>
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
                    <Form.Group className="mb-3" controlId='NomedoPet'>
                        <Form.Label >Nome Do Pet: </Form.Label>
                        <Form.Control isInvalid={errors.NomedoPet} type="text" {...register('NomedoPet', cdpetValidator.NomedoPet)} />
                        {
                            errors.NomedoPet &&
                            <p className='mt-1 text-danger'>{errors.NomedoPet.message}</p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='Especie'>
                        <Form.Label >Espécie: </Form.Label>
                        <Form.Control isInvalid={errors.Especie} type="text" {...register('Especie', cdpetValidator.Especie)} />
                        {
                            errors.cpf &&
                            <p className='mt-1 text-danger'>{errors.cpf.message}</p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='Raca'>
                        <Form.Label >Raça: </Form.Label>
                        <Form.Control isInvalid={errors.Raca} type="text" {...register('Raca', cdpetValidator.Raca)} />
                        {
                            errors.Raca &&
                            <p className='mt-1 text-danger'>{errors.Raca.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='Datadenascimento'>
                        <Form.Label >Data De Nascimento: </Form.Label>
                        <Form.Control isInvalid={errors.Datadenascimento} type="text" {...register('Datadenascimento', cdpetValidator.Datadenascimento)} />
                        {
                            errors.Datadenascimento &&
                            <p className='mt-1 text-danger'>{errors.Datadenascimento.message}</p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='Sexo'>
                        <Form.Label >Sexo: </Form.Label>
                        <Form.Control isInvalid={errors.Sexo} type="text" {...register('Sexo', cdpetValidator.Sexo)} />
                        {
                            errors.Sexo &&
                            <p className='mt-1 text-danger'>{errors.Sexo.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='Peso'>
                        <Form.Label >Peso: </Form.Label>
                        <Form.Control isInvalid={errors.Peso} type="text" {...register('Peso', cdpetValidator.Peso)} />
                        {
                            errors.Peso &&
                            <p className='mt-1 text-danger'>{errors.Peso.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='Tamanho'>
                        <Form.Label >Tamanho: </Form.Label>
                        <Form.Control isInvalid={errors.Tamanho} type="text" {...register('Tamanho', cdpetValidator.Tamanho)} />
                        {
                            errors.Tamanho &&
                            <p className='mt-1 text-danger'>{errors.Tamanho.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='Comportamento'>
                        <Form.Label >Comportamento: </Form.Label>
                        <Form.Control isInvalid={errors.Comportamento} type="text" {...register('Comportamento', cdpetValidator.Comportamento)} />
                        {
                            errors.Comportamento &&
                            <p className='mt-1 text-danger'>{errors.Comportamento.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='Infocontato'>
                        <Form.Label >Informaçõoes De Contato: </Form.Label>
                        <Form.Control isInvalid={errors.Infocontato} type="text" {...register('Infocontato', cdpetValidator.Infocontato)} />
                        {
                            errors.Infocontato &&
                            <p className='mt-1 text-danger'>{errors.Infocontato.message}</p>
                        }
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <AiOutlineCheck className='me-2' />
                            Salvar
                        </Button>

                        <Link className=' ms-2 btn btn-danger' href='/cdpet'>
                            <IoMdArrowBack className='me-2' />
                            voltar
                        </Link>
                    </div>
                </Form>
            </Pagina>
        </>
    )
}

export default form
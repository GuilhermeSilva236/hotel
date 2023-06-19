import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import cddonoValidator from '@/validator/cddonoValidator'
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
        const cddono = JSON.parse(window.localStorage.getItem('cddono')) || []
        cddono.push(dados)
        window.localStorage.setItem('cddono', JSON.stringify(cddono))
        push('/cddono')
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
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cddonoValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='mt-1 text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='NomedoseuPet'>
                        <Form.Label >Nome Do Seu Pet: </Form.Label>
                        <Form.Control isInvalid={errors.NomedoseuPet} type="text" {...register('NomedoseuPet', cddonoValidator.NomedoseuPet)} />
                        {
                            errors.NomedoseuPet &&
                            <p className='mt-1 text-danger'>{errors.NomedoseuPet.message}</p>
                        }
                    </Form.Group>

                <Form.Group className="mb-3" controlId='cpf'>
                    <Form.Label >CPF: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    maxLength={14}
                    isInvalid={errors.cpf} 
                    type="text" 
                    {...register('cpf', cddonoValidator.cpf)} 
                    onChange={handleChange}/>
                    {
                        errors.cpf &&
                        <p className='mt-1 text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='rg'>
                    <Form.Label >RG: </Form.Label>
                    <Form.Control isInvalid={errors.rg} type="text" {...register('rg', cddonoValidator.rg)} />
                    {
                        errors.rg &&
                        <p className='mt-1 text-danger'>{errors.rg.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label >E-mail: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', cddonoValidator.email)} />
                    {
                        errors.email &&
                        <p className='mt-1 text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label >Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone', cddonoValidator.telefone)} />
                    {
                        errors.telefone &&
                        <p className='mt-1 text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='cep'>
                    <Form.Label >CEP: </Form.Label>
                    <Form.Control isInvalid={errors.cep} type="text" {...register('cep', cddonoValidator.cep)} />
                    {
                        errors.cep &&
                        <p className='mt-1 text-danger'>{errors.cep.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='logradouro'>
                    <Form.Label >Logradouro: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro', cddonoValidator.logradouro)} />
                    {
                        errors.logradouro &&
                        <p className='mt-1 text-danger'>{errors.logradouro.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='complemento'>
                    <Form.Label >Complemento: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento', cddonoValidator.complemento)} />
                    {
                        errors.complemento &&
                        <p className='mt-1 text-danger'>{errors.complemento.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='numero'>
                    <Form.Label >Numero: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" {...register('numero', cddonoValidator.numero)} />
                    {
                        errors.numero &&
                        <p className='mt-1 text-danger'>{errors.numero.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='bairro'>
                    <Form.Label >Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro', cddonoValidator.bairro)} />
                    {
                        errors.bairro &&
                        <p className='mt-1 text-danger'>{errors.bairro.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/cddono'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
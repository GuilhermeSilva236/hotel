import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import cdpetconsulValidator from '@/validator/cdpetconsulValidator'
import { mask } from 'remask'

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
        const cdpetconsul = JSON.parse(window.localStorage.getItem('cdpetconsul')) || []
        cdpetconsul.push(dados)
        window.localStorage.setItem('cdpetconsul', JSON.stringify(cdpetconsul))
        push('/cdpetconsul')
    }

    return (
        <Pagina>
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
            <Form>
                <Form.Group className="mb-3" controlId='nomedopet'>
                    <Form.Label >Nome Do Pet: </Form.Label>
                    <Form.Control isInvalid={errors.nomedopet} type="text" {...register('nomedopet', cdpetconsulValidator.nomedopet)} />
                    {
                        errors.nomedopet &&
                        <p className='mt-1 text-danger'>{errors.nomedopet.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='nomedop'>
                    <Form.Label >Nome Do Proprietário: </Form.Label>
                    <Form.Control isInvalid={errors.nomedop} type="text" {...register('nomedop', cdpetconsulValidator.nomedop)} />
                    {
                        errors.nomedop &&
                        <p className='mt-1 text-danger'>{errors.nomedop.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='numerodetelefone'>
                    <Form.Label >Numero De Telefone: </Form.Label>
                    <Form.Control 
                    mask='(99)99999-9999'
                    maxLength={14}
                    isInvalid={errors.numerodetelefone} 
                    type="text" 
                    {...register('numerodetelefone', cdpetconsulValidator.numerodetelefone)}
                    onChange={handleChange} />
                    {
                        errors.numerodetelefone &&
                        <p className='mt-1 text-danger'>{errors.numerodetelefone.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='condicoesmedicaspreexistentes'>
                    <Form.Label >Condições médicas pré-existentes: </Form.Label>
                    <Form.Control isInvalid={errors.condicoesmedicaspreexistentes} type="text" {...register('condicoesmedicaspreexistentes',cdpetconsulValidator.condicoesmedicaspreexistentes)} />
                    {
                        errors.condicoesmedicaspreexistentes &&
                        <p className='mt-1 text-danger'>{errors.condicoesmedicaspreexistentes.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='alergiasconhecidas'>
                    <Form.Label >Alergias Conhecidas: </Form.Label>
                    <Form.Control isInvalid={errors.alergiasconhecidas} type="text" {...register('alergiasconhecidas',cdpetconsulValidator.alergiasconhecidas)} />
                    {
                        errors.alergiasconhecidas &&
                        <p className='mt-1 text-danger'>{errors.alergiasconhecidas.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='detalhessintomas'>
                    <Form.Label >Detalhes Dos Sintomas: </Form.Label>
                    <Form.Control isInvalid={errors.detalhessintomas} type="text" {...register('detalhessintomas',cdpetconsulValidator.detalhessintomas)} />
                    {
                        errors.detalhessintomas &&
                        <p className='mt-1 text-danger'>{errors.detalhessintomas.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='iniciodosintomas'>
                    <Form.Label >Inicio Dos Sintomas: </Form.Label>
                    <Form.Control isInvalid={errors.iniciodosintomas} type="text" {...register('iniciodosintomas',cdpetconsulValidator.iniciodosintomas)} />
                    {
                        errors.iniciodosintomas &&
                        <p className='mt-1 text-danger'>{errors.iniciodosintomas.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='dpc'>
                    <Form.Label >Data preferencial para a consulta: </Form.Label>
                    <Form.Control isInvalid={errors.dhpc} type="date" {...register('dpc',cdpetconsulValidator.dhpc)} />
                    {
                        errors.dpc &&
                        <p className='mt-1 text-danger'>{errors.dhpc.message}</p>
                    }     
                </Form.Group>

                <Form.Group className="mb-3" controlId='hpc'>
                    <Form.Label >Horário preferencial para a consulta: </Form.Label>
                    <Form.Control isInvalid={errors.dhpc} type="time" {...register('hpc',cdpetconsulValidator.hhpc)} />
                    {
                        errors.dhpc &&
                        <p className='mt-1 text-danger'>{errors.dhpc.message}</p>
                    }     
                </Form.Group>
                

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>

                    <Link className=' ms-2 btn btn-danger' href='/cdpetconsul'>
                        <IoMdArrowBack className='me-2' />
                        voltar
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form
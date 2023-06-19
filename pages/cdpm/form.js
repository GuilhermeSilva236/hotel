import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import cdpmValidator from '@/validator/cdpmValidator'
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
                <Form.Group className="mb-3" controlId='dopro'>
                    <Form.Label >Nome do proprietário: </Form.Label>
                    <Form.Control isInvalid={errors.dopro} type="text" {...register('dopro', cdpmValidator.dopro)} />
                    {
                        errors.dopro &&
                        <p className='mt-1 text-danger'>{errors.dopro.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='malde'>
                        <Form.Label >Nome do animal de estimação: </Form.Label>
                        <Form.Control isInvalid={errors.malde} type="text" {...register('malde', cdpmValidator.malde)} />
                        {
                            errors.malde &&
                            <p className='mt-1 text-danger'>{errors.malde.message}</p>
                        }
                    </Form.Group>

                <Form.Group className="mb-3" controlId='especie'>
                    <Form.Label >Espécie do animal: </Form.Label>
                    <Form.Control isInvalid={errors.especie} type="text" {...register('especie', cdpmValidator.especie)} />
                    {
                        errors.especie &&
                        <p className='mt-1 text-danger'>{errors.especie.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='raca'>
                    <Form.Label >Raça do animal: </Form.Label>
                    <Form.Control isInvalid={errors.raca} type="text" {...register('raca', cdpmValidator.raca)} />
                    {
                        errors.raca &&
                        <p className='mt-1 text-danger'>{errors.raca.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='medicamen'>
                    <Form.Label >Medicamento(s) solicitado(s): </Form.Label>
                    <Form.Control isInvalid={errors.medicamen} type="text" {...register('medicamen', cdpmValidator.medicamen)} />
                    {
                        errors.medicamen &&
                        <p className='mt-1 text-danger'>{errors.medicamen.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='dosageme'>
                    <Form.Label >Dosagem e instruções de administraçãoe: </Form.Label>
                    <Form.Control isInvalid={errors.dosageme} type="text" {...register('dosageme', cdpmValidator.dosageme)} />
                    {
                        errors.dosageme &&
                        <p className='mt-1 text-danger'>{errors.dosageme.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='numer'>
                    <Form.Label >Número de contato: </Form.Label>
                    <Form.Control 
                    mask='(99)99999-9999'
                    maxLength={14}
                    isInvalid={errors.numer} 
                    type="text" 
                    {...register('numer', cdpmValidator.numer)}
                    onChange={handleChange}/>
                    {
                        errors.numer &&
                        <p className='mt-1 text-danger'>{errors.numer.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='endere'>
                    <Form.Label >Endereço para entrega (se aplicável): </Form.Label>
                    <Form.Control isInvalid={errors.endere} type="text" {...register('endere', cdpmValidator.endere)} />
                    {
                        errors.endere &&
                        <p className='mt-1 text-danger'>{errors.endere.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId='obser'>
                    <Form.Label >Observações adicionais: </Form.Label>
                    <Form.Control isInvalid={errors.obser} type="text" {...register('obser', cdpmValidator.obser)} />
                    {
                        errors.obser &&
                        <p className='mt-1 text-danger'>{errors.obser.message}</p>
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
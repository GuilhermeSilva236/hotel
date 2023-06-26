import Pagina from '@/components/Pagina'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const id = query.id
            const quartos = JSON.parse(localStorage.getItem('quartos'))
            const quartoss = quartos[id]

            for (let atributo in quartos) {
                setValue(atributo, quartos[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const quartos = JSON.parse(localStorage.getItem('quartos')) || []
        quartos.splice(query.id, 1, dados)
        localStorage.setItem('quartos', JSON.stringify(quartos))
        push('/quartos')
    }

    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="quarto">
                    <Form.Label>Número do quarto: </Form.Label>
                    <Form.Control type="text" {...register('quarto')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tipo">
                        <Form.Label>Tipo de quarto (individual, duplo, suíte, etc.): </Form.Label>
                        <Form.Control type="text" {...register('tipo')} />
                    </Form.Group>
                    
                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade máxima: </Form.Label>
                    <Form.Control type="text" {...register('capacidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="preço">
                    <Form.Label>Preço por noite: </Form.Label>
                    <Form.Control type="text" {...register('preço')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descrição">
                    <Form.Label>Descrição do quarto e comodidades: </Form.Label>
                    <Form.Control type="text" {...register('descrição')} />
                </Form.Group>
            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/quartos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
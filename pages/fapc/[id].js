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
            const fapc = JSON.parse(localStorage.getItem('fapc'))
            const fapcs = fapc[id]

            for (let atributo in fapc) {
                setValue(atributo, fapc[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const fapc = JSON.parse(localStorage.getItem('fapc')) || []
        fapc.splice(query.id, 1, dados)
        localStorage.setItem('fapc', JSON.stringify(fapc))
        push('/fapc')
    }

    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="ade">
                    <Form.Label>Nome do animal de estimação: </Form.Label>
                    <Form.Control type="text" {...register('ade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ddc">
                        <Form.Label>Data da consulta: </Form.Label>
                        <Form.Control type="text" {...register('ddc')} />
                    </Form.Group>
                    
                <Form.Group className="mb-3" controlId="nva">
                    <Form.Label>Nome do veterinário atendente: </Form.Label>
                    <Form.Control type="text" {...register('nva')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="aec">
                    <Form.Label>Avaliação da experiência na clínica (escala de 1 a 5): </Form.Label>
                    <Form.Control type="text" {...register('aec')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="aav">
                    <Form.Label>Avaliação do atendimento do veterinário (escala de 1 a 5): </Form.Label>
                    <Form.Control type="text" {...register('aav')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="aet">
                    <Form.Label>Avaliação da eficácia do tratamento (escala de 1 a 5): </Form.Label>
                    <Form.Control type="text" {...register('aet')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cact">
                    <Form.Label>Comentários adicionais sobre a consulta e tratamento: </Form.Label>
                    <Form.Control type="text" {...register('cact')} />
                </Form.Group>
            
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/fapc">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
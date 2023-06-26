import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
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
        if(query.id){
            const id = query.id
            const funcionario = JSON.parse(window.localStorage.getItem('funcionario'))
            const funcionarios = funcionario[id]

            for(let atributo in funcionario){
                setValue(atributo, funcionario[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const cdpetconsul = JSON.parse(window.localStorage.getItem('funcionario')) || []
        funcionario.splice(query.id, 1, dados)
        window.localStorage.setItem('funcionario', JSON.stringify(funcionario))
        push('/funcionario')
    }

    return (
        <Pagina titulo="funcionario">
            <Form>
                <Form.Group className="mb-3" controlId="nomecp">
                    <Form.Label>Nome completo: </Form.Label>
                    <Form.Control type="text" {...register('nomecp')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cargo">
                    <Form.Label>Função ou cargo: </Form.Label>
                    <Form.Control type="text" {...register('cargo')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="emailcp">
                    <Form.Label>Endereço de e-mail corporativo: </Form.Label>
                    <Form.Control type="text" {...register('emailcp')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Número de telefone: </Form.Label>
                    <Form.Control type="text" {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="acesso">
                    <Form.Label>Informações de acesso (níveis de permissão): </Form.Label>
                    <Form.Control type="text" {...register('acesso')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/funcionario">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form


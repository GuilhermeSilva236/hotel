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
            const hospedagem = JSON.parse(localStorage.getItem('hospedagem'))
            const hospedagems = hospedagem[id]

            for (let atributo in hospedagem) {
                setValue(atributo, hospedagem[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const hospedagem = JSON.parse(localStorage.getItem('hospedagem')) || []
        hospedagem.splice(query.id, 1, dados)
        localStorage.setItem('hospedagem', JSON.stringify(hospedagem))
        push('/hospedagem')
    }

    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="nomecp">
                    <Form.Label>Nome completo: </Form.Label>
                    <Form.Control type="text" {...register('nomecp')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Endereço de E-mail: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control type="text" {...register('senha')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nascimento">
                    <Form.Label>Data de nascimento: </Form.Label>
                    <Form.Control type="date" {...register('nascimento')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número de telefone: </Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/hospedagem">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
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
        if (query.id){
            const servicos = JSON.parse(window.localStorage.getItem('servicos'))
            const servicoss = servicos [query.id]

            for (let atributo in servicoss){
                setValue(atributo, servicoss[atributo]) 
            }
        }
    }, [query.id])


    function salvar(dados) {
        const servicos = JSON.parse(localStorage.getItem('servicos')) || []
        servicos.splice(query.id, 1, dados)
        localStorage.setItem('servicos', JSON.stringify(servicos))
        push('/servicos')
    }

    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="servico">
                    <Form.Label>Nome do serviço (restaurante, spa, academia, etc.): </Form.Label>
                    <Form.Control type="text" {...register('servico')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="funcionamento">
                        <Form.Label>Horários de funcionamento: </Form.Label>
                        <Form.Control type="text" {...register('funcionamento')} />
                    </Form.Group>
                    
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone do funcionário: </Form.Label>
                    <Form.Control type="text" {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail do funcionário: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/servicos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
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
            const cdpetconsul = JSON.parse(window.localStorage.getItem('cdpetconsul'))
            const cdpetconsuls = cdpetconsul[id]

            for(let atributo in cdpetconsul){
                setValue(atributo, cdpetconsul[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const cdpetconsul = JSON.parse(window.localStorage.getItem('cdpetconsul')) || []
        cdpetconsul.splice(query.id, 1, dados)
        window.localStorage.setItem('cdpetconsul', JSON.stringify(cdpetconsul))
        push('/cdpetconsul')
    }

    return (
        <Pagina titulo="cdpetconsul">
            <Form>
                <Form.Group className="mb-3" controlId="nomedopet">
                    <Form.Label>Nome Do Pet: </Form.Label>
                    <Form.Control type="text" {...register('nomedopet')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nomedop">
                    <Form.Label>Nome Do Proprietario: </Form.Label>
                    <Form.Control type="text" {...register('nomedop')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numerodetelefone">
                    <Form.Label>Numero De Telefone: </Form.Label>
                    <Form.Control type="text" {...register('numerodetelefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="condicoesmedicaspreexistentes">
                    <Form.Label>Condições médicas pré-existentes: </Form.Label>
                    <Form.Control type="text" {...register('condicoesmedicaspreexistentes')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="alergiasconhecidas">
                    <Form.Label>Alergias Conhecidas: </Form.Label>
                    <Form.Control type="text" {...register('alergiasconhecidas')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="detalhessintomas">
                    <Form.Label>Detalhes Dos Sintomas: </Form.Label>
                    <Form.Control type="text" {...register('detalhessintomas')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="iniciodosintomas">
                    <Form.Label>Inicio Dos Sintomas: </Form.Label>
                    <Form.Control type="text" {...register('iniciodosintomas')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dpc">
                    <Form.Label>Data e horário preferenciais para a consulta: </Form.Label>
                    <Form.Control type="text" {...register('dpc')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="hpc">
                    <Form.Label>Data e horário preferenciais para a consulta: </Form.Label>
                    <Form.Control type="text" {...register('hpc')} />
                </Form.Group>


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cdpetconsul">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form


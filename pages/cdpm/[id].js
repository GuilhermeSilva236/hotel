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
            const cddono = JSON.parse(localStorage.getItem('cddono'))
            const cddonos = cddono[id]

            for (let atributo in cddono) {
                setValue(atributo, cddono[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const cddono = JSON.parse(localStorage.getItem('cddono')) || []
        cddono.splice(query.id, 1, dados)
        localStorage.setItem('cddono', JSON.stringify(cddono))
        push('/cddono')
    }

    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="dopro">
                    <Form.Label>Nome do proprietário: </Form.Label>
                    <Form.Control type="text" {...register('dopro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="malde">
                        <Form.Label>Nome do animal de estimação: </Form.Label>
                        <Form.Control type="text" {...register('malde')} />
                    </Form.Group>
                    
                <Form.Group className="mb-3" controlId="especie">
                    <Form.Label>Espécie do animal: </Form.Label>
                    <Form.Control type="text" {...register('especie')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="raca">
                    <Form.Label>Raça do animal: </Form.Label>
                    <Form.Control type="text" {...register('raca')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="medicamen">
                    <Form.Label>Medicamento(s) solicitado(s): </Form.Label>
                    <Form.Control type="text" {...register('medicamen')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dosageme">
                    <Form.Label>Dosagem e instruções de administração:: </Form.Label>
                    <Form.Control type="text" {...register('dosageme')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numer">
                    <Form.Label>Número de contato: </Form.Label>
                    <Form.Control type="text" {...register('numer')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="endere">
                    <Form.Label>Endereço para entrega (se aplicável): </Form.Label>
                    <Form.Control type="text" {...register('endere')} />
                </Form.Group>



                <Form.Group className="mb-3" controlId="obser">
                    <Form.Label>Observações adicionais: </Form.Label>
                    <Form.Control type="text" {...register('obser')} />
                </Form.Group>
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cddono">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
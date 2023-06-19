import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [fapc, setfapc] = useState([])

    useEffect(() => {
        setfapc(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('fapc')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('fapc', JSON.stringify(itens))
            setfapc(itens)
        }
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
            <Link href="/fapc/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome do animal de estimação</th>
                        <th>Data da consulta</th>
                        <th>Nome do veterinário atendente</th>
                        <th>Avaliação da experiência na clínica (escala de 1 a 5)</th>
                        <th>Avaliação do atendimento do veterinário (escala de 1 a 5)</th>
                        <th>Avaliação da eficácia do tratamento (escala de 1 a 5)</th>
                        <th>Comentários adicionais sobre a consulta e tratamento</th>
                    </tr>
                </thead>
                <tbody>
                    {fapc.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/fapc/form' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.ade}</td>
                            <td>{item.ddc}</td>
                            <td>{item.nva}</td>
                            <td>{item.aec}</td>
                            <td>{item.aav}</td>
                            <td>{item.aet}</td>
                            <td>{item.cact}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
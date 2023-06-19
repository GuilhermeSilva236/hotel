import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [cdpetconsul, setcdpetconsul] = useState([])

    useEffect(() => {
        setcdpetconsul(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('cdpetconsul')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('cdpetconsul', JSON.stringify(itens))
            setcdpetconsul(itens)
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
            <Link href="/cdpetconsul/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome Do Pet</th>
                        <th>Nome Do Proprietário</th>
                        <th>Numero De Telefone</th>
                        <th>Condições médicas pré-existentes</th>
                        <th>Alergias Conhecidas</th>
                        <th>Detalhes Dos Sintomas</th>
                        <th>Inicio Dos Sintomas</th>
                        <th>Data e horário preferenciais para a consulta</th>
                        <th>horário preferenciais para a consulta</th>


                    </tr>
                </thead>
                <tbody>
                    {cdpetconsul.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/cdpetconsul/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nomedopet}</td>
                            <td>{item.nomedop}</td>
                            <td>{item.numerodetelefone}</td>
                            <td>{item.condicoesmedicaspreexistentes}</td>
                            <td>{item.alergiasconhecidas}</td>
                            <td>{item.detalhessintomas}</td>
                            <td>{item.iniciodosintomas}</td>
                            <td>{item.dpc}</td>
                            <td>{item.hpc}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
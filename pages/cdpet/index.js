import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {
    const [cdpet, setCdpet] = useState([])

    useEffect(() => {
        setCdpet(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('cdpet')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('cdpet', JSON.stringify(itens))
            setCdpet(itens)
        }
    }
    return (
        <>
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

                <Link href="cdpet/form" className='mb-2 btn btn-primary'>
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome do Pet</th>
                            <th>Espécie</th>
                            <th>Raça</th>
                            <th>Data De Nascimento</th>
                            <th>Sexo</th>
                            <th>Peso</th>
                            <th>Tamanho</th>
                            <th>Comportamento</th>
                            <th>Informações De Contato</th>


                        </tr>
                    </thead>
                    <tbody>
                        {cdpet.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/cdpet/form' + i}>
                                        <BsPencilFill title="Alterar" className='text-primary' />
                                    </Link>
                                    {' '}
                                    <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.NomedoPet}</td>
                                <td>{item.Especie}</td>
                                <td>{item.Raca}</td>
                                <td>{item.Datadenascimento}</td>
                                <td>{item.Sexo}</td>
                                <td>{item.Peso}</td>
                                <td>{item.Tamanho}</td>
                                <td>{item.Comportamento}</td>
                                <td>{item.Infocontato}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default index
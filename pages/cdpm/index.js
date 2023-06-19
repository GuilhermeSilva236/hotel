import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [cdpm, setcdpm] = useState([])

    useEffect(() => {
        setcdpm(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('cdpm')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('cdpm', JSON.stringify(itens))
            setcdpm(itens)
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
            <Link href="/cdpm/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome do proprietário</th>
                        <th>Nome do animal de estimação</th>
                        <th>Espécie do animal</th>
                        <th>Raça do animal</th>
                        <th>Medicamento(s) solicitado(s)</th>
                        <th>Dosagem e instruções de administração</th>
                        <th>Número de contato</th>
                        <th>Endereço para entrega (se aplicável)</th>
                        <th>Observações adicionais</th>
                    </tr>
                </thead>
                <tbody>
                    {cdpm.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/cdpm/form' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.dopro}</td>
                            <td>{item.malde}</td>
                            <td>{item.especie}</td>
                            <td>{item.raca}</td>
                            <td>{item.medicamen}</td>
                            <td>{item.dosageme}</td>
                            <td>{item.numer}</td>
                            <td>{item.endere}</td>
                            <td>{item.obser}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
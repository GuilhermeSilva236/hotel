import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [cddono, setcddono] = useState([])

    useEffect(() => {
        setcddono(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('cddono')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('cddono', JSON.stringify(itens))
            setcddono(itens)
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
            <Link href="/cddono/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Nome do Seu Pet</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Cep</th>
                        <th>Logadouro</th>
                        <th>Complemento</th>
                        <th>Número</th>
                        <th>Bairro</th>


                    </tr>
                </thead>
                <tbody>
                    {cddono.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/cddono/form' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.NomedoseuPet}</td>
                            <td>{item.cpf}</td>
                            <td>{item.rg}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                            <td>{item.logadouro}</td>
                            <td>{item.complemento}</td>
                            <td>{item.numero}</td>
                            <td>{item.bairro}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
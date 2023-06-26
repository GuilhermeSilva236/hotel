import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [servicos, setservicos] = useState([])

    useEffect(() => {
        setservicos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('servicos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('servicos', JSON.stringify(itens))
            setservicos(itens)
        }
    }

    return (
        <Pagina>
           
            <Link href="/servicos/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome do serviço (restaurante, spa, academia, etc.)</th>
                        <th>Horários de funcionamento</th>
                        <th>Telefone do funcionário</th>
                        <th>E-mail do funcionário</th>
                        
                    
                    </tr>
                </thead>
                <tbody>
                    {servicos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/servicos/form' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.servico}</td>
                            <td>{item.funcionamento}</td>
                            <td>{item.telefone}</td>
                            <td>{item.email}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
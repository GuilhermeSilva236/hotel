import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [hospedagem, sethospedagem] = useState([])

    useEffect(() => {
        sethospedagem(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('hospedagem')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('hospedagem', JSON.stringify(itens))
            sethospedagem(itens)
        }
    }

    return (
        <Pagina>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Data da Reserva</th>
                        <th>Nome completo</th>
                        <th>Endereço de E-mail</th>
                        <th>Senha</th>
                        <th>Data de nascimento</th>
                        <th>Número de telefone</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {hospedagem.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/hospedagem/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.datareserva}</td>
                            <td>{item.nomecp}</td>
                            <td>{item.email}</td>
                            <td>{item.senha}</td>
                            <td>{item.nascimento}</td>
                            <td>{item.numero}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
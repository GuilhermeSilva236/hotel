import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [funcionario, setfuncionario] = useState([])

    useEffect(() => {
        setfuncionario(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('funcionario')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('funcionario', JSON.stringify(itens))
            setfuncionario(itens)
        }
    }

    return (
        <Pagina>
            
            <Link href="/funcionario/form" className='mb-2 btn btn-danger'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome completo</th>
                        <th>Função ou cargo</th>
                        <th>Endereço de e-mail corporativo</th>
                        <th>Número de telefone</th>
                        <th>Informações de acesso (níveis de permissão)</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {funcionario.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/funcionario/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nomecp}</td>
                            <td>{item.cargo}</td>
                            <td>{item.emailcp}</td>
                            <td>{item.telefone}</td>
                            <td>{item.acesso}</td>
                        
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
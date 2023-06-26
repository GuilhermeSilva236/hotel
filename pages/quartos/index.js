import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [quartos, setquartos] = useState([])

    useEffect(() => {
        setquartos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('quartos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('quartos', JSON.stringify(itens))
            setquartos(itens)
        }
    }

    return (
        <Pagina>
            
            <Link href="/quartos/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Número do quarto</th>
                        <th>Tipo de quarto (individual, duplo, suíte, etc.)</th>
                        <th>Capacidade máxima</th>
                        <th>Preço por noite</th>
                        <th>Descrição do quarto e comodidades</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {quartos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/quartos/form' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.quarto}</td>
                            <td>{item.tipo}</td>
                            <td>{item.capacidade}</td>
                            <td>{item.preço}</td>
                            <td>{item.descrição}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
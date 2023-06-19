
import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useEffect } from 'react'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const id = query.id
            const cdpet = JSON.parse(localStorage.getItem('cdpet'))
            const cdpets = cdpet[id]

            for (let atributo in cdpet) {
                setValue(atributo, cdpet[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const cdpet = JSON.parse(localStorage.getItem('cdpet')) || []
        cdpet.splice(query.id, 1, dados)
        localStorage.setItem('cdpet', JSON.stringify(cdpet))
        push('/cdpet')
    }

    return (
        <>
            <Pagina>
                <Form>
                    <Form.Group className="mb-3" controlId="NomedoPet">
                        <Form.Label>Nome Do Pet: </Form.Label>
                        <Form.Control type="text" {...register('NomedoPet')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Especie">
                        <Form.Label>Espécie: </Form.Label>
                        <Form.Control type="text" {...register('Especie')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Raca">
                        <Form.Label>Raça: </Form.Label>
                        <Form.Control type="text" {...register('Raca')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Datadenascimento">
                        <Form.Label>Data De Nascimento: </Form.Label>
                        <Form.Control type="text" {...register('Datadenascimento')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Sexo">
                        <Form.Label>Sexo: </Form.Label>
                        <Form.Control type="text" {...register('Sexo')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Peso">
                        <Form.Label>Peso: </Form.Label>
                        <Form.Control type="text" {...register('Peso')} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="Tamanho">
                        <Form.Label>Tamanho: </Form.Label>
                        <Form.Control type="text" {...register('Tamanho')} />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="Comportamento">
                        <Form.Label>Comportamento: </Form.Label>
                        <Form.Control type="text" {...register('Comportamento')} />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="Infocontato">
                        <Form.Label>Informações De Contato: </Form.Label>
                        <Form.Control type="text" {...register('Infocontato')} />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <BsCheckLg className="me-2" />
                            Salvar
                        </Button>
                        <Link className="ms-2 btn btn-danger" href="/cdpet">
                            <AiOutlineArrowLeft className="me-2" />
                            Voltar
                        </Link>
                    </div>
                </Form>
            </Pagina>
        </>
    )
}

export default form
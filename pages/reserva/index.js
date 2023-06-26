import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '@mui/material/Button';
import Pagina from '@/components/Pagina';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import hospedagemValidator from '@/validator/hospedagemValidator';
import { mask } from 'remask';
import { Card, Container, Form } from 'react-bootstrap';


export default function CustomMonthLayout() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = () => {
    const formattedDate = selectedDate.toLocaleDateString();

    // Atualizar o estado do formulário com a data de reserva
    setFormData(formattedDate);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Lógica para lidar com os dados do formulário
    // Por exemplo, salvar no localStorage ou enviar para um servidor

    // Limpar o estado do formulário
    setFormData('');

    // Realizar qualquer outra ação necessária após o envio do formulário
  };

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  const { push } = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute('mask');
    setValue(name, mask(valor, mascara));
  }

  function salvar(dados) {
    const hospedagem = JSON.parse(window.localStorage.getItem('hospedagem')) || [];
    hospedagem.push(dados);
    window.localStorage.setItem('hospedagem', JSON.stringify(hospedagem));
    push('/hospedagem');
  }

  return (
    <> 
      <Pagina /> 

         <Container style={{border: '1px solid black', backgroundImage: 'url(https://wallpaperaccess.com/full/6688068.jpg)'  }}>

          
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '1rem' }}>Reserva</h2>
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', marginBottom: '1rem'  }}>
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          calendarType="US"
          locale="pt-BR"
          showNeighboringMonth={false}
          minDate={new Date()}
          />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Button style={{ backgroundColor: 'red', marginBottom: '1rem' }} variant="contained" onClick={handleButtonClick}>
          Selecionar
        </Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form onSubmit={handleFormSubmit}>
          <input type="text" value={formData} onChange={handleInputChange}  {...register('data', hospedagemValidator.nomecp)} />
        </Form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form>
          <Form.Group className="mb-3" controlId='nomecp'>
            <Form.Label  className=''>Nome completo:</Form.Label>
            <Form.Control isInvalid={errors.nomecp} type="text" {...register('nomecp', hospedagemValidator.nomecp)} />
            {errors.nomecp && <p className='mt-1 text-danger'>{errors.nomecp.message}</p>}
          </Form.Group>


          <Form.Label>Endereço de E-mail:</Form.Label>
          <Form.Control isInvalid={errors.email} type="text" {...register('email', hospedagemValidator.email)} />
          {errors.email && <p className='mt-1 text-danger'>{errors.email.message}</p>}


          <Form.Group className="mb-3" controlId='senha'>
            <Form.Label>Senha:</Form.Label>
            <Form.Control isInvalid={errors.senha} type="text" {...register('senha', hospedagemValidator.senha)} />
            {errors.senha && <p className='mt-1 text-danger'>{errors.senha.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId='nascimento'>
            <Form.Label>Data de nascimento:</Form.Label>
            <Form.Control isInvalid={errors.nascimento} type="date" {...register('nascimento', hospedagemValidator.nascimento)} />
            {errors.nascimento && <p className='mt-1 text-danger'>{errors.nascimento.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId='numero'>
            <Form.Label>Número de telefone:</Form.Label>
            <Form.Control
              mask='(99) 99999-9999'
              maxLength={15}
              isInvalid={errors.numero}
              type="text"
              {...register('numero', hospedagemValidator.numero)}
              onChange={handleChange}
              />
            {errors.numero && <p className='mt-1 text-danger'>{errors.numero.message}</p>}
          </Form.Group>

          <div className='text-center'>
            <Button variant="success" onClick={handleSubmit(salvar)}>
              <AiOutlineCheck className='me-2' />
              Salvar
            </Button>

            <Link className=' ms-2 btn btn-danger' href='/hospedagem'>
              <IoMdArrowBack className='me-2' />
              Voltar
            </Link>
          </div>
        </Form>
      </div>
             
              </Container>
    </>
  );
}

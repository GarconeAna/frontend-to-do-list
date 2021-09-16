import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../api/api';

const AnnotationEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getAnnotationById();
  }, [])

  const getAnnotationById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  }

  const handleFieldsChange = (evento) => {
    const auxFields = { ...fields };
    auxFields[evento.target.name] = evento.target.value;
    setFields(auxFields);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { ...fields };
    dados.prazo = parseInt(dados.prazo);
    const result = await Api.fetchPut(dados, id);
    const response = await result.json();
  }

  return (
    <>
      <section className='form'>
        <form onSubmit={handleSubmit} className='form-card'>
          <h1 className='form-title'>Editar</h1>
          <div className='form-label-input'>
            <label htmlFor="titulo" className='form-label'>Título</label>
            <input type="text" id="titulo" name="titulo" value={fields.titulo} onChange={handleFieldsChange} className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="descricao" className='form-label'>Descrição</label>
            <input type="text" id="descricao" name="descricao" value={fields.descricao} onChange={handleFieldsChange} className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="prioridade" className='form-label'>Prioridade</label>
            <input type="text" id="prioridade" name="prioridade" value={fields.prioridade} onChange={handleFieldsChange} className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="situacao" className='form-label'>Situação</label>
            <input type="text" id="situacao" name="situacao" value={fields.situacao} onChange={handleFieldsChange} className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="prazo" className='form-label'>Prazo</label>
            <input type="text" id="prazo" name="prazo" value={fields.prazo} onChange={handleFieldsChange}  className='form-input'/>
          </div>

          <Link to='/'>
            <button className='form-button'>Cancelar</button>
          </Link>
          <button type="submit" className='form-button'>Enviar</button>
        </form>
      </section>
    </>
  );
}

export default AnnotationEdit;
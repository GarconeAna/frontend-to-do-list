import React from 'react'
import './AnnotationAdd.scss';
import { Api } from '../../api/api';

const AnnotationAdd = (props) => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target.titulo.value);
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const situacao = evento.target.situacao.value;
    const prazo = evento.target.prazo.value;

    const Annotation = {
      titulo: titulo,
      descricao: descricao,
      prioridade: parseInt(prioridade),
      situacao: situacao,
      prazo: parseInt(prazo),
    }

    try {
      const response = await Api.fetchPost(Annotation);
      const data = await response;
      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='form'>
        <form onSubmit={handleSubmit} className='form-card'>
          <h1 className='form-title'>Cadastrar</h1>
          <div className='form-label-input'>
            <label htmlFor="titulo" className='form-label'>Título</label>
            <input type="text" id="titulo" name="titulo" className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="descricao" className='form-label'>Descrição</label>
            <input type="text" id="descricao" name="descricao" className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="prioridade" className='form-label'>Prioridade</label>
            <input type="text" id="prioridade" name="prioridade" className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="situacao" className='form-label'>Situação</label>
            <input type="text" id="situacao" name="situacao" className='form-input'/>
          </div>

          <div className='form-label-input'>
            <label htmlFor="prazo" className='form-label'>Prazo</label>
            <input type="text" id="prazo" name="prazo"  className='form-input'/>
          </div>

          <button className='form-button'>Cancelar</button>
          <button type="submit" className='form-button'>Enviar</button>
        </form>
      </section>
    </>
  )
}

export default AnnotationAdd;
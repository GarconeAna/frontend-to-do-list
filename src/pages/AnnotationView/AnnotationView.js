import React, { useEffect, useState } from 'react';
import './AnnotationView.scss';
import { Api } from '../../api/api';
import { Link } from 'react-router-dom';

const AnnotationView = (props) => {
  const [annotation, setAnnotation] = useState({});


  useEffect(() => {
    getAnnotationById();
  });

  const id = props.match.params.id;

  const getAnnotationById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();

    setAnnotation(data);
  }

  const handleDelete = async (evento) => {
    evento.preventDefault();
    try {
      const resposta = await Api.fetchDelete(id);
      const result = await resposta;
      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>
      <section id='card'>
        <div id='card-div'>
          <p id='card-item'>Título: { annotation.titulo }</p>
          <p id='card-item'>Descrição: { annotation.descricao }</p>
          <p id='card-item'>Prioridade: { annotation.prioridade }</p>
          <p id='card-item'>Situação: { annotation.situacao }</p>
          <p id='card-item'>Prazo: { annotation.prazo }</p>
          <Link to={`/edit/${annotation._id}`}>
            <button id='card-button'>Editar</button>
          </Link>
          <button id='card-button' onClick={handleDelete}>Apagar</button>
        </div>
      </section>
    </>
  );
}

export default AnnotationView;
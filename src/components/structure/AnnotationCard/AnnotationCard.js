import React from 'react';
import { Link } from 'react-router-dom';
import './AnnotationCard.scss';

const AnnotationCard = (props) => {
  const annotations = props.annotations;

  return (
    <>
      <Link to={`/view/${annotations._id}`} id='card'>
        <section id='card-section'>
          <h2 id='card-title'>{annotations.titulo}</h2>
          <span id='card-situation'>{annotations.situacao}</span>
        </section>
      </Link>
    </>
  );
} 

export default AnnotationCard;
import React, { useEffect, useState } from 'react';
import AnnotationCard from '../AnnotationCard/AnnotationCard';
import './AnnotationList.scss';
import { Api } from '../../../api/api';

const AnnotationList = () => {
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    getAnnotation();
  }, [])
  

  const getAnnotation = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();
    setAnnotations(data);
  }
  return (
    <>
      <section id='card'>
        {annotations.map((annotations, index) => (
          <AnnotationCard annotations={annotations} key={annotations._id} id='card-list'/>
        ))}
      </section>
    </>
  );
}

export default AnnotationList;